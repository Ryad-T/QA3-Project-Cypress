/// <reference types= "cypress" />


describe('Authentification', () => { 

  
beforeEach (() => {
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
} )


  it('connection avec mdp et username valide', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.fixture('JDD.json').then (data => {
      cy.log (data) // Pour afficher les data username et mdp 
      cy.log('la longeur du password est :',data.password.length) // pour afficher dans mon 
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username)
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password)
      cy.get('.oxd-button').click()
      cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index') // equal ce sont les chiffres et URL
    })

  } )

  it('connexion échouée avec email ou mot de passe incorrects', () => {
    cy.fixture('JDD.json').then (data => {
        console.log(data) //au dessus de 4 éléments il faut écrire pas cy mais consol
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.usernameNV)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password)
        cy.get('.oxd-button').click()
        cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials')
        cy.get('.oxd-button').should('have.css', 'background-color', 'rgb(255, 123, 29)')

    })




  })
 
})
 