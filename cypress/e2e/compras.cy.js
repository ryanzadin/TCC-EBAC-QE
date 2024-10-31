import adcionarProdutoPage from "../support/page_objects/adcionar-produto.page";
import cupomPage from "../support/page_objects/cupom.page";

describe('Fluxo de Compras', () => {
    /*Como cliente da EBAC-SHOP
    Quero adicionar produtos no carrinho
    Para realizar a compra dos itens
    Regras de negócio:
    • Não é permitido inserir mais de 10 itens de um mesmo produto ao carrinho;
    • Os valores não podem ultrapassar a R$ 990,00;
    • Valores entre R$ 200 e R$ 600 , ganham cupom de 10%
    • Valores acima de R$ 600 ganham cupom de 15% */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve adcionar os produtos ao carrinho, Não ultrapassando o valor de R$ 990,00 e recebendo o cupom de 15% de desconto', () => {
        cy.get('.icon-user-unfollow').click()
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
            cy.get('.page-title').should('contain', 'Minha conta')
        })
        cy.visit('/produtos/')
        cy.fixture('produtos').then(dados => {
            adcionarProdutoPage.buscarProdutoLista(dados[0].nomeProduto)
            adcionarProdutoPage.addProdutoCarrinho(dados[0].tamanho, dados[0].cor, dados[0].quantidade)
            cy.visit('/produtos/')
            adcionarProdutoPage.buscarProdutoLista(dados[1].nomeProduto)
            adcionarProdutoPage.addProdutoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)
            cy.visit('/produtos/')
            adcionarProdutoPage.buscarProdutoLista(dados[2].nomeProduto)
            adcionarProdutoPage.addProdutoCarrinho(dados[2].tamanho, dados[2].cor, dados[2].quantidade)
            cy.visit('/produtos/')
            adcionarProdutoPage.buscarProdutoLista(dados[3].nomeProduto)
            adcionarProdutoPage.addProdutoCarrinho(dados[3].tamanho, dados[3].cor, dados[3].quantidade)
            cy.get('.woocommerce-message > .button').click()
            cupomPage.adcionarCupom("off10s")
            cy.get('.checkout-button').click()
            cy.get('#terms').click()
            cy.get('#place_order').click()
            cy.wait(4000)
            cy.get('.woocommerce-column__title').should('contain', 'Endereço de faturamento')
        })
       
    });
    it.only('Deve adcionar os produtos ao carrinho, Valores entre R$ 200 e R$ 600 recebem o cupom de 10% de desconto', () => {
        cy.get('.icon-user-unfollow').click()
        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
            cy.get('.page-title').should('contain', 'Minha conta')
        })
        cy.visit('/produtos/')
        cy.fixture('produtos').then(dados => {
            adcionarProdutoPage.buscarProdutoLista(dados[0].nomeProduto)
            adcionarProdutoPage.addProdutoCarrinho(dados[0].tamanho, dados[0].cor, dados[0].quantidade)
            cy.visit('/produtos/')
            adcionarProdutoPage.buscarProdutoLista(dados[1].nomeProduto)
            adcionarProdutoPage.addProdutoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)
            cy.visit('/produtos/')
            adcionarProdutoPage.buscarProdutoLista(dados[2].nomeProduto)
            adcionarProdutoPage.addProdutoCarrinho(dados[2].tamanho, dados[2].cor, dados[2].quantidade)
            cy.get('.woocommerce-message > .button').click()
            cy.get('.checkout-button').click()
            cy.get('#terms').click()
            cy.get('#place_order').click()
            cy.wait(4000)
            cy.get('.woocommerce-column__title').should('contain', 'Endereço de faturamento')
        })
       
    });
});

