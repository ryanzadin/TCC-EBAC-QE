/// <reference types="cypress" />

/* Como cliente da EBAC SHOP 
   Quero fazer o login(autenticação) na plataforma   
   Para visualizar meus pedidos 
 
Regras de negócio:  
• Somente usuários ativos podem fazer login; 
• Deve exibir uma mensagem de erro caso o usuário erre o login e senha; 
• Se o usuário errar por 3 vezes a senha, deve travar por 15 minutos o login */

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

function usuario(valido) {
    if (valido === "usuario") {
        return "aluno_ebac";
    } else {
        return "Perdeu a senha";
    }
}

Given('eu visito a pagina', () => {
    cy.visit('/')
})

When('eu faco login usando o usuario {string} e senha {string}', (email, senha) => {
    cy.get('.icon-user-unfollow').click()
    cy.login(email, senha)
})

Then('o nome de usuario deve aparecer na pagina de login ou uma mensagem de erro {string}', function () {
    this.respostaEsperada = usuario(this.valido)
});
