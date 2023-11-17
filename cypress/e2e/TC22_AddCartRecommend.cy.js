describe('template spec', () => {
  it('Add to cart from Recommended items', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn').click({force:true});
    cy.get('u').click();
  })
})