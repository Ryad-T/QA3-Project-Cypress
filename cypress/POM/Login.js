class Loginpage{
    get InputUsername () { //Nom de class (rappel 1 class = 1 POM=
             return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input') 
             
      }

    get InputPassword () {
        return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input') 

    }

    get InputBouton () {
        return cy.get('.oxd-button')

    }

    get Errormessage () {
        return cy.get('.oxd-alert-content > .oxd-text')

    }

}
export default Loginpage ; //Il faut lui dire que cette classe est exportable CAR SANS ça Cypress ne va pas nous autoriser l'importation de la classe 
// Regarde le nom du fichier il doit etre en format "NomduFichier.JS" ne met pas de "cy" car cy sont juste des 