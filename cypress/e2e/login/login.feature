Feature: Autentificação
    Scenario Outline: Login de usuario
        Given eu visito a pagina
        When eu faco login
        Then o nome de usuario deve aparecer na pagina de login
        Examples:
            | usuario              | senha           |
            | aluno_ebac@teste.com | teste@teste.com |

