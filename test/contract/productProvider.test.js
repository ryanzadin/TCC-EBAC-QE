const { reporter, flow , spec} = require('pactum');
const pf = require('pactum-flow-plugin');
const { eachLike, like } = require('pactum-matchers');


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
    pf.config.projectId = 'lojaebac-category';
    pf.config.projectName = 'teste de categoria';
    pf.config.version = '1.0.7';
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

it('API - Deve adicionar a lista', async () => {
    await flow("Desejo")
        .post('http://lojaebac.ebaconline.art.br/api/wishlistProduct')
        .withHeaders("authorization", token)
        .withJson({
            "authorization": token,
            "productId": like ("663d81f57294efad05afd24a")
          })
        .expectStatus(200)
});