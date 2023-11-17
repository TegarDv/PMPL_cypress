describe('template spec', () => {
  it('Verify address details in checkout page', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="signup-name"]').type('oketest1');
    cy.get('[data-qa="signup-email"]').type('akunsekian@gmail.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('[data-qa="password"]').type('qwertyuiop');
    cy.get('[data-qa="days"]').select('2');
    cy.get(':nth-child(3) > .top').click();
    cy.get('#id_gender1').check();
    cy.get('[data-qa="months"]').select('8');
    cy.get('[data-qa="years"]').select('2000');
    cy.get(':nth-child(7) > label').click();
    cy.get('#newsletter').check();
    cy.get('.login-form > form').click();
    cy.get(':nth-child(8) > label').click();
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
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force:true});
    cy.get('u').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get(':nth-child(5) > a').click();
    cy.get('[data-qa="continue-button"]').click();
  })
})