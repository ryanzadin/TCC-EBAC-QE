const { reporter, flow,request } = require('pactum');
const pf = require('pactum-flow-plugin');

request.setBaseUrl('http://lojaebac.ebaconline.art.br')


function addFlowReporter() {
  pf.config.url = 'http://localhost:8088'; 
  pf.config.projectId = 'TCC-EBAC-QE';
  pf.config.projectName = 'TCC EBAC - Teste de API automatizado';
  pf.config.version = '1.0.1';
  pf.config.username = 'scanner';
  pf.config.password = 'scanner';
  reporter.add(pf.reporter);
}

before(async () => {
  addFlowReporter();
});


after(async () => {
  await reporter.end();
});

it('API - Deve autenticar o usuario com sucesso', async () => {
    await flow("Login")
        .post('/public/authUser')
        .withJson({
            "email": "admin@admin.com",
            "password": "admin123"
        })
        .expectStatus(200)
        .expectJson('success', true )
});