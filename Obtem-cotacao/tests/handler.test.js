
const app = require('../app.js');



describe('vailida envio handler', function () {

    beforeEach(function() {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    })

    it('Valida handler com historico', async () => {

        let event = {
            "tipoBusca":"historico",
            "symbols" : ["ITUB4.SA",'PETR4.SA','VALE','BBDC4.SA',
            'B3SA3.SA','ABEV3.SA','MGLU3.SA','SUZB3.SA',
            'WEGE3.SA','ITSA4.SA','JBSS3.SA','NTCO3.SA',
        'BBAS3.SA','RENT3.SA','LREN3.SA','RADL3.SA'],
            "from" : "2021-01-01",
            "to" : "2021-05-10"
            
        }


        

        let response = await app.lambdaHandler(event)
        let strinJson = JSON.stringify(response);
        expect(strinJson.includes("ITUB4")).toBe(true);
        expect(strinJson.includes("PETR4")).toBe(true);

    });
});

