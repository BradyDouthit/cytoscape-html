export default function nodeHtml(options: any) {
  const cyto = this.cy();
  const cytoContainer = cyto.container();
  const nodeHtmlContainer = document.createElement("div");
  const internalId = "__cytoscape-html__";

  const createNode = (node: any) => {
    console.log("createNode", node);
    const id = node.id();
    const internalNodeId = `__cytoscape-html_node-${id}`;

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
    newNode.innerHTML = options.html;

    if (existingNode) nodeHtmlContainer.removeChild(existingNode);

    nodeHtmlContainer.appendChild(newNode);

    // Hide the original node
    node.style({ "background-opacity": 0 });
  };

  function createAllNodes() {
    console.log("createAllNodes");
    const canvas = cytoContainer.querySelector("canvas");

    nodeHtmlContainer.id = internalId;

    canvas.parentNode.appendChild(nodeHtmlContainer);

    nodeHtmlContainer.style.width = canvas.style.width;
    nodeHtmlContainer.style.height = canvas.style.height;
    nodeHtmlContainer.style.zIndex = "1";

    cyto.nodes().forEach(createNode);
  }

  if (options.html && !document.getElementById(internalId)) {
    cyto.on("drag", "node", (e: any) => createNode(e.target));
    cyto.on("pan resize", createAllNodes);
  }
  return cyto.nodes();
}
