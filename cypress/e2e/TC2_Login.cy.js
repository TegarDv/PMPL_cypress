describe('template spec', () => {
  it('Login', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').type('data_yangbenar@gmail.com');
    cy.get('[data-qa="login-password"]').type('data_yangbenar@gmail.com');
    cy.get('[data-qa="login-button"]').click();
  })
})