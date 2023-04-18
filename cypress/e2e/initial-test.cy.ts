describe('Index page', () => {
  beforeEach(() => {
    cy.task('seedDatabase');
    cy.visit('/');
  })

  it('Check if page title is set', () => {
    cy.title().should('eq', 'Create Next App');
  })

  it('Counter initial conditions', () => {
    cy.getVisibleDataCy('counterValue').as('counter');
    cy.get('@counter').contains('0');

  })

  it('Counter can be incremented', () => {
    cy.getVisibleDataCy('counterButton').as('button');
    cy.getVisibleDataCy('counterValue').as('counter');

    cy.get('@button').click();
    cy.get('@counter').should('contain.text', '1')

    cy.get('@button').click();
    cy.get('@counter').should('contain.text', '2');

    /* ==== Generated with Cypress Studio ==== */
    cy.get('[data-cy="counterButton"]').click();
    cy.get('[data-cy="counterValue"]').should('have.text', '3');
    /* ==== End Cypress Studio ==== */
  })
})