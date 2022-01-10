const scriptjs = require("../src/main/buscadados");

describe("vailida transforma dados", function () {
  it("valida execute type ", async () => {
    jest.setTimeout(30000);
    let event = {
      tipoBusca: "historico",
      symbols: ["ITUB4.SA", "PETR4.SA"],
      from: "2021-01-01",
      to: "2021-01-10",
    };

    let response = await scriptjs.obtemDados(event);
    let strinJson = JSON.stringify(response);
    expect(strinJson.includes("ITUB4")).toBe(true);
    expect(strinJson.includes("PETR4")).toBe(true);
  });
});
