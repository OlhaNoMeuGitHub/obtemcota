const scriptjs = require("../src/main/splitCotacoes");
const valoresItubCotacoes = require("./payload/CotacoesMetricas.json");
const cotacoesGrande = require("./payload/cotacoesGrande.json");

describe("vailida transforma dados", function () {



  it("Testa split chunks maior cotacoes que map ", async () => {
    jest.setTimeout(30000);
    let result = await scriptjs.sliptinchunks(cotacoesGrande,25);
    expect(result.length).toBe(17);
  });

  
  it("Testa split chunks menos maps que cotacoes ", async () => {
    jest.setTimeout(30000);
    let result = await scriptjs.sliptinchunks(cotacoesGrande,2);
    expect(result.length).toBe(2);
  });

  it("Testa split com cotacoes pequena", async () => {
    jest.setTimeout(30000);
    let result = await scriptjs.sliptinchunks(valoresItubCotacoes,2);
    expect(result.length).toBe(2);
  });


  it("tamanho objeto split ", async () => {
    jest.setTimeout(30000);
    let result = await scriptjs.logSizeInKilobytes(valoresItubCotacoes);
    expect(result).toBe(51.28);
  });

  it("qtd de maps maxima ", async () => {
    jest.setTimeout(30000);
    let result = await scriptjs.calculaQtdMaps(cotacoesGrande,25);
    expect(result).toBe(25);
  });

  it("qtd de maps da array ", async () => {
    jest.setTimeout(30000);
    let result = await scriptjs.calculaQtdMaps(cotacoesGrande,50);
    expect(result).toBe(33);
  });

  
  it("qtd de maps da array ", async () => {
    jest.setTimeout(30000);
    let result = await scriptjs.calculaQtdMaps(cotacoesGrande,1);
    expect(result).toBe(3);
  });
});
