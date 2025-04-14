import renderHTMLNodes from "./collection/renderHTMLNodes";
import renderHTMLLabels from "./collection/renderHTMLLabels";

// registers the extension on a cytoscape lib ref
export default function register(cytoscape) {
  // can't register if cytoscape unspecified
  if (!cytoscape) {
    return;
  }

  // register with cytoscape.js
  cytoscape("collection", "renderHTMLNodes", renderHTMLNodes);
  cytoscape("collection", "renderHTMLLabels", renderHTMLLabels);
}

if (typeof window.cytoscape !== "undefined") {
  register(window.cytoscape);
}
