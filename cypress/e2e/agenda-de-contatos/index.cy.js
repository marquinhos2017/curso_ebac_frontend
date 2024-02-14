/// <reference types="cypress" />


describe('Testes para a pagina de agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })


    it('Deve preencher o formulario de insercao - Marcos Rodrigues', () => {
        cy.get('input[type="text"]').type('Marcos Rodrigues')
        cy.get('input[type="email"]').type('marcos.rodrigues2015@yahoo.com.br')
        cy.get('input[type="tel"]').type('11 12345678')
        cy.get('button[type="submit"]').click()
        cy.wait(1000); // 1000 milissegundos = 1 segundo

        
    })
    // it('Deve preencher o formulario de insercao - Fabiana', () => {
    //     cy.get('input[type="text"]').type('Fabiana')
    //     cy.get('input[type="email"]').type('fabianagorjes@yahoo.com.br')
    //     cy.get('input[type="tel"]').type('34 56783946')
    //     cy.get('button[type="submit"]').click()

    // })

    it('Verifica se Marcos Rodrigues foi realmente adicionado', () => {
        cy.contains('Marcos Rodrigues').should('exist');
        cy.wait(1000); // 1000 milissegundos = 1 segundo

        
    })

    it("Verifica edicao do primeiro contato da lista", () => {
        cy.get('.contato').first().find('.edit').click()
        cy.get('input[type="text"]').should('have.value', 'Marcos Rodrigues');
        cy.wait(1000); // 1000 milissegundos = 1 segundo

        

    })

    it("Verifica se a remocao foi realizada com sucesso", () => {
        cy.get('.contato').then((contatos) => {
            const tamanhoInicial = contatos.length;
      
            cy.get('.contato:last-child').find('button.delete').click(); 
      

            cy.get('.contato').should('have.length', tamanhoInicial - 1);
            cy.wait(1000); // 1000 milissegundos = 1 segundo

          });
 
        

    })



})