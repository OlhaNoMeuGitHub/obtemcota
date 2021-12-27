const scriptJs = require('../src/transformaArquivo');
var event, context;


describe('Obtem Arquivos', function () {
    it('Valida carregamento arquivo', async () => {

        let response = scriptJs.carregaArquivo();
        expect(response).toBe('teste');
        // expect(response.location).to.be.an("string");
    });
});
