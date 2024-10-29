/// <reference types="cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('eu visito a pagina', () => {
    cy.visit('/')
})

When('eu faco login', () => {
    cy.get('.icon-user-unfollow').click()
    cy.fixture('perfil').then((dados) => {
        cy.login(dados.usuario, dados.senha)
    })
})

Then('o nome de usuario deve aparecer na pagina de login', () => {
    cy.get('.woocommerce-MyAccount-content > :nth-child(2) > :nth-child(1)').should('contain', 'aluno_ebac')
})