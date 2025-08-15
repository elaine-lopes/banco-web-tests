describe('Tranferencias', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })

    it('Deve transferir quando informo dados e valor válidos', () => {
        // Act
        cy.realizarTransferencia('João', 'Maria', '11')

        // Assert
        cy.verificarMensagemNoToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando tentar transferir mais que 5 mil sem informar token', () => {
        // Act
        cy.realizarTransferencia('João', 'Maria', '6000')

        //Assert
        cy.verificarMensagemNoToast('Autenticação necessária para transferência acima de R$5.000.00.')
    })

})