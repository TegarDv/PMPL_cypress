describe('template spec', () => {
  it('Contact Us Form', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(8) > a').click();
    cy.get('[data-qa="name"]').clear('n');
    cy.get('[data-qa="name"]').type('name');
    cy.get('[data-qa="email"]').clear('e');
    cy.get('[data-qa="email"]').type('email@gmail.com');
    cy.get('[data-qa="subject"]').clear('S');
    cy.get('[data-qa="subject"]').type('So Good');
    cy.get('[data-qa="message"]').click();
    cy.get(':nth-child(6) > .form-control').click();
    cy.get('[data-qa="submit-button"]').click();
    cy.get('#form-section > .btn').click();
  })
})