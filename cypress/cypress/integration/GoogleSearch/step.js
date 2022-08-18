import { Given, When, Then } from 'cypress-cucumber-preprocessor';

Given('Given I go to {string}', url => {
    cy.visit(url);
});

When('I search for {string}',(text) => {
    //cy.visit();
});

Then('I see {string}', (text) => {
    // cy.visit();
});
