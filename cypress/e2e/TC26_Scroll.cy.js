describe('template spec', () => {
  it(`Verify Scroll Up without 'Arrow' button and Scroll Down functionality`, () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.single-widget > h2').click();
    cy.get('.left-sidebar > :nth-child(1)').click();
  })
})