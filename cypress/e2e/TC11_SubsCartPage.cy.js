describe('template spec', () => {
  it('Verify Subscription in Cart page', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get(':nth-child(3) > a > .fa').click();
    cy.get('#susbscribe_email').type('data_yangbenar@gmail.com');
    cy.get('#subscribe').click();
  })
})