describe('Fluxo de login', () => {
    /* Como cliente da EBAC-SHOP
       Quero fazer o login (autenticação) na plataforma
       Para visualizar meus pedidos

Regras de negócio:
• Somente usuários ativos podem fazer login;
• Deve exibir uma mensagem de erro caso o usuário erre o login e senha;
• Se o usuário errar por 3 vezes a senha, deve travar por 15 minutos o login */

});

let dadosLogin 

    beforeEach(() => {
        cy.visit('/minha-conta/')
    });

context('Funcionalidade Login', () => {
    before(() => {
        cy.fixture('perfil').then(perfil => {
            dadosLogin = perfil
        })
    });
});

it('Deve fazer login com sucesso sendo um usuario ativo', () => {
    cy.fixture('perfil').then((dados) => {
        cy.login(dados.usuario, dados.senha)
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    })
});

it('Deve exibir uma mensagem de erro caso o usuário erre o login e senha', () => {
    cy.fixture('perfil').then((dados) => {
        cy.login(dados.usuario, '123489723')
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    })
});

it.only('Se o usuário errar por 3 vezes a senha, deve travar por 15 minutos o login', () => {
    cy.fixture('perfil').then((dados) => {
        cy.login(dados.usuario, '123489723')
        cy.get('#password').type('wewedad')
        cy.get('.woocommerce-form > .button').click()
        cy.get('#password').type('w3232232d')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    });
   
});