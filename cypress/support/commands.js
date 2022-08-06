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


/**
 *  Common function used to navigate to given Url.
 *  @param {String} url used to pass specific url to visit it.
 */

Cypress.Commands.add('navigatetoURL', (url) => {
    cy.visit(url);
});

/**
 *  Common function to get the xpath of any element by passing specific text using ID.
 *  @param {String} tagName to get the xpath of the specific tagname.
 *  @param {String} IdName to get the xpath of the specific Id.
 */
Cypress.Commands.add(
    "getXpathUsingSpecificTagAndIdName",
    (tagName, anchorLinkTextName) => {
        cy.xpath(`//${tagName}[@id='${anchorLinkTextName}']`, {
            timeout: 160000,
        });
    }
);

/**
 * funtion to verify the particular text are present or not.
 * @param {String} tagName to check the specific tag
 * @param {String} containText to verify the specific text contains or not
 * @returns xpath of the following contain String.
 */
Cypress.Commands.add('verifyXpathContainSpecificText', (tagName, containText) => {
    cy.xpath(`//${tagName}[contains(text(),'${containText}')]`, {
        timeout: 1600000,
    })
});

/**
 *  Common function to get the xpath of any element by passing specific text using class.
 *  @param {String} tagName to get the xpath of the specific tagname.
 *  @param {String} className to get the xpath of the specific classname.
 */
Cypress.Commands.add(
    "getXpathUsingSpecificTagAndClassName",
    (tagName, anchorLinkTextName) => {
        cy.xpath(`//${tagName}[contains(@class,'${anchorLinkTextName}')]`, {
            timeout: 160000,
        });
    }
);

/**
 *  Common function to get the xpath of the anchor link text by passing specific text.
 *  @param {String} anchorLinkName to verify the anchor link contains that text .
 */
Cypress.Commands.add("getLinkTextUsingSpecificText", (anchorLinkTextName) => {
    cy.xpath(`//a[contains(text(),'${anchorLinkTextName}')]/@href`);
});

// Command to wait until you get a response from the desired api.
Cypress.Commands.add("waitForApiResponse", (method, url) => {
    cy.log(method, url);
    cy.intercept({
      method,
      url,
    }).as("apiCall");
    cy.wait("@apiCall", { timeout: 10000 });
  });