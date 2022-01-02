
const app = require('../app.js');



describe('vailida envio handler', function () {
    it('Valida handler com historico', async () => {

        let event = {
            "tipoBusca":"historico",
            "symbols" : ["ITUB4.SA",'PETR4.SA'],
            "from" : "2021-01-01",
            "to" : "2021-01-10"
            
        }


        

        let response = await app.lambdaHandler(event)
        let strinJson = JSON.stringify(response);
        expect(strinJson.includes("ITUB4")).toBe(true);
        expect(strinJson.includes("PETR4")).toBe(true);

    });
});

