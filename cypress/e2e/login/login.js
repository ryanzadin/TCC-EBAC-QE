/// <reference types="cypress" />
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
let dadosLogin

Given('eu visito a pagina', () => {
    cy.visit('/minha-conta/')
})

When ('eu faço login', () =>{
    cy.get('.icon-user-unfollow').click()
    cy.fixture('perfil').then((dados) => {
        cy.login(dados.usuario, dados.senha)
        cy.get('.page-title').should('contain', 'Minha conta')
    })
})

Then ('o nome de usuario deve aparecer na pagina de login', () =>{

})