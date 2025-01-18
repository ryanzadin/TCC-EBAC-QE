/// <reference types="cypress" />
import contrato from "../contratos/usuarios.contrato";

describe('Testes de validação de contratos de Usuários', () => {
    
     it.only('Deve validar contrato de usuários', () => {
          cy.request('usuarios').then(response => {
               return contrato.validateAsync(response.body)
          })
     });


     it('Deve listar usuários cadastrados', () => {
          cy.request({
               method: 'GET',
               url: '',
          }).then((response) => {
               expect(response.body.usuarios[1].nome).to.equal('')
               expect(response.status).to.equal(200)
               expect(response.body).to.have.property('')
               expect(response.duration).to.be.lessThan(20)
          })
     });


     it('Deve cadastrar um usuário com sucesso', () => {
          cy.cadastrarUsuarios('carla moraes', 'carlamoraes@test.com.br', 'testa', 'true')
               .then((response) => {
                    expect(response.status).to.equal(201)
                    expect(response.body.message).to.equal('Cadastro realizado com sucesso')

               })
     })


     it('Deve validar um usuário com email inválido', () => {
          cy.cadastrarUsuarios2('ryan suco', 'ryansuco@test.com.br', 'tester', 'true')
               .then((response) => {
                    expect(response.status).to.equal(400)
                    expect(response.body.message).to.equal('Este email já está sendo usado')

               })
     });


     it('Deve editar um usuário previamente cadastrado', () => {
          cy.request('usuarios').then(response => {
               let id = response.body.usuarios[0]._id
               cy.request({
                    method: 'PUT',
                    url: `usuarios/${id}`,
                    headers: { authorization: token },
                    body:
                    {
                         "nome": "ryan suco",
                         "email": "ryansuco@test.com.br",
                         "password": "tester",
                         "administrador": "false"
                    }
               }).then(response => {
                    expect(response.body.message).to.equal('Registro alterado com sucesso')
               })
          })

     });


     it('Deve deletar um usuário previamente cadastrado', () => {
          cy.cadastrarUsuarios3(token, 'jogo laoa', 'joaoter@test.com.br', 'testaai', 'true')
               .then(response => {
                    let id = response.body._id
                    cy.request({
                         method: 'DELETE',
                         url: `usuarios/${id}`,
                         headers: { authorization: token }
                    })
                         .then(response => {
                              expect(response.body.message).to.equal('Registro excluído com sucesso')
                              expect(response.status).to.equal(200)
                         })
               })

     });
});