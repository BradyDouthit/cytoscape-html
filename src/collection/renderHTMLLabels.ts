import cytoscape from "cytoscape";

interface Options {
  hideOriginal: Boolean;
}

export default function renderHTMLLabels(options: Options) {
  const cyto = this.cy();
  const cytoContainer = cyto.container();
  const labelHtmlContainer = document.createElement("div");
  const internalId = "__cytoscape-html-labels__";

  const createLabel = (element: any) => {
    const id = element.id();
    const html = element.data()?.labelHtml;

    if (!html) return;

    const namespace = "__cytoscape-html-labels";
    const internalLabelId = `${namespace}_label-${id}`;
    const position = element.renderedPosition();
    
    // Check if position is defined
    if (!position) return;
    
    const posX = position.x.toFixed(2);
    const posY = position.y.toFixed(2);

    const newLabel = document.createElement("div");
    const existingLabel = labelHtmlContainer.querySelector("#" + internalLabelId);
    const labelTranslation = `translate(${posX}px, ${posY}px)`;
    const labelScale = `scale(${cyto.zoom()})`;
    const transform = `translate(-50%, -50%) ${labelTranslation} ${labelScale}`;

    newLabel.id = internalLabelId;
    newLabel.style.position = "absolute";
    newLabel.style.transform = transform;
    newLabel.style.zIndex = "2";
    newLabel.innerHTML = html;

    if (existingLabel) labelHtmlContainer.removeChild(existingLabel);

    labelHtmlContainer.appendChild(newLabel);

    if (options.hideOriginal) {
      // Hide the original label
      element.style({ "label": "" });
    }
  };

  function handleMovement() {
    // Handle both nodes and edges
    cyto.nodes().forEach((node) => createLabel(node));
    cyto.edges().forEach((edge) => createLabel(edge));
  }

  if (!document.getElementById(internalId)) {
    const canvas = cytoContainer.querySelector("canvas");

    labelHtmlContainer.id = internalId;
    canvas.parentNode.appendChild(labelHtmlContainer);
    labelHtmlContainer.style.width = canvas.style.width;
    labelHtmlContainer.style.height = canvas.style.height;
    labelHtmlContainer.style.zIndex = "1";

    // Handle nodes
    cyto.on("add", "node", (e: cytoscape.EventObject) => createLabel(e.target));
    cyto.on("drag", "node", (e: cytoscape.EventObject) => createLabel(e.target));
    
    // Handle edges
    cyto.on("add", "edge", (e: cytoscape.EventObject) => createLabel(e.target));
    cyto.on("drag", "edge", (e: cytoscape.EventObject) => createLabel(e.target));
    
    // Handle pan and resize
    cyto.on("pan resize", handleMovement);
  }

  return this;
}
