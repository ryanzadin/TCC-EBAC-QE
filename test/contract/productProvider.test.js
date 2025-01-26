const { reporter, flow , spec} = require('pactum');
const pf = require('pactum-flow-plugin');
const { like } = require('pactum-matchers');


let token;
beforeEach(async () => {
    token = await spec()
        .post('http://lojaebac.ebaconline.art.br/public/authUser')
        .withJson({
            "email": "admin@admin.com",
            "password": "admin123"
        })
        .returns('data.token')
})

function addFlowReporter() {
    pf.config.url = 'http://localhost:8088'; // pactum flow server url
    pf.config.projectId = 'lojaebac API';
    pf.config.projectName = 'teste de wishlist API';
    pf.config.version = '1.0.2';
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

it('API - Deve adicionar a lista de Desejo', async () => {
    await flow("Desejo")
        .post('http://lojaebac.ebaconline.art.br/api/wishlistProduct')
        .withHeaders("authorization", token)
        .withJson({
            "authorization": token,
            "productId": like ("679403caf679c1b50c47a710")
          })
        .expectStatus(200)
});