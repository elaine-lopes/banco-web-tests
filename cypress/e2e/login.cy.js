describe('Login', () => {
  beforeEach(() => {
    // Arrange
    cy.visit('http://localhost:4000')
    cy.screenshot('apos-visitar-pagina')
  })
  it('Login com dados válidos deve permitir acesso ao sistema', () => {
    // Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.screenshot('após-preencher-dados-validos')
    cy.contains('button', 'Entrar').click()
    cy.screenshot('após-clicar-no-botao-entrar')

    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    // Act
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123457')
    cy.contains('button', 'Entrar').click()

    // Assertgit 
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})