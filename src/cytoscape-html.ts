import nodeHtml from "./collection/nodeHtml";


// registers the extension on a cytoscape lib ref
export default function register(cytoscape) {
  if (!cytoscape) {
    return;
  } // can't register if cytoscape unspecified

  cytoscape("collection", "nodeHtml", nodeHtml); // register with cytoscape.js
}

if (typeof window.cytoscape !== "undefined") {
  register(window.cytoscape);
}