describe('Login', () => {
  beforeEach(() => {
    // Arrange
    cy.visit('http://localhost:4000')
    cy.screenshot('apos-visitar-pagina')
  })

  it('Login com dados válidos deve permitir acesso ao sistema', () => {
    // Act
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    
    cy.contains('button', 'Entrar').click()
    cy.screenshot('após-clicar-no-botao-entrar')

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    // Act
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.senhainvalida.usuario)
      cy.get('#senha').click().type(credenciais.senhainvalida.senha)
    })
    
    cy.contains('button', 'Entrar').click()

    // Assertgit 
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})