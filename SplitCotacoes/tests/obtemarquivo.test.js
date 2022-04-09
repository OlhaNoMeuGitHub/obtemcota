const scriptjs = require("../src/main/ObtemArquivo");
const valoresItubCotacoes = require("./payload/CotacoesMetricas.json");

describe("vailida transforma dados", function () {

  it("Testa obtem arquivo ", async () => {
    jest.setTimeout(30000);
    let result = await scriptjs.obtemArquivoS3("1648239833160.json",2);
    expect(result[0].symbol).toBe("ITUB4.SA");
  });
});
