// load the global Cypress types
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to select DOM element with explicit assertion to be visible.
         * And data-cs attribute selector
         * @example cy.getVisibleDataCi('counterButton')
         */
        getVisibleDataCy(value: string): Chainable<Subject>

        /**
         * Custom command to assert dynamic user login
         * @example cy.userCanLogin('user@email.com', 'userPass')
         */
        userCanLogin(email: string, password: string): void

    }
}