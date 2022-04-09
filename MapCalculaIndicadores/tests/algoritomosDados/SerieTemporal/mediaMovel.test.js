const scriptjs = require("../../../src/AlgoritimosDados/SerieTemporal/mediaMovel");
const valoresItub = require("./payload/mediaMovel.json");


describe("vailida transforma mediaMovel", function () {
  it("valida Calculo Proxima media movel", async () => {

    let response = await scriptjs.CriaMetricaMediaMovel(valoresItub[0],"close",10);
    expect(response.dadosCotacoes[27].mediaMovelclose10).toBe(28.131);
  });
});
