describe('Index page', () => {
  beforeEach(() => {
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

  })
})