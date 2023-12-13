describe('template spec', () => {

  beforeEach(()=>{
    cy.visit('/')
  })

  it('should navigate correctly', () => {
    cy.contains('Villains').click();
    cy.url().should('include', '/villains');
    cy.contains('Home').click();
    cy.url().should('include', '/welcome');
    cy.contains('Heroes').click();
    cy.url().should('include', '/login');
    cy.get('button.btn-info').click();
    cy.url().should('include', '/heroes');
  });


  // it('open welcome', () => {
  //  // cy.get('body').contains('welcome works!');
  //   cy.contains('Show Heroes').click();
  //   cy.url().should('include', '/heroes');
  //   cy.get('p.myClass').contains('hero-page works!')
  // })

})
