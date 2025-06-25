class APIAuth {
    Login () {
        return cy.request({ // Commande pour executer l'API, elle est suivie des étapes que je fais dans Postman
            method: 'POST',
            url: 'https://qacart-todo.herokuapp.com/api/v1/users/login',
            body: {
                email : 'tatm.ryad02@outlook.com',
                password : 'Ryad123456'

            }
    
    


        })

    } 

Tasks () {
        return cy.request({
            method: 'GET',
            url: 'https://qacart-todo.herokuapp.com/api/v1/tasks'
            
        })


    }

    
}
export default APIAuth