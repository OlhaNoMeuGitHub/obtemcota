const scriptJs = require('../source/src/uploadArquivo');
require('dotenv').config()


describe('Obtem Arquivos', function () {
    it('Valida carregamento arquivo', async () => {
        let jsonTeste = {Nome:"teste",Sobrenome:"subtest"}
        let response = await scriptJs.uploadS3(jsonTeste);
        expect(response.Bucket).toBe('cotacoesmapreduce');
        // expect(response.location).to.be.an("string");
    });
});
