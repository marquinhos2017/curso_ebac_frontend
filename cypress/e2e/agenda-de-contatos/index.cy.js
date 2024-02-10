/// <reference types="cypress" />


describe('Testes para a pagina de agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })


    // it('Deve preencher o formulario de insercao - Marcos', () => {
    //     cy.get('input[type="text"]').type('Marcos Rodrigues')
    //     cy.get('input[type="email"]').type('marcos.rodrigues2015@yahoo.com.br')
    //     cy.get('input[type="tel"]').type('11 12345678')
    //     cy.get('button[type="submit"]').click()
        
    // })

    // it('Deve preencher o formulario de insercao - Fabiana', () => {
    //     cy.get('input[type="text"]').type('Fabiana')
    //     cy.get('input[type="email"]').type('fabianagorjes@yahoo.com.br')
    //     cy.get('input[type="tel"]').type('34 56783946')
    //     cy.get('button[type="submit"]').click()

        
    // })

    // it('Deve excluir um contato da agenda', () => {
    //         // Visite a página onde está a agenda de contatos
        
    //     cy.get('.sc-beqWaB') // Seleciona a div mãe que engloba os contatos e os botões.within(() => {
    //     cy.get('.contato:last-child') // Encontra o último contato adicionado
    //     .find('button.delete') // Encontra o botão "Deletar" dentro do último contato
    //     .click(); // Clica no botão "Deletar"
    // });

    // it('Deve alterar o ultimo adicionado', () => {
    //     cy.get('.sc-beqWaB') // Seleciona a div mãe que engloba os contatos e os botões.within(() => {
    //     cy.get('.contato:last-child').find('button.edit').click()
    //     cy.get('input[type="tel"]').clear()
    //     cy.get('input[type="tel"]').type('85 989sd')
    //     cy.get('button[type="submit"]').click()
    // });

})