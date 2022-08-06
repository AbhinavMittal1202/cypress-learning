/// <reference types="Cypress" />
import {
    getSubmitButton,
    loginWithValidCredentials,
    verifyLandingPageOfLoginUser,
    verifyLoginPageUI,
} from "../../support/pageObject/LoginPage";

let info;

describe("Valid Login Suite", () => {
    before(() => {
        cy.fixture("loginConfig.json").then((data) => {
            info = data;
            cy.wrap(info).as("info");
        });
    });

    it("Verify the UI of the login cards", () => {
        cy.navigatetoURL(Cypress.env("stagingUrl"));
        verifyLoginPageUI();
    });

    it("Verify clicking the eye icon, the entered data should be displayed in the password field", () => {
        cy.navigatetoURL(Cypress.env("stagingUrl"));
        cy.getXpathUsingSpecificTagAndIdName("input", "loginForm-password").clear().type("TestPasswordCheck");
        cy.get('[type="password"]').then((inputfield) => {
            expect(inputfield[0].type).contain("password");
            getSubmitButton().click().then(() => {
                expect(inputfield[0].type).contain("text");
            })
            getSubmitButton().click().then(() => {
                expect(inputfield[0].type).contain("password");
            })
        })
    });

    it("Verify the Login functionality using valid login credentials", () => {
        cy.navigatetoURL(Cypress.env("stagingUrl"));
        loginWithValidCredentials (
            Cypress.env("validLoginCreds").username,
            Cypress.env("validLoginCreds").password,
        );
        verifyLandingPageOfLoginUser(Cypress.env("validLoginCreds").username);
    });
});
