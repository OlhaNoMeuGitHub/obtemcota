const scriptJs = require('../src/decideTipoBusca');

describe('Decide tipo de buscas', function () {
    it('Valida tipo busca por data', async () => {
        let event = {
            "tipoBusca":"historico",
            "symbols" : ["ITUB4.SA"],
            "from" : "2021-01-01",
            "to" : "2021-01-10"
            
        }

        let response = await scriptJs.chamabusca(event);
        let strinJson = JSON.stringify(response);
        expect(strinJson.includes("ITUB4")).toBe(true);
        expect(strinJson.includes("PETR4")).toBe(true);
        // expect(response.location).to.be.an("string");
    });

    it('Valida tipo busca por dias', async () => {
        let event = {
            "tipoBusca":"dias",
            "symbols" : ["ITUB4.SA",'PETR4.SA'],
            "dias" : "20"
            
        }

        let response = await scriptJs.chamabusca(event);
        let strinJson = JSON.stringify(response);
        expect(strinJson.includes("ITUB4")).toBe(true);
        expect(strinJson.includes("PETR4")).toBe(true);
        // expect(response.location).to.be.an("string");
    });

});