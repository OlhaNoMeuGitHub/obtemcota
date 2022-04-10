const scriptjs = require("../index");
const handmock = require("./payload/CotacoesMetricas.json");
const mockMap = require("./payload/MapCotacoes");



describe("vailida transforma dados", function () {
  it("Executa State Split ", async () => {
    jest.setTimeout(30000);
    let event = {
      arquivo:"1649523907570.json",
      qtdMap:25
    }

    let result = await scriptjs.lambdaHandler(event,"arn:aws:states:us-east-1:123456789012:stateMachine:machineMap");
    expect(result.length).not.toBe(2);
  });

  it("Executa State Map ", async () => {
    jest.setTimeout(30000);

    let event = mockMap;

    let result = await scriptjs.lambdaHandler(event);
    expect(result.length).not.toBe(2);
  });
});
