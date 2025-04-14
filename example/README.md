# Cytoscape HTML Example

This is a vanilla JavaScript example demonstrating the usage of the `cytoscape-html` extension, which allows you to use HTML for nodes and labels in Cytoscape.js.

## Features

- Three fixed nodes (red, green, and blue) created with HTML strings
- Each node has a custom style with matching colors and text content
- Custom HTML labels for both nodes and edges
- Simple reset functionality to reapply the layout

## How to Run

1. First, build the extension:
   ```
   npm run build
   ```

2. Open the `index.html` file in your browser. You can use a local server or simply open the file directly.

## How It Works

The example creates a Cytoscape instance with three nodes that use custom HTML content with different colors. Each node has a heading and paragraph text, along with a custom HTML label. The edges also have custom HTML labels. The `renderHTMLNodes` function is called to render the HTML content for each node, and the `renderHTMLLabels` function is called to render the HTML labels for both nodes and edges.

The example includes a reset button that reapplies the circle layout to the graph.

## Extension Usage

To use the `cytoscape-html` extension in your own project:

1. Include Cytoscape.js and the extension in your HTML:
   ```html
   <script src="https://cdnjs.cloudflare.com/ajax/libs/cytoscape/3.26.0/cytoscape.min.js"></script>
   <script src="path/to/cytoscape-html.js"></script>
   ```

2. Add HTML content to your nodes:
   ```javascript
   cy.add({
       group: 'nodes',
       data: {
           id: 'node1',
           html: '<div class="node-content"><h3>Node Title</h3><p>Node description</p></div>'
       }
   });
   ```

3. Add HTML content to your labels:
   ```javascript
   cy.add({
       group: 'nodes',
       data: {
           id: 'node1',
           labelHtml: '<div class="label-content">Custom Label</div>'
       }
   });
   ```

4. Apply the HTML rendering:
   ```javascript
   // For nodes
   cy.nodes().renderHTMLNodes({ hideOriginal: true });
   
   // For labels (works on both nodes and edges)
   cy.elements().renderHTMLLabels({ hideOriginal: true });
   ```

The `hideOriginal` option determines whether to hide the original Cytoscape elements after rendering the HTML content. 