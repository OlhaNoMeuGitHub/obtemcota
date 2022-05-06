const scriptjs = require("../app");
const handmock = require("./payload/cotacoesGrande.json");

describe("vailida transforma dados", function () {
  it("Executa Algos em todos symbols ", async () => {
    jest.setTimeout(30000);

    let event = [{"Bucket":"mapbucket","Key":"1650569342499.json"},{"Bucket":"mapbucket","Key":"1650569342676.json"},{"Bucket":"mapbucket","Key":"1650569342532.json"},{"Bucket":"mapbucket","Key":"1650569342562.json"},{"Bucket":"mapbucket","Key":"1650569343133.json"},{"Bucket":"mapbucket","Key":"1650569347808.json"},{"Bucket":"mapbucket","Key":"1650569347813.json"},{"Bucket":"mapbucket","Key":"1650569348276.json"}]
    

    let result = await scriptjs.lambdaHandler(event);
    expect(result.length).toBe(2);
  });
});
