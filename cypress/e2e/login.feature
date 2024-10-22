Feature: Autentificação
    Scenario Outline: Login de usuario
        Given que eu estou na pagina inicial
        When eu faço login
        Then o nome de usuario deve aparecer na pagina de perfil
        Examples:
            | usuario              | senha           |
            | aluno_ebac@teste.com | teste@teste.com |

