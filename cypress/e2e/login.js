
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'

describe('Fluxo de login', () => {
    /* Como cliente da EBAC-SHOP
       Quero fazer o login (autenticação) na plataforma
       Para visualizar meus pedidos

Regras de negócio:
• Somente usuários ativos podem fazer login;
• Deve exibir uma mensagem de erro caso o usuário erre o login e senha;
• Se o usuário errar por 3 vezes a senha, deve travar por 15 minutos o login */

});

Given ('eu estou na pagina inicial', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/')
})

When ('eu faço login', () =>{
    cy.login(usuario,senha)
})

Then ('o nome de usuario deve aparecer na pagina de login', () =>{

})