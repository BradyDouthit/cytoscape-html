// Initialize Cytoscape
const cy = cytoscape({
  container: document.getElementById("cy"),
  elements: {
    nodes: [
      {
        data: {
          id: "red",
          label: "Red Node",
          html: `
                        <div class="node-html" style="background-color: #ffebee; border: 2px solid #f44336;">
                            <h3>Red Node</h3>
                        </div>
                    `,
          labelHtml: `
                        <div class="label-html" style="background-color: #f44336; color: white; padding: 5px 10px; border-radius: 4px; font-weight: bold;">
                            Red Node Label
                        </div>
                    `
        },
      },
      {
        data: {
          id: "green",
          label: "Green Node",
          html: `
                        <div class="node-html" style="background-color: #e8f5e9; border: 2px solid #4CAF50;">
                            <h3>Green Node</h3>
                        </div>
                    `,
          labelHtml: `
                        <div class="label-html" style="background-color: #4CAF50; color: white; padding: 5px 10px; border-radius: 4px; font-weight: bold;">
                            Green Node Label
                        </div>
                    `
        },
      },
      {
        data: {
          id: "blue",
          label: "Blue Node",
          html: `
                        <div class="node-html" style="background-color: #e3f2fd; border: 2px solid #2196F3;">
                            <h3>Blue Node</h3>
                        </div>
                    `,
          labelHtml: `
                        <div class="label-html" style="background-color: #2196F3; color: white; padding: 5px 10px; border-radius: 4px; font-weight: bold;">
                            Blue Node Label
                        </div>
                    `
        },
      },
    ],
    edges: [
      { 
        data: { 
          source: "red", 
          target: "green",
          labelHtml: `
                        <div class="label-html" style="background-color: #9C27B0; color: white; padding: 3px 8px; border-radius: 3px; font-size: 12px;">
                            Red → Green
                        </div>
                    `
        } 
      },
      { 
        data: { 
          source: "green", 
          target: "blue",
          labelHtml: `
                        <div class="label-html" style="background-color: #9C27B0; color: white; padding: 3px 8px; border-radius: 3px; font-size: 12px;">
                            Green → Blue
                        </div>
                    `
        } 
      },
      { 
        data: { 
          source: "blue", 
          target: "red",
          labelHtml: `
                        <div class="label-html" style="background-color: #9C27B0; color: white; padding: 3px 8px; border-radius: 3px; font-size: 12px;">
                            Blue → Red
                        </div>
                    `
        } 
      },
    ],
  },
  style: [
    {
      selector: "node",
      style: {
        "label": "data(label)",
        "text-valign": "bottom",
        "text-halign": "center",
        "background-color": "#666",
        "color": "#fff",
        "text-outline-color": "#666",
        "text-outline-width": 2,
        "font-size": "14px",
        "text-margin-y": 10
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

// Apply the HTML rendering for nodes
cy.nodes().renderHTMLNodes({ hideOriginal: true });

// Apply the HTML rendering for labels
cy.elements().renderHTMLLabels({ hideOriginal: true });

// Reset button
document.getElementById("reset").addEventListener("click", () => {
  // Reset the layout
  cy.layout({ name: "circle", padding: 50 }).run();
});
