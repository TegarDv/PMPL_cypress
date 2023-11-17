describe('template spec', () => {
  it('Search Product', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('#search_product').type('men');
    cy.get('#submit_search').click();
  })
})