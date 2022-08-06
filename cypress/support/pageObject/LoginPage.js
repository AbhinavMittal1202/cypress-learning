/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />


export const getSubmitButton = () => cy.xpath("//button[@name='show-password'][@data-qa-id='login-form-show-password']");
export const verifyLoginPageUI = () => {
    cy.getXpathUsingSpecificTagAndClassName("h1", "p-LoginRegistration__title").should("be.visible");
    cy.getXpathUsingSpecificTagAndClassName("h1", "p-LoginRegistration__title").should("have.text", "Anmelden");
    //verifying the login card.
    cy.getXpathUsingSpecificTagAndClassName("h2", "p-LoginRegistration__subtitle").should("be.visible");
    cy.getXpathUsingSpecificTagAndClassName("h2", "p-LoginRegistration__subtitle").should("have.text", "Mit Kundenkonto einloggen");
    cy.getXpathUsingSpecificTagAndIdName("input", "loginForm-eMail").should("be.visible");
    cy.getXpathUsingSpecificTagAndIdName("input", "loginForm-password").should("be.visible");
    cy.getXpathUsingSpecificTagAndClassName("a", "LoginFormControls__forgotten-password").should("be.visible");
    cy.getXpathUsingSpecificTagAndClassName("a", "LoginFormControls__forgotten-password").should("have.text", "Passwort vergessen?");
    cy.verifyXpathContainSpecificText("button", "Anmelden").should("be.visible");

    //verifying the Registration card.
    cy.getXpathUsingSpecificTagAndClassName("h2", "o-RegistrationBox__title").should("be.visible");
    cy.getXpathUsingSpecificTagAndClassName("h2", "o-RegistrationBox__title").should("have.text", "Kundenkonto erstellen");
    cy.getLinkTextUsingSpecificText("Jetzt kostenlos registrieren");

    cy.getXpathUsingSpecificTagAndClassName("p", "login-disclaimer-text").should("be.visible");
    cy.getXpathUsingSpecificTagAndClassName("p", "login-disclaimer-text").should("have.text", "Auf Grund Ihrer Bestellung erhalten Sie Produktempfehlungen per E-Mail. Sie können dem jederzeit widersprechen, wobei Ihnen keine anderen Übermittlungskosten als nach den Basistarifen entstehen, oder sich über den Link in der Produktempfehlungsmail abmelden.");
};

export const loginWithValidCredentials = (
    username,
    password,
) => {
    cy.getXpathUsingSpecificTagAndIdName("input", "loginForm-eMail").clear().type(username);
    cy.getXpathUsingSpecificTagAndIdName("input", "loginForm-password").clear().type(password);
    cy.verifyXpathContainSpecificText("span", "Ich bin ein Mensch").should("be.visible").then(() => {
        cy.verifyXpathContainSpecificText("button", "Anmelden").click({ force: true });
    });

};

export const verifyLandingPageOfLoginUser = (username) => {
    let fullName = username.split("@")[0];
    let firstName = fullName.split(".")[0];
    let lastName = fullName.split(".")[1];
    cy.xpath("//h3[contains(@class,'u-margin-xx-small--bottom')]").then((data) => {
        expect(data.text()).to.have.string(`Hallo, ${firstName} ${lastName}`);
    })
    cy.get('.o-HeaderLarge__user-logged-in > .o-HeaderLarge--button').trigger('mouseover');
}