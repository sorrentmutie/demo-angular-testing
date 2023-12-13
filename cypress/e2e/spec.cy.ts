describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io/')
    expect(true).to.equal(true);
  })

  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io/');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');

    cy.get('.action-email').type('fake@gmail.com')

    cy.get('.action-email').should('have.value', 'fake@gmail.com');

    /* ==== Generated with Cypress Studio ==== */
    cy.get('#password1').clear();
    cy.get('#password1').type('MiaPassword');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#fullName1').clear();
    cy.get('#fullName1').type('mario rossi');
    /* ==== End Cypress Studio ==== */
  });


})
