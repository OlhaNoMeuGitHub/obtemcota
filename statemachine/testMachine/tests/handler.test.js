const scriptjs = require("../index");
const handmock = require("./payload/CotacoesMetricas.json");
const mockMap = require("./payload/MapCotacoes");



describe("vailida transforma dados", function () {
  it("Executa State Split ", async () => {
    jest.setTimeout(30000);

    let event = handmock;

    let result = await scriptjs.lambdaHandler(event);
    expect(result.length).toBe(2);
  });

  it("Executa State Map ", async () => {
    jest.setTimeout(30000);

    let event = mockMap;

    let result = await scriptjs.lambdaHandler(event);
    expect(result.length).toBe(2);
  });
});
