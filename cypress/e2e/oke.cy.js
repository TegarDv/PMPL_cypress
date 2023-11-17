describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://google.com')

    cy.get('#APjFqb').type('Facebook');
  })
})