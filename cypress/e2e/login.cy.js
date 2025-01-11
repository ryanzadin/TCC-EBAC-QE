/// <reference types="cypress" />

describe('Autenticar usuario', () => {
    it('Deve autenticar o usuario', () => {
        cy.request({
            method: 'POST',
            url: 'authUser',
            "email": "admin@admin.com",
            "password": "admin123"
        }).then((response) => {
            expect(response.status).to.equal(200)
            cy.log(response.body.authorization)
        })
    });
});