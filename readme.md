Trabalho de Conclusao curso Engenheiro de Qualidade de Software

Neste projeto estarei mostrando um pouco das minhas habilidades como QA full stack, utilizando ferramentas e técnicas de testes que todo bom profissional de QA deveria saber.

Teste automatizados de: UI, API e Mobile, usando Cypress para as automações de UI e API e o BrowserStack para os testes Mobile,
Integração contínua com GitHub Actions,
Teste de performance com K6,
Teste feitos no conteiner Docker da Loja EBAC Shop.

Dependências:
Node modules - npm install

Conteiners Docker - Banco de Dados: ernesto barbosa/lojaebacdb
Loja EBAC: ernesto barbosa/lojaebac

Comandos para subir os conteiners:

docker network create --attachable ebac-network

docker run -d --name wp_db -p 3306:3306 --network ebac-network ernestosbarbosa/lojaebacdb:latest

docker run -d --name wp -p 80:80 --network ebac-network ernestosbarbosa/lojaebac:latest

A Loja estará na porta: http://localhost:80

