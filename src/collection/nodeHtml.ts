export default function nodeHtml(options: any) {
  const cyto = this.cy();
  const cytoContainer = cyto.container();
  const nodeHtmlContainer = document.createElement("div");
  const internalId = "__cytoscape-html__";

  if (options.html && !document.getElementById(internalId)) {
    cyto.on("pan resize", () => {
      const canvas = cytoContainer.querySelector("canvas");

      nodeHtmlContainer.id = internalId;

      canvas.parentNode.appendChild(nodeHtmlContainer);

      nodeHtmlContainer.style.width = canvas.style.width;
      nodeHtmlContainer.style.height = canvas.style.height;

      cyto.nodes().forEach((node: any) => {
        const id = node.id();
        const internalNodeId = `__cytoscape-html_node-${id}`;

        const position = node.renderedPosition();
        const newNode = document.createElement("div");
        const existingNode = nodeHtmlContainer.querySelector('#' + internalNodeId);
        newNode.id = internalNodeId;
        newNode.style.position = "absolute";
        newNode.style.left = position.x + "px";
        newNode.style.top = position.y + "px";
        newNode.innerHTML = options.html;

        if (existingNode) nodeHtmlContainer.removeChild(existingNode);

        nodeHtmlContainer.appendChild(newNode);
      });
    });
  }
  return cyto.nodes();
}
