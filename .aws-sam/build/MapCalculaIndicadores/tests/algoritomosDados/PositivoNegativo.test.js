const scriptjs = require('../../src/AlgoritimosDados/PositivoNegativo/PositivoNegativo');
const valoresItubDesordenado = require('../payload/Itub4Desordenado.json');
const valoresItub = require('../payload/Itub4.json');

describe('vailida transforma PositivoENegativo', function () {

    it('Valida positivo e negativo', async () => {
        let result = scriptjs.geraPositivoeNegativo(valoresItub[0])
        expect(result.dadosCotacoes[0].vclose).toBe('');
        expect(result.dadosCotacoes[1].vclose).toBe('N');
        expect(result.dadosCotacoes[3].vclose).toBe('P');
        expect(result.dadosCotacoes[3].QtdPositivoSeguidos).toBe(3);
    

    });

    it('valida Ordem', async () => {
        let testvaloresItub = valoresItubDesordenado[0].dadosCotacoes;
        let result = testvaloresItub.sort(scriptjs.ordenaporData)
        expect(result[0].date).toBe('2021-01-04T00:00:00.000Z');
    

    });


    it('valida fluxo completo', async () => {
        let testvaloresItub = valoresItubDesordenado[0];
        let result = scriptjs.transformaEmPositivoNegativo(testvaloresItub)
        expect(result.dadosCotacoes[0].date).toBe('2021-01-04T00:00:00.000Z');
        expect(result.dadosCotacoes[0].vclose).toBe('');
        expect(result.dadosCotacoes[1].vclose).toBe('N');
        expect(result.dadosCotacoes[3].vclose).toBe('P');
        expect(result.dadosCotacoes[3].QtdPositivoSeguidos).toBe(3);
    

    });
});

