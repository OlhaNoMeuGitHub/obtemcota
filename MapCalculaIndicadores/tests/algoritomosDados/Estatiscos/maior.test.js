const scriptjs = require('../../../src/AlgoritimosDados/Estatisticos/maior');
const payloadMedia = require('../Estatiscos/payload/media.json');

describe('vailida transforma media', function () {

    it('Valida meida com parans', async () => {
        let response = await scriptjs.execute(payloadMedia[0],"QtdNegativoSeguidos");
        expect(response.MetricasGerais["maior"+"QtdNegativoSeguidos"]).toBe(2);


    })
    
    it('Valida maior valor com parans', async () => {
        objCalc = [{m:3.5},{m:4.5},{m:7}]
        let response = await scriptjs.CalculaMaior(objCalc,"m");
        expect(response).toBe(7);

    })
})