# Cytoscape HTML Example

This example demonstrates the usage of the `cytoscape-html` extension, which allows you to use HTML for nodes in Cytoscape.js.

## How to Run

1. First in the root directory, build the extension:
   ```
   npm run build
   ```

2. Open the `index.html` file in your browser. You can use a local server or simply open the file directly.

## How It Works

The example creates a Cytoscape instance with three nodes that use custom HTML content with different colors. The `renderHTMLNodes` function from the extension is called to render the HTML content for each node.

The example includes a reset button that reapplies the circle layout to the graph.

## Extension Usage

To use the `cytoscape-html` extension in your own project:

1. Include Cytoscape.js and the extension in your HTML:
   ```html
   <script src="path/to/cytoscape-html.js"></script>
   ```

2. Add HTML content to your nodes:
   ```javascript
   cy.add({
       group: 'nodes',
       data: {
           id: 'node1',
           html: '<div>Custom HTML content</div>'
       }
   });
   ```

3. Apply the HTML rendering:
   ```javascript
   cy.nodes().renderHTMLNodes({ hideOriginal: true });
   ```

The `hideOriginal` option determines whether to hide the original Cytoscape nodes after rendering the HTML content. 