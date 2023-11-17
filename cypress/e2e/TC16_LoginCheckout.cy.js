describe('template spec', () => {
  it('Place Order: Login before Checkout', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').type('data_yangbenar@gmail.com');
    cy.get('[data-qa="login-password"]').type('data_yangbenar@gmail.com');
    cy.get('[data-qa="login-button"]').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force:true});
    cy.get('u').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.form-control').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').type('oke');
    cy.get('[data-qa="card-number"]').type('123456789');
    cy.get('[data-qa="cvc"]').type('311');
    cy.get('[data-qa="expiry-month"]').type('10');
    cy.get('[data-qa="expiry-year"]').type('2000');
    cy.get('[data-qa="pay-button"]').click();
    cy.get('[data-qa="continue-button"]').click();
  })
})