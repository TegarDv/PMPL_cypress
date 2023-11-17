describe('template spec', () => {
  it('Verify Test Cases Page', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
  })
})