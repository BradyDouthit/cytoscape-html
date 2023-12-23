import renderHTMLNodes from "./collection/renderHTMLNodes";

// registers the extension on a cytoscape lib ref
export default function register(cytoscape) {
  // can't register if cytoscape unspecified
  if (!cytoscape) {
    return;
  }

  // register with cytoscape.js
  cytoscape("collection", "renderHTMLNodes", renderHTMLNodes);
}

if (typeof window.cytoscape !== "undefined") {
  register(window.cytoscape);
}
