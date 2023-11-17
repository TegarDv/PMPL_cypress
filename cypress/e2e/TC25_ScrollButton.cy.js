describe('template spec', () => {
  it(`Verify Scroll Up using 'Arrow' button and Scroll Down functionality`, () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.single-widget > h2').click();
    cy.get('#scrollUp > .fa').click();
  })
})