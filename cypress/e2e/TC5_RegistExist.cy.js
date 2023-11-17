describe('template spec', () => {
  it('Register User with existing email', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').clear('oketest1');
    cy.get('[data-qa="signup-name"]').type('oketest1');
    cy.get('[data-qa="signup-email"]').clear('data_yangbenar@gmail.com');
    cy.get('[data-qa="signup-email"]').type('data_yangbenar@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
  })
})