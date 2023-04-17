/// <reference types="cypress" />
// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


Cypress.Commands.add('getVisibleDataCy', (value: string) => cy.get(`[data-cy=${value}]`).should('be.visible'));

Cypress.Commands.add('userCanLogin', (email: string, password: string) => {
    cy.get('h5').contains('Вход').click();
    cy.get('[name=email]').type(email);
    cy.get('[name=password]').type(password);
    cy.get('button').contains('Вход').click();
    cy.get('h5').contains('Профил');
})