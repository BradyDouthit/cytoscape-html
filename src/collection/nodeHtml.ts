
function nodeHtml(options: any) {
  const cy = this.cy();
  console.log(cy.nodes())
  return cy.nodes();
}

export default nodeHtml;