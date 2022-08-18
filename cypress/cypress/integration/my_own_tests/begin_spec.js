/// <reference types="cypress" />

describe('Just a beginning', () => {

    beforeEach(() => {
        cy.viewport(1280,720)
        cy.visit('http://app.restrox.co')
    })

    it('Create your account', () => {

        //1. sign in page
        cy.contains('Create an account').should('exist')
        cy.contains('Forgot Password?').should('exist')
        cy.contains('Demo User').should('exist')

        // 2. Verify your URL page
        cy.url().should('include', '/login') 

        // To the print the value of the variable, the below code is best
        cy.url().then((value) => {
            cy.log('The current real URL is: ',value)
        })

    })

    it('Typing in Restrox login page', () => {
        cy.contains('Please include an').should('not.exist')

        // Input user_data just for checking
        cy.get('input[name=loginEmail]').type('username')
        cy.get('input[name=password]').type('username')
        cy.get('[type="checkbox"]').check()
        cy.contains('Sign in').click()

    })

    it('Login should work fine ', () => {
    
        cy.contains('Please include an').should('not.exist')
        
        // Login with valid email
        cy.get('input[name=loginEmail]').type('surajnepali7896@gmail.com')
        cy.get('input[name=password]').type('12345678')
        cy.get('[type="checkbox"]').check()
        cy.contains('Sign in').click()

        cy.url().should('include', '/Restrox') 

        cy.contains('Suraj Nepali').click()

        // To logout 
        cy.contains('Log Out').click()
        cy.url().should('include', '/login')
        cy.contains('Success!').should('exist') 
    })

    it('Reset Password ', () => {
    
        // Forget Password?
        cy.contains('Forgot Password?').click()

        cy.url().should('include', '/forgot-password')

        cy.get('input[type=email]').type('surajnepali7896@gmail.com')
        
        cy.contains('Next').click()
        cy.contains('Back to login').click()
        cy.url().should('include', '/login') 

    })

    it('Create an account ', () => {
    
        // To create new account
        cy.contains('Create an account').click()

        cy.url().should('include', '/register')

        cy.get('input[name=username]').type('Dummy Account')

        cy.get('input[name=email]').type('dummy_account6@gmail.com')
        cy.get('input[name=password]').type('12345678')
        cy.get('input[name=confirmPassword]').type('12345678')
        cy.get('[type="checkbox"]').check()

    })
        
})