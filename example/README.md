# Cytoscape HTML Example

This example demonstrates the usage of the `cytoscape-html` extension, which allows you to use HTML for nodes in Cytoscape.js. You can view the working example [here](https://bradydouthit.github.io/cytoscape-html/)

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