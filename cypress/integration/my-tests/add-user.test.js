/// <reference types="cypress" />

describe('Basic test', () => {
    // it('the webpage loads, at least ', () => {
        // cy.visit('https://codedamn.com')
        // cy.contains('New way to learn programming.')
        // cy.viewport(1280, 720)
        // cy.contains('Sign In').click()
    // })

    // it.only('Login page looks good', () => {
    //     cy.viewport(1280, 720)
    //     cy.visit('https://codedamn.com')

    //     cy.contains('Sign In').click()
        // cy.contains('Sign in to your account').should('exist')
        // cy.contains('Go with Google').should('exist')
        // cy.contains('Go with Facebook').should('exist')
        // cy.contains('Forgot your password?').should('exist')
    // })

    // it.only('The login page links work', () => {
    //     cy.viewport(1280, 720)
    //     cy.visit('https://codedamn.com')
    //     cy.contains('Sign In').click()
        // cy.contains('Forgot your password?').click()
        // cy.url().should('include', '/password-reset')
    // })

    // it('Every basic element exists', () => {
    //     cy.viewport('iphone-x')
    //     cy.visit('https://codedamn.com')
    // })

    it('Test Add user model', () => {
        cy.visit('http://localhost:8080/')
        cy.get('.todo-app-sec > .q-btn--standard').click()
        cy.contains('label', 'First Name').type("jasmin")
        cy.contains('label', 'Last Name').type("JB")
        cy.contains('label', 'Enter Email').type("jb@gmail.com")
        cy.get('#phone_number').type('123456789')
        cy.wait(1000)
        cy.get("#city").type('Junagadh')
        cy.get('.q-mt-lg > .q-btn--standard').click()
        cy.get('.q-mt-lg > :nth-child(3)').click()
    })
})
