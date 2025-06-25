describe('Validation du formulaire', ()=>{
 
beforeEach(() =>  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'))
 
it('connexion avec des identifiants valides', ()=>{
    cy.fixture('Authentification.json').then(dataAuthentification=>{
        cy.log('Voila les données avec lesquelles je peux faire une authentification',dataAuthentification)
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(dataAuthentification.username)
       cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(dataAuthentification.password)
       cy.get('.oxd-button').click()
       cy.url().should('equal', 'https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    })
   
   
 
})
 
 
 
 
})