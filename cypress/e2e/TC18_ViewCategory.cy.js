describe('template spec', () => {
  it('View Category Products', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click();
    cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click();
  })
})