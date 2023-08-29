cytoscape-html
================================================================================


## Description

Allows for rendering of arbitrary HTML nodes, edges, and labels for Cytoscape.js


## Dependencies

 * Cytoscape.js >=x.y.z
 * <List your dependencies here please>


## API

Please briefly describe your API here:

```js
cy.html({
  foo: 'bar', // some option that does this
  baz: 'bat' // some options that does that
  // ... and so on
});
```


## Publishing instructions

This project is set up to automatically be published to npm and bower.  To publish:

1. Set the version number environment variable: `export VERSION=1.2.3`
1. Publish: `gulp`
1. If publishing to bower for the first time, you'll need to run `bower register cytoscape-html https://github.com/.git`