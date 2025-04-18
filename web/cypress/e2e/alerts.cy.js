describe('Validações de Alertas em JavaScript', () => {
    beforeEach(() => {
        cy.login()
        cy.goTo('Alertas JS', 'JavaScript Alerts')
    })

    it('Deve validar a mensagem de alerta', () => {
        //alert: apenas mostra uma mensagem e tem um único botão (OK).
        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Olá QA, eu sou um Alert Box!')
        })

        cy.contains('button', 'Mostrar Alert').click()

    })

    it('Deve confirmar um diálogo e validar a resposta positiva', () => {
        //confirm: mostra uma mensagem com dois botões (OK e Cancelar).
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!')
            return true //True é o click no botão OK
        })

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você clicou em Ok!')
        })


        cy.contains('button', 'Mostrar Confirm').click()

    })

    it('Deve cancelar um diálogo e validar a resposta negativa', () => {

        cy.on('window:confirm', (msg) => {
            expect(msg).to.equal('Aperte um botão!')
            return false //False é o click no botão Cancelar
        })

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal('Você cancelou!')
        })

        cy.contains('button', 'Mostrar Confirm').click()

    })

    it('Deve interagir com um prompt, inserir um texto e validar uma mensagem', () => {

        const name = 'Tommy Lee'

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(name)
        })

        cy.on('window:alert', (msg) => {
            expect(msg).to.equal(`Olá ${name}! Boas-vindas ao WebDojo!`)
        })

        cy.contains('button', 'Mostrar Prompt').click()

    })

})