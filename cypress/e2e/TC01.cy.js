/// <reference types= "cypress" />
describe('fonctionalité authentification', () => {
 
  

  it('Connexion avec un Username valide et un mdr valide' ,  () =>   {
    cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')  
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
   
           
           
      })

it('Connexion avec un Username invalide et un mot de passe valide' ,  () =>   {
    cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')  
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
   
           
           
      })

it('Connexion avec un Username valide et un mot de passe invalide' ,  () =>   {
    cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')  
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin')
    cy.get('.oxd-button').click()
   
           
           
      })

it('Connexion avec un Username invalide et un mdp invalide' ,  () =>   {
    cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Adin')  
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admi')
    cy.get('.oxd-button').click()
   
           
           
      })

it('Connexion avec un Username vide et un mdp vide' ,  () =>   {
    cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('.oxd-button').click()
   
           
           
      })

it('Connexion avec un Username vide et un mdp valide' ,  () =>   {
    cy.visit ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()

      })

 }) 