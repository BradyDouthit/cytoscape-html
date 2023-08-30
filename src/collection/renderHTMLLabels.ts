import cytoscape from "cytoscape";

// TODO: use proper types
export default function renderHTMLLabels(options: any) {
  console.log("LABELS!!");
  const cyto = this.cy();
  const cytoContainer = cyto.container();
  const labelHtmlContainer = document.createElement("div");
  const namespace = "__cytoscape-html__";

  const createNode = (node: any) => {
    const id = node.id();
    const html = node.data()?.htmlLabel;

    if (!html) return;

    const internalLabelId = `${namespace}_label-${id}`;
    const position = node.renderedPosition();
    const posX = position.x.toFixed(2);
    const posY = position.y.toFixed(2);

    const newLabel = document.createElement("div");
    const existingLabel = labelHtmlContainer.querySelector(
      "#" + internalLabelId
    );
    const labelTranslation = `translate(${posX}px, ${posY}px)`;
    const labelScale = `scale(${cyto.zoom()})`;
    const transform = `translate(-50%, -50%) ${labelTranslation} ${labelScale}`;

    newLabel.id = internalLabelId;
    newLabel.style.position = "absolute";
    newLabel.style.transform = transform;
    newLabel.style.zIndex = "2";
    newLabel.innerHTML = html;
    console.log({ internalLabelId, existingLabel, html });
    if (existingLabel) labelHtmlContainer.removeChild(existingLabel);

    labelHtmlContainer.appendChild(newLabel);

    if (options.hideOriginal)
      // Hide the original node
      node.style({ "background-opacity": 0 });
  };

  function handleMovement() {
    cyto.nodes().forEach((node) => createNode(node));
  }

  // TODO: DECONFLICT -- THIS ISN"T FIRING BECAUSE OF THE NODES FUNCTION
  if (!document.getElementById(namespace)) {
    const canvas = cytoContainer.querySelector("canvas");

    labelHtmlContainer.id = namespace;
    labelHtmlContainer.style.width = canvas.style.width;
    labelHtmlContainer.style.height = canvas.style.height;
    labelHtmlContainer.style.zIndex = "1";

    canvas.parentNode.appendChild(labelHtmlContainer);

    cyto.on("add", "node", (e: any) => createNode(e.target));
    cyto.on("drag", "node", (e: any) => createNode(e.target));
    cyto.on("pan resize", handleMovement);
  }

  return cyto.nodes();
}
