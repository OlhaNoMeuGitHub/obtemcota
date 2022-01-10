const scriptjs = require("../src/main/transformadados");
const valoresItub = require("./payload/Itub4.json");

describe("vailida transforma dados", function () {
  it("valida execute type ", async () => {
    let testvaloresItub = valoresItub;
    let result = scriptjs.execute("PositivoNegativo", testvaloresItub);

    expect(result[0].date).toBe("2021-01-04T00:00:00.000Z");
    expect(result[0].date).toBe("2021-01-04T00:00:00.000Z");
    expect(result[0].vclose).toBe("");
    expect(result[1].vclose).toBe("N");
    expect(result[3].vclose).toBe("P");
    expect(result[3].QtdPositivoSeguidos).toBe(2);
  });

  it("valida execute all ", async () => {
    let testvaloresItub = valoresItub;
    let arrAlgos = ["PositivoNegativo"];
   

    expect(result[0].date).toBe("2021-01-04T00:00:00.000Z");
  });

  it("Executa Algos em todos symbols ", async () => {
    jest.setTimeout(30000);
    let dadosSymbols = {
      tipoBusca: "historico",
      symbols: ["ITUB4.SA", "PETR4.SA"],
      from: "2021-01-01",
      to: "2021-01-10",
    };
    arrAlgos =["PositivoNegativo"];

    let result = await scriptjs.ExecutaTodosAlgosEmTodosSymbols(arrAlgos, dadosSymbols);
    let strinJson = JSON.stringify(result);
    expect(strinJson.includes("ITUB4")).toBe(true);
    expect(strinJson.includes("PETR4")).toBe(true);
  });
});
