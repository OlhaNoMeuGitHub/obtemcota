const scriptjs = require("../src/main/transformadados");
const valoresItub = require("./payload/Itub4.json");

describe("vailida transforma dados", function () {
  it("valida execute type ", async () => {
    let testvaloresItub = valoresItub[0];
    let result = scriptjs.execute("PositivoNegativo", testvaloresItub);
    let js = JSON.stringify(result);

    expect(result.dadoscotacoes[0].date).toBe("2021-01-04T00:00:00.000Z");
    expect(result.dadoscotacoes[0].date).toBe("2021-01-04T00:00:00.000Z");
    expect(result.dadoscotacoes[0].vclose).toBe("");
    expect(result.dadoscotacoes[1].vclose).toBe("N");
    expect(result.dadoscotacoes[3].vclose).toBe("P");
    expect(result.dadoscotacoes[3].QtdPositivoSeguidos).toBe(2);
  });


  it("Executa Algos em todos symbols ", async () => {
    jest.setTimeout(30000);
    let dadosSymbols = {
      tipoBusca: "historico",
      symbols: ["ITUB4.SA", "PETR4.SA"],
      from: "2021-01-01",
      to: "2021-03-10",
    };
    arrAlgos =[{algo:"PositivoNegativo"},
    {algo:"Maior",parans:["QtdNegativoSeguidos"]},
    {algo:"Maior",parans:["close"]},
    {algo:"Media",parans:["QtdNegativoSeguidos"]},
    {algo:"Media",parans:["close"]},
    {algo:"RSI",parans:["close",14]},
    {algo:"MediaMovel",parans:["close",10]},
  
  ];

    let result = await scriptjs.ExecutaTodosAlgosEmTodosSymbols(arrAlgos, dadosSymbols);
    let strinJson = JSON.stringify(result);
    expect(strinJson.includes("ITUB4")).toBe(true);
    expect(strinJson.includes("PETR4")).toBe(true);
  });
});
