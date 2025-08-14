Cypress.Commands.add('fazerLoginComCredenciaisValidas', () => {
        cy.fixture('credenciais').then(credenciais => {
            cy.get('#username').click().type(credenciais.valida.usuario)
            cy.get('#senha').click().type(credenciais.valida.senha)
        })
    
        cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('fazerLoginComCredenciaisInvalidas', () => {
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.senhainvalida.usuario)
      cy.get('#senha').click().type(credenciais.senhainvalida.senha)
    })
    
    cy.contains('button', 'Entrar').click()

})