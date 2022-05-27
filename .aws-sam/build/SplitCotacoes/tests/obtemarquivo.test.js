const scriptjs = require("../src/main/ObtemArquivo");
const valoresItubCotacoes = require("./payload/CotacoesMetricas.json");
require('dotenv').config({path:__dirname+'/./../../.env'})

describe("vailida transforma dados", function () {

  it("Testa obtem arquivo ", async () => {
    jest.setTimeout(30000);
    let result = await scriptjs.obtemArquivoS3("1652559124004.json");
    console.log(result)
    expect(result.Nome).toBe("teste");
  });

  it('Valida ambiente', async () => {
            
    console.log(process.env.MAPBUCKET)
    expect(process.env.MAPBUCKET).toBe("mapbucket");
    expect(process.env.bucketCotacoes).toBe("cotacoesmapreduce");
    expect(process.env.Ambiente).toBe("development");
    expect(process.env.ENDPOINTHOST).toBe("http://127.0.0.1");
})

  
  it("Testa obter parans ", async () => {
    jest.setTimeout(30000);
    let result =  scriptjs.montaparans("teste");
    expect(result.Bucket).toBe("cotacoesmapreduce");
  });

});
