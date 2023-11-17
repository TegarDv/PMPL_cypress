describe('template spec', () => {
  it('Remove Products From Cart', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force:true});
    cy.get('u').click();
    cy.get('.cart_quantity_delete > .fa').click();
  })
})