const scriptjs = require('../src/TransformaDados');
const valoresItub = require('./payload/Itub4.json');


describe('vailida transforma PositivoENegativo', function () {

    it('Valida ordenacao', async () => {
        let result = scriptjs.transformaEmPositivoNegativo(valoresItub)
        console.log(result)
    

    });

    it('valida Ordem', async () => {
        let testvaloresItub = valoresItub;
        let result = testvaloresItub.sort(scriptjs.ordenaporData)
        expect(result[0].date).toBe('2021-01-04T00:00:00.000Z');
    

    });
});

