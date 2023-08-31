import renderHTMLNodesOverlay from "./collection/renderHTMLNodesOverlay";
import renderHTMLLabelsOverlay from "./collection/renderHTMLLabelsOverlay";
import renderNodesHTML from './core/renderNodesHTML';

// registers the extension on a cytoscape lib ref
export default function register(cytoscape) {
  // can't register if cytoscape unspecified
  if (!cytoscape) {
    return;
  }

  // register with cytoscape.js
  cytoscape("collection", "__renderHTMLNodesOverlayOverlay", renderHTMLNodesOverlay);
  cytoscape("collection", "__renderHTMLLabelsOverlayOverlay", renderHTMLLabelsOverlay);
  cytoscape("core", "renderNodesHTML", renderNodesHTML)
}

if (typeof window.cytoscape !== "undefined") {
  register(window.cytoscape);
}
