
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
            'WEGE3.SA','ITSA4.SA','JBSS3.SA',
        'BBAS3.SA','RENT3.SA','LREN3.SA','RADL3.SA','ALPA4.SA','AMER3.SA',
    'ASAI3.SA','AZUL4.SA','BIDI11.SA','BPAN4.SA','BBSE3.SA',
    'BRML3.SA',
    'BBDC3.SA',
    'BBDC4.SA',
    'BRAP4.SA',
    'BBAS3.SA',
    'BRKM5.SA',
    'BRFS3.SA',
    'BPAC11.SA',
    'CRFB3.SA',
    'CCRO3.SA',
    'CMIG4.SA',
'CIEL3.SA',
'COGN3.SA',
'CPLE6.SA',
'CSAN3.SA',
'CPFE3.SA',
'CMIN3.SA',
'CVCB3.SA',
'CYRE3.SA',
'DXCO3.SA',
'ECOR3.SA',
'ELET3.SA',
'ELET6.SA',
'EMBR3.SA',
'ENBR3.SA',
'ENGI11.SA',
'ENEV3.SA',
'EGIE3.SA',
'EQTL3.SA',
'EZTC3.SA',
'FLRY3.SA',
'GGBR4.SA',
'GOAU4.SA',
'GOLL4.SA',
'NTCO3.SA',
'SOMA3.SA',
'HAPV3.SA',
'HYPE3.SA',
'IRBR3.SA',
'ITSA4.SA',
'ITUB4.SA',
'JBSS3.SA',
'JHSF3.SA',
'KLBN11.SA',
'RENT3.SA',
'LCAM3.SA',
'LWSA3.SA',
'LREN3.SA',
'MGLU3.SA'
],
            "from" : "2022-03-01",
            "to" : "2022-04-25"
            
        }


        

        let response = await app.lambdaHandler(event)
        let strinJson = JSON.stringify(response);
        expect(strinJson.includes("ITUB4")).toBe(true);
        expect(strinJson.includes("PETR4")).toBe(true);

    });
});

