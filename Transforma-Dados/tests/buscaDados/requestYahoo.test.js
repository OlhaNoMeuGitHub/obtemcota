const scriptJs = require('../../src/buscaDados/requestYahoo');
var event, context;


describe('Valida requests', function () {
    it('Valida get yahoo por symbol', async () => {

        let response = await scriptJs.GetValoresAtuais("ITUB4.SA");
        expect(response.ask).not.toBe(21.19);
        // expect(response.location).to.be.an("string");
    });

    it('Valida get yahoo por data from', async () => {

        let response = await scriptJs.GetValoresHistorico("ITUB4.SA","2021-07-01");
        expect(response[0].close).toBe(29.690001);
        // expect(response.location).to.be.an("string");
    });

    it('Valida get yahoo por data from e to', async () => {

        let response = await scriptJs.GetValoresHistorico("ITUB4.SA","2021-07-01","2021-08-30");
        expect(response[response.length-1].close).toBe(30.76);
        // expect(response.location).to.be.an("string");
    });

    it('Valida get yahoo por dias', async () => {

        let response = await scriptJs.GetValoresDiasAnteriores("ITUB4.SA",40);
        expect(response.length-1).not.toBe(0);
        // expect(response.location).to.be.an("string");
    });

    it('Obtem valores de varios symbol por data', async () => {

        let symbols = ['ITUB4.SA','PETR4.SA'];
        let from = "2021-07-01";
        let to = "2021-08-30"

        let response = await scriptJs.GetTodasCotacoesHistorico(symbols,from,to);
        let strinJson = JSON.stringify(response);
        expect(strinJson.includes("ITUB4")).toBe(true);
        expect(strinJson.includes("PETR4")).toBe(true);
        // expect(response.location).to.be.an("string");
    });

    it('Obtem balores de varios symbol por dias', async () => {

        let symbols = ['ITUB4.SA','PETR4.SA'];
        let dias = 20

        let response = await scriptJs.GetTodasCotacoesDias(symbols,dias);
        let strinJson = JSON.stringify(response);
        expect(strinJson.includes("ITUB4")).toBe(true);
        expect(strinJson.includes("PETR4")).toBe(true);
        // expect(response.location).to.be.an("string");
    });

});
