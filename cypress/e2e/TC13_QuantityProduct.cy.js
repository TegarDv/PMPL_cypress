describe('template spec', () => {
  it('Verify Product quantity in Cart', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('#quantity').type('4');
    cy.get(':nth-child(5) > .btn').click();
    cy.get('u').click();
  })
})