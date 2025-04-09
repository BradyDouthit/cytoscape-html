# cytoscape-html
`cytoscape-html` allows you to render arbitrary HTML as nodes on the graph

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

### 4.  Render the HTML:
  To create an HTML node, define a node in your elements array with the html field:  
  ```
   // tell cytoscape-html to render the nodes with a data.html attribute
   cytoscape.nodes().renderHTMLNodes();
  ```
  You may also hide the underlying node with `hideOriginal`:  
  ```
   cytoscape.nodes().renderHTMLNodes({ hideOriginal: true });
  ```

### Styling and Interaction:
You can style your HTML nodes using CSS classes, and you can attach event listeners using Cytoscape's event handling mechanisms.

### License
This project is licensed under the [MIT](https://github.com/BradyDouthit/cytoscape-html/blob/main/LICENSE) License.
