describe('template spec', () => {
  it('Login User with incorrect email and password', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').type('data_yangsalah@gmail.com');
    cy.get('[data-qa="login-password"]').type('data_yangsalah@gmail.com');
    cy.get('[data-qa="login-button"]').click();
  })
})