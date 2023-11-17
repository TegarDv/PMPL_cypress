describe('template spec', () => {
  it('Search Products and Verify Cart After Login', () => {
    cy.visit('https://www.automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('#search_product').type('men');
    cy.get('#submit_search').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click({force:true});
    cy.get('u').click();
    cy.get(':nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').type('data_yangbenar@gmail.com');
    cy.get('[data-qa="login-password"]').type('data_yangbenar@gmail.com');
    cy.get('[data-qa="login-button"]').click();
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click();
  })
})