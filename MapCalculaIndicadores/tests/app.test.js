const scriptjs = require("../app");
const handmock = require("./payload/CotacoesemS3.json");

describe("vailida transforma dados", function () {
  it("Executa Algos em todos symbols ", async () => {
    jest.setTimeout(30000);

    let event = handmock;

    let result = await scriptjs.lambdaHandler(event);
    expect(result.length).toBe(2);
  });
});
