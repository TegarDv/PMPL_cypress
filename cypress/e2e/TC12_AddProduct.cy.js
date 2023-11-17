describe('template spec', () => {
  it('Add Products in Cart', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force:true});
    cy.get('.modal-footer > .btn').click();
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force:true});
    cy.get('.modal-footer > .btn').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
  })
})