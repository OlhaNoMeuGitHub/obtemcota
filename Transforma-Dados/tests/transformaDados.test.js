const scriptjs = require('../src/main/transformadados');
const valoresItub = require('./payload/Itub4.json');

describe('vailida transforma dados', function () {

    it('valida execute type ', async () => {
        let testvaloresItub = valoresItub;
        let result = scriptjs.execute("PositivoNegativo",testvaloresItub)
        
        expect(result[0].date).toBe('2021-01-04T00:00:00.000Z');
        expect(result[0].date).toBe('2021-01-04T00:00:00.000Z');
        expect(result[0].vclose).toBe('');
        expect(result[1].vclose).toBe('N');
        expect(result[3].vclose).toBe('P');
        expect(result[3].QtdPositivoSeguidos).toBe(2);
    

    });

    
    it('valida execute all ', async () => {
        let testvaloresItub = valoresItub;
        let arrAlgos = ["PositivoNegativo"]
        let result = scriptjs.executeAll(arrAlgos,testvaloresItub)
        
        expect(result[0].date).toBe('2021-01-04T00:00:00.000Z');
    

    });
})