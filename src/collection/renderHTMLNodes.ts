import cytoscape from "cytoscape";

interface Options {
  hideOriginal: Boolean;
}

export default function renderHTML(options: Options) {
  const cyto = this.cy();
  const cytoContainer = cyto.container();
  const nodeHtmlContainer = document.createElement("div");
  const internalId = "__cytoscape-html__";

  const createNode = (node: any) => {
    const id = node.id();
    const html = node.data()?.html;

    if (!html) return;

    const namespace = "__cytoscape-html";
    const internalNodeId = `${namespace}_node-${id}`;
    const position = node.renderedPosition();
    const posX = position.x.toFixed(2);
    const posY = position.y.toFixed(2);

    const newNode = document.createElement("div");
    const existingNode = nodeHtmlContainer.querySelector("#" + internalNodeId);
    const nodeTranslation = `translate(${posX}px, ${posY}px)`;
    const nodeScale = `scale(${cyto.zoom()})`;
    const transform = `translate(-50%, -50%) ${nodeTranslation} ${nodeScale}`;

    newNode.id = internalNodeId;
    newNode.style.position = "absolute";
    newNode.style.transform = transform;
    newNode.style.zIndex = "2";
    newNode.innerHTML = html;

    if (existingNode) nodeHtmlContainer.removeChild(existingNode);

    nodeHtmlContainer.appendChild(newNode);

    if (options.hideOriginal) {
      // Hide the original node completely
      node.style({
        "background-opacity": 0,
        "border-opacity": 0,
        "text-opacity": 0,
        "label-opacity": 0,
        "overlay-opacity": 0
      });
    }
  };

  function handleMovement() {
    cyto.nodes().forEach((node) => createNode(node));
  }

  if (!document.getElementById(internalId)) {
    const canvas = cytoContainer.querySelector("canvas");

    nodeHtmlContainer.id = internalId;
    canvas.parentNode.appendChild(nodeHtmlContainer);
    nodeHtmlContainer.style.width = canvas.style.width;
    nodeHtmlContainer.style.height = canvas.style.height;
    nodeHtmlContainer.style.zIndex = "1";

    cyto.on("add", "node", (e: cytoscape.EventObject) => createNode(e.target));
    cyto.on("drag", "node", (e: cytoscape.EventObject) => createNode(e.target));
    cyto.on("pan resize", handleMovement);
  }

  return cyto.nodes();
}
