// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('exitScreens', () => {
  cy.location('pathname').should('eq', '/closed');
  cy.get('smart-camera-web').should('not.exist');
});

Cypress.Commands.add('navigateFaceCaptureScreens', () => {
  cy.get('smart-camera-web').shadow().find('#request-camera-access').click();

  cy.get('smart-camera-web').shadow().find('#start-image-capture').click();

  cy.wait(8000);

  cy.get('smart-camera-web').shadow().find('#select-selfie').click();

  cy.get('smart-camera-web')
    .shadow()
    .find('#review-screen')
    .should('not.be.visible');
});
