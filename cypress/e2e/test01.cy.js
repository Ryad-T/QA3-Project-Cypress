/// <reference types= "cypress" />
describe('fonctionnalites  Authentification', () => {
 
 
  it('connexion avec email et mdp valide', () => {
    cy.visit('https://www.laboutiqueharibo.fr/login');
    cy.get('#ppms_cm_agree-to-all').click()
    cy.get('#login-form-email').type('ikram.ayadi@gmail.com')
    cy.get('#login-form-password').type('Azerty@123')
    cy.get('.login > .c-btn').click()
    cy.url().should('equal','https://www.laboutiqueharibo.fr/account?registration=false') // C'est une assertion pour vérifier qu'on atteri sur la bonne page
    cy.title().should('equal', OrangeHRM) ; // Pour tester le nom de la page
    cy.title().should('contain', HRM ) ; // Pour tester que le titre contien bien HRM
    cy.reload() ; //Pour rafraichir la page
    cy.wait(8000) // Pour attendre X secondes

})
 
 
})
 