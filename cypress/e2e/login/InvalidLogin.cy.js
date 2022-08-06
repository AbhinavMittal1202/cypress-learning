/// <reference types="Cypress" />
import {
    loginWithValidCredentials,
} from "../../support/pageObject/LoginPage";

let info;

describe("Invalid Login Suite", () => {
    before(() => {
        cy.fixture("loginConfig.json").then((data) => {
            info = data;
            cy.wrap(info).as("info");
        });
    });

    it("Verify it show validation error on clicking the submit button without entering any details ", () => {
        cy.navigatetoURL(Cypress.env("stagingUrl"));
        cy.verifyXpathContainSpecificText("span", "Ich bin ein Mensch").should("be.visible").then(() => {
            cy.verifyXpathContainSpecificText("button", "Anmelden").click({ force: true });
        });
        cy.xpath("//label[@for='loginForm-eMail']//p[@class='a-ErrorMessage']").should("have.text", "Please fill in this field.");
        cy.xpath("//label[@for='loginForm-password']//p[@class='a-ErrorMessage']").should("have.text", "Please fill in this field.");
    })

    it("Verify the error message on passing invalid email address while login ", () => {
        cy.navigatetoURL(Cypress.env("stagingUrl"));
        cy.navigatetoURL(Cypress.env("stagingUrl"));
        loginWithValidCredentials(
            Cypress.env("invalidLoginCreds").invalid_username,
            Cypress.env("invalidLoginCreds").valid_password,
        );
        cy.getXpathUsingSpecificTagAndClassName("div", "m-Notification__message").then((validationMessage) => {
            expect(validationMessage.text()).to.have.string("E-Mail-Adresse und/oder Passwort sind falsch. Bitte überprüfen Sie Ihre Eingaben.");
        })
    })

    it("Verify the error message on passing invalid password while login ", () => {
        cy.navigatetoURL(Cypress.env("stagingUrl"));
        cy.navigatetoURL(Cypress.env("stagingUrl"));
        loginWithValidCredentials(
            Cypress.env("invalidLoginCreds").valid_username,
            Cypress.env("invalidLoginCreds").invalid_password,
        );
        cy.getXpathUsingSpecificTagAndClassName("div", "m-Notification__message").then((validationMessage) => {
            expect(validationMessage.text()).to.have.string("E-Mail-Adresse und/oder Passwort sind falsch. Bitte überprüfen Sie Ihre Eingaben.");
        })
    })

    it("Verify the error message on passing invalid username and password while login ", () => {
        cy.navigatetoURL(Cypress.env("stagingUrl"));
        cy.navigatetoURL(Cypress.env("stagingUrl"));
        loginWithValidCredentials(
            Cypress.env("invalidLoginCreds").invalid_username,
            Cypress.env("invalidLoginCreds").invalid_password,
        );
        cy.getXpathUsingSpecificTagAndClassName("div", "m-Notification__message").then((validationMessage) => {
            expect(validationMessage.text()).to.have.string("E-Mail-Adresse und/oder Passwort sind falsch. Bitte überprüfen Sie Ihre Eingaben.");
        })
    })
})