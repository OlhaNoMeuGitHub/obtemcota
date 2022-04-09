const scriptjs = require("../../../src/AlgoritimosDados/SerieTemporal/rsi");
const valoresItub = require("./payload/mediaMovel.json");


describe("vailida transforma RSI", function () {
  it("valida metrica RSI", async () => {

    let response = await scriptjs.CriaMetricaRSI(valoresItub[0],"close",14);
    expect(response.dadosCotacoes[43].RSIclose14).toBe(48.36);
  });

  it("valida Calculo RSI", async () => {

    let response = await scriptjs.CalculaRSI(valoresItub[0].dadosCotacoes,"close",14);
    expect(response[0]).toBe(39.77);
  });
});
