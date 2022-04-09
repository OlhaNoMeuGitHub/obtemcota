const scriptjs = require('../../../src/AlgoritimosDados/Estatisticos/media');
const payloadMedia = require('../Estatiscos/payload/media.json');

describe('vailida transforma media', function () {

    it('Valida meida com parans', async () => {
        let response = await scriptjs.execute(payloadMedia[0],"QtdNegativoSeguidos");
        expect(response.MetricasGerais["media"+"QtdNegativoSeguidos"]).toBe(1.4);


    })
    
    it('Valida media calculo com parans', async () => {
        objCalc = [{m:3.5},{m:4.5},{m:7}]
        let response = await scriptjs.CalculaMedia(objCalc,"m");
        expect(response).toBe(5);

    })
})