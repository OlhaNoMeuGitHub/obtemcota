const scriptjs = require("../app");
const handmock = require("./payload/cotacoesGrande.json");

describe("vailida transforma dados", function () {
  it("Executa Algos em todos symbols ", async () => {
    jest.setTimeout(30000);

    let event = {
      arquivo:"1649203971684.json",
      qtdMap:25
    }
    

    let result = await scriptjs.lambdaHandler(event);
    expect(result.length).toBe(2);
  });
});
