/// <reference types= "cypress" />
import Loginpage from "../POM/Login" // Import de la classe un ".=un pas si un autre point"

describe('Authentification', () => { 
  const login=new Loginpage() // Ecriture spécial de la classe
  const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login' 
   // ne pas oublier d'afficher ma classe dans ma console avec la manip console.log
   const url2 = 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'
  
 beforeEach (() => {
 cy.visit(url)
 } )


  it.skip('connexion avec mdp et username valide', () => {
    cy.visit(url)
    cy.fixture('JDD.json').then (data => {
      cy.log (data) // Pour afficher les data username et mdp 
      cy.log('la longeur du password est :',data.password.length) // pour afficher dans mon 
      console.log('Voici les données de connexion' , data.username , data.password)
       login.InputUsername.type(data.username)
       login.InputPassword.type(data.password)
       login.InputBouton.click()
       //login.InputBouton.should('have.css', 'background-color', 'rgb(255, 123, 29)')
      cy.url().should('equal', url2) // equal ce sont les chiffres et URL
    })

  } )

  it ('connexion échouée avec email ou mot de passe incorrects', () => {


    cy.fixture('JDD.json').then (data => {
        console.log('Voici le contenu de la classe Login', login)   
        console.log(data) //au dessus de 4 éléments il faut écrire pas cy mais consol
        console.log('le chiffre affichée est le', 9)
        console.log('Bonjour la Team cest Cherif')
        cy.wait(4000)
        login.InputUsername.type(data.usernameNV) 
        login.InputPassword.type(data.password)
        login.InputBouton.click()
        cy.url().should('equal', url)
        login.Errormessage.should('have.text', 'Invalid credentials')
        login.InputBouton.should('have.css', 'background-color', 'rgb(255, 123, 29)')

    })




  })
 
})
 