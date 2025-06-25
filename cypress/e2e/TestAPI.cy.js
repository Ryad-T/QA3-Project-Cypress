import APIAuth from "../API/Authentification" 

describe('CheckAPI', () => {
const API=new APIAuth()
const Token=''

beforeEach(()=> {
API.Login().then(data =>{
Token=data.body.access_token


})


})
    
 
 it.skip('Check API Authentification', () => {
//console.log('Voci le contenu de la class' , API)
API.Login().then(data =>{
//console.log(data)
//console.log('voici mon token', data.body.access_token)

//expect(data.body.access_token).to.have.property('access_token')
expect(data.body.firstName).to.be.equal('Ryad')
expect(data.status).to.be.equal(200)
expect(data.isOkStatusCode).to.be.equal(true)
expect(data.body.userID).to.be.equal('685a9ce90d883300148314dc')


})


    })

it('Check API Authentification', () => {
//API.Tasks()
cy.log('Affiche moi le Token', Token)

    })



}) 