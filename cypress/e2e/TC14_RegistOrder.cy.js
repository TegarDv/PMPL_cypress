describe('template spec', () => {
  it('Place Order: Register while Checkout', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force:true});
    cy.get('u').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.modal-body > :nth-child(2) > a > u').click();
    cy.get('[data-qa="signup-name"]').type('name');
    cy.get('[data-qa="signup-email"]').type('akunsekian@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="password"]').type('12345');
    cy.get('[data-qa="days"]').select('8');
    cy.get('[data-qa="months"]').select('3');
    cy.get('[data-qa="years"]').select('2000');
    cy.get('#newsletter').check();
    cy.get('#optin').check();
    cy.get('[data-qa="first_name"]').type('Oke');
    cy.get('[data-qa="last_name"]').type('Test');
    cy.get('[data-qa="company"]').type('Testcase');
    cy.get('[data-qa="address"]').type('sebelah sana');
    cy.get('[data-qa="address2"]').type('sebelah sungai');
    cy.get('[data-qa="country"]').select('Singapore');
    cy.get('[data-qa="state"]').type('10');
    cy.get('[data-qa="city"]').type('10');
    cy.get('[data-qa="zipcode"]').type('0086');
    cy.get('[data-qa="mobile_number"]').type('08989898989');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="continue-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('.form-control').click();
    cy.get(':nth-child(7) > .btn').click();
    cy.get('[data-qa="name-on-card"]').type('oke');
    cy.get('[data-qa="card-number"]').type('987890986543');
    cy.get('[data-qa="cvc"]').type('311');
    cy.get('[data-qa="expiry-month"]').type('10');
    cy.get('[data-qa="expiry-year"]').type('2000');
    cy.get('[data-qa="pay-button"]').click();
    cy.get(':nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
  })
})