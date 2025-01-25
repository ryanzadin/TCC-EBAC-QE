const { reporter, flow, handler, mock} = require('pactum');
const pf = require('pactum-flow-plugin');

function addFlowReporter() {
  pf.config.url = 'http://localhost:8088'; 
  pf.config.projectId = 'TCC EBAC - Teste de API automatizado';
  pf.config.projectName = 'TCC-EBAC-QE';
  pf.config.version = '1.0.1';
  pf.config.username = 'scanner';
  pf.config.password = 'scanner';
  reporter.add(pf.reporter);
}


before(async () => {
   addFlowReporter();
   await mock.start(4000);
});


after(async () => {
    await mock.stop();
    await reporter.end();
});

handler.addInteractionHandler('Login response', () => {
    return {
      provider: 'lojaebac-api', 
      flow: 'Login', 
      request: {
        method: 'POST',
        path: '/public/authUser',
        body:{
            "email": "admin@admin.com",
            "password": "admin123"

        }
      },
      response: {
        status: 200,
        body: {
          "success": true
        }
      }
    }    
  });


it('Front - Deve autenticar o usuario com sucesso', async () => {
    await flow("Login")
    .useInteraction('Login response')
        .post('http://localhost:4000/public/authUser')
        .withJson({
            "email": "admin@admin.com",
            "password": "admin123"
        })
        .expectStatus(200)
        .expectJson('success', true )
}); 