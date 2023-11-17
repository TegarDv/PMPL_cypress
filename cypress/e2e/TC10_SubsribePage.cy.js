describe('template spec', () => {
  it('Verify Subscription in home page', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('#susbscribe_email').type('data_yangbenar@gmail.com');
    cy.get('#subscribe').click();
  })
})