# cytoscape-html
`cytoscape-html` allows you to render arbitrary HTML as nodes and labels on the graph

## Installation  
`npm install cytoscape-html`

## Getting Started
### 1. Import the Extension:
   First, import the extension and Cytoscape.js library into your project:
   ```
    import cytoscape from 'cytoscape';
    import cytoscapeHTML from 'cytoscape-html';
   ```

### 2.  Initialize Cytoscape with HTML Nodes:
   Create a Cytoscape instance and enable the HTML nodes extension:
   ```
    cytoscape.use(cytoscapeHTML);
   
    const cy = cytoscape({
      container: document.getElementById('cy-container'),
      elements: [...], // Define your network elements here
      // Other Cytoscape options...
    });
   ```


### 3.  Add HTML Nodes:
  Create nodes with an `html` field  
  ```
   const elements = [
     // ...other elements
     {
       data: {
         id: 'html-node-1',
         html: '<div class="node-content">This is an HTML node!</div>',
       },
     },
   ];
   
   cy.add(elements);
  ```

### 4.  Add HTML Labels:
  Create elements with a `labelHtml` field  
  ```
   const elements = [
     // ...other elements
     {
       data: {
         id: 'html-node-1',
         labelHtml: '<div class="label-content">This is an HTML label!</div>',
       },
     },
   ];
   
   cy.add(elements);
  ```

### 5.  Render the HTML:
  To render HTML nodes:  
  ```
   // tell cytoscape-html to render the nodes with a data.html attribute
   cytoscape.nodes().renderHTMLNodes();
  ```
  You may also hide the underlying node with `hideOriginal`:  
  ```
   cytoscape.nodes().renderHTMLNodes({ hideOriginal: true });
  ```
  
  To render HTML labels:  
  ```
   // tell cytoscape-html to render the elements with a data.labelHtml attribute
   cytoscape.elements().renderHTMLLabels();
  ```
  You may also hide the underlying label with `hideOriginal`:  
  ```
   cytoscape.elements().renderHTMLLabels({ hideOriginal: true });
  ```

### Styling and Interaction:
You can style your HTML nodes and labels using CSS classes, and you can attach event listeners using Cytoscape's event handling mechanisms.

## Example
An example is included in the `/example` directory. This example demonstrates:
- Creating three colored nodes (red, green, and blue) with custom HTML content
- Adding custom HTML labels to both nodes and edges
- Using the `renderHTMLNodes` and `renderHTMLLabels` functions to render the HTML content

To run the example:
1. Build the extension: `npm run build`
2. Open the `example/index.html` file in your browser

### License
This project is licensed under the [MIT](https://github.com/BradyDouthit/cytoscape-html/blob/main/LICENSE) License.
