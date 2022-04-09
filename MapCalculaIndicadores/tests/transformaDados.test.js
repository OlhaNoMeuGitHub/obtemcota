const scriptjs = require("../src/main/transformadados");
const valoresItub = require("./payload/Itub4.json");
const valoresItubCotacoes = require("./payload/CotacoesMetricas.json");

describe("vailida transforma dados", function () {

  it("Executa Algos em todos symbols ", async () => {
    jest.setTimeout(30000);
    let result = await scriptjs.ExecutaTodosAlgosEmTodosSymbols(valoresItubCotacoes);
    let strinJson = JSON.stringify(result);
    expect(strinJson.includes("ITUB4")).toBe(true);
    expect(strinJson.includes("PETR4")).toBe(true);
  });
});
