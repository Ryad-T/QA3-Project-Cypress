describe("Authentification",() => {
 
  before(() => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin") ;
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123") ;
  cy.get('.oxd-button').click() ;
 
 
  })
 
 
 
it("Connexion avec username et mdp valides",() => {
 
    cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.title().should('equal', 'OrangeHRM')
    
})
 
 
 
 
it("Connexion avec username valide et mdp invalide",() => {
 
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin") ;
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin12") ;
  cy.get('.oxd-button').click() ;
  cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
 
})
 
it("Connexion avec username invalide et mdp valide",() => {
 
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin1") ;
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123") ;
  cy.get('.oxd-button').click() ;
  cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
 
})
 
it("Connexion avec username et mdp invalides",() => {
 
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin1") ;
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin1234") ;
  cy.get('.oxd-button').click();
  cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
 
})
 
 
it("Connexion avec username valide et mdp vide",() => {
 
  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin") ;
  cy.get('.oxd-button').click();
  cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
 
})
 
it("Connexion avec username vide et mdp valide",() => {
 
  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123") ;
  cy.get('.oxd-button').click();
  cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
 
})
 
it("Connexion avec username et mdp vides",() => {
 
  cy.get('.oxd-button').click();
  cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
 
})
 
 
})