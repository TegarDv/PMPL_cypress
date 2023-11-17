describe('template spec', () => {
  it('Add review on product', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click();
    cy.get('#name').type('name');
    cy.get('#email').type('data_yangbenar@gmail.com');
    cy.get('#review').click();
    cy.get('#review').type('1234');
    cy.get('#button-review').click();
  })
})