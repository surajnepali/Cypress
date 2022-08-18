/// <reference types="cypress" />

describe('Bimal Kshetri ko profile', () => {
    it('To search him', () => {
        force: true
        cy.viewport(1280,720)
        cy.visit('https://google.com')

        cy.get('input[name=q]').type('Bimal Kshetri')
        // cy.get('button[type=submit]').click()
        cy.contains('Google खोजी').click()
    })
})