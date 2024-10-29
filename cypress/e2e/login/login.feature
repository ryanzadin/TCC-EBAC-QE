Feature: Autentificação
Background: Visitar a pagina
        Given eu visito a pagina

    Scenario Outline: Login de usuario
        When eu faco login usando o usuario "<email>" e senha "<senha>"
        Then o nome de usuario deve aparecer na pagina de login ou uma mensagem de erro "<respostaEsperada>"
        Examples:
            | email                | senha           | respostaEsperada |
            | aluno_ebac@teste.com | teste@teste.com | aluno_ebac       |

    Scenario: Login invalido
        When eu faco login usando o usuario "<email>" e senha "<senha>"
        Then o nome de usuario deve aparecer na pagina de login ou uma mensagem de erro "<respostaEsperada>"
        Examples:
            | email                | senha      | respostaEsperada |
            | aluno_ebac@teste.com | teste1102  | Perdeu a senha?  |
