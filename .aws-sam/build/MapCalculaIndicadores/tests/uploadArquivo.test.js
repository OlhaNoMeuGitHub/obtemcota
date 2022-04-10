const scriptJs = require('../src/main/uploadArquivo');


describe('Obtem Arquivos', function () {
    it('Valida carregamento arquivo', async () => {
        let jsonTeste = {Nome:"teste",Sobrenome:"subtest"}
        let response = await scriptJs.uploadS3(jsonTeste);
        expect(response.Bucket).toBe('mapbucket');
        // expect(response.location).to.be.an("string");
    });
});
