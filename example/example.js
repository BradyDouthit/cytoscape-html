// Initialize Cytoscape
const cy = cytoscape({
  container: document.getElementById("cy"),
  elements: {
    nodes: [
      {
        data: {
          id: "red",
          html: `
                        <div class="node-html" style="background-color: #ffebee; border: 2px solid #f44336; opacity: 0.7;">
                            <h3>Red Node</h3>
                            <p>This is a red HTML node</p>
                        </div>
                    `,
        },
      },
      {
        data: {
          id: "green",
          html: `
                        <div class="node-html" style="background-color: #e8f5e9; border: 2px solid #4CAF50; opacity: 0.7;">
                            <h3>Green Node</h3>
                            <p>This is a green HTML node</p>
                        </div>
                    `,
        },
      },
      {
        data: {
          id: "blue",
          html: `
                        <div class="node-html" style="background-color: #e3f2fd; border: 2px solid #2196F3; opacity: 0.7;">
                            <h3>Blue Node</h3>
                            <p>This is a blue HTML node</p>
                        </div>
                    `,
        },
      },
    ],
    edges: [
      { data: { source: "red", target: "green" } },
      { data: { source: "green", target: "blue" } },
      { data: { source: "blue", target: "red" } },
    ],
  },
  style: [
    {
      selector: "node",
      style: {
        label: "data(id)",
        "text-valign": "bottom",
        "text-halign": "center",
        "background-color": "#666",
        color: "#fff",
        "text-outline-color": "#666",
        "text-outline-width": 2,
      },
    },
    {
      selector: "edge",
      style: {
        width: 2,
        "line-color": "#ccc",
        "target-arrow-color": "#ccc",
        "target-arrow-shape": "triangle",
        "curve-style": "bezier",
      },
    },
  ],
  layout: {
    name: "circle",
    padding: 50,
  },
});

// Apply the HTML rendering
cy.nodes().renderHTMLNodes({ hideOriginal: true });

// Reset button
document.getElementById("reset").addEventListener("click", () => {
  // Reset the layout
  cy.layout({ name: "circle", padding: 50 }).run();
});
