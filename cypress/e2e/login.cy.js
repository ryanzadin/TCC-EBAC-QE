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

it('deve fazer login', () => {
    cy.fixture('perfil').then((dados) => {
        cy.login(dados.usuario, dados.senha)
        cy.get('.page-title').should('contain', 'Minha conta')
    })
});