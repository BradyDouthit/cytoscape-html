import cytoscape from "cytoscape";

interface CytoHTMLProps {
  nodes: cytoscape.Collection;
}

// TODO: Take in Node HTML, convert to background image, and apply to node style
export default function init(options: CytoHTMLProps) {
  const cyto = this;

  cyto.style().selector("node").style("background-image", renderHTML);

  return this;
}

function renderHTML(node: cytoscape.NodeSingular) {
  const data = node.data();
  const html = data?.html;
  const nodeSize = data?.size || 18;

  if (!html) {
    console.warn(
      `cytoscape-html: node with id '${node.id()}' does not have a property 'html'`
    );
    return;
  }

  const renderable = createSVGFromHtmL(html, nodeSize);
  console.log(renderable);
  return renderable;
}

function createSVGFromHtmL(html: string, size: Number) {
  const svg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
      <div
        style="width:100%;height:100%"
        xmlns="http://www.w3.org/1999/xhtml"
      >
        ${html}
      </div>
    </foreignObject>
  </svg>`;

  return `url("data:image/svg+xml;utf8,${encodeURI(svg)})`;
}

//   const convertComponentToBackgroundImage = (component, size = 18) => {
//     return generateBackgroundImageFromComponent(
// ,
//     );
//   };
