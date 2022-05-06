const scriptjs = require("../../src/filtros/filtro");
const valoresItub = require("../payload/CotacoesMetricasProcessadas.json");

describe("vailida filtro dados", function () {
  it("valida filtro Maior ", async () => {

    const minhacondicao =  {condicao: {
        TipoDado:"MetricasCotacoes",
        symbol:"ITUB4.SA",
        nomeParametro:"RSIclose14",
        operador:"Maior",
        valor:15
    }}

    let testvaloresItub = valoresItub[0];
 

    let response = await scriptjs.validaCondicao(minhacondicao,valoresItub);
    expect(response).toBe(true);
  });

  it("valida get regras  ", async () => {

    let response = await scriptjs.getRegras()
    expect(response[1].condicoes[0].condicao.valor).toBe(5);
  });


  it("valida filtro Menor ", async () => {

    const minhacondicao =  {condicao: {
        TipoDado:"MetricasCotacoes",
        symbol:"ITUB4.SA",
        nomeParametro:"mediaMovelclose10",
        operador:"Menor",
        valor:50
    }}

    let testvaloresItub = valoresItub[0];
 

    let response = await scriptjs.validaCondicao(minhacondicao,valoresItub);
    expect(response).toBe(true);
  });

  it("valida filtro Menor com object ", async () => {

    const minhacondicao =  {condicao: {
        TipoDado:"MetricasCotacoes",
        symbol:"ITUB4.SA",
        nomeParametro:"mediaMovelclose10",
        operador:"Menor",
        valor:{parametro:"RSIclose14"}
    }}

    let testvaloresItub = valoresItub[0];
 

    let response = await scriptjs.validaCondicao(minhacondicao,valoresItub);
    expect(response).toBe(true);
  });

  it("valida filtro Entre ", async () => {

    const minhacondicao =  {condicao: {
        TipoDado:"MetricasCotacoes",
        symbol:"ITUB4.SA",
        nomeParametro:"RSIclose14",
        operador:"entre",
        valor:[15,100]
    }}


    let response = await scriptjs.validaCondicao(minhacondicao,valoresItub);
    expect(response).toBe(true);
  });
});

describe("vailida regra dados", function () {
  
  it("valida regra true ", async () => {

    let minharegra =  {
      condicoes:[{condicao: {
          TipoDado:"MetricasCotacoes",
          symbol:"ITUB4.SA",
          nomeParametro:"RSIclose14",
          operador:"Maior",
          valor:15
      }},{condicao: {
          TipoDado:"MetricasCotacoes",
          symbol:"ITUB4.SA",
          nomeParametro:"mediaMovelclose10",
          operador:"menor",
          valor:100
      }}],
      nomeRegra:"RSI 14 maior que 15 e Media Movel menor que 100"

  }


    let response = await scriptjs.validaRegra(minharegra,valoresItub);
    expect(response).toBe(true);
  });

  
  it("valida regras validas ", async () => {

    let minharegras = [ {
      condicoes:[{condicao: {
          TipoDado:"MetricasCotacoes",
          symbol:"ITUB4.SA",
          nomeParametro:"RSIclose14",
          operador:"Maior",
          valor:15
      }},{condicao: {
          TipoDado:"MetricasCotacoes",
          symbol:"ITUB4.SA",
          nomeParametro:"mediaMovelclose10",
          operador:"menor",
          valor:100
      }}],
      nomeRegra:"RSI 14 maior que 15 e Media Movel menor que 100"
    
  },
  {
    condicoes:[{condicao: {
        TipoDado:"MetricasCotacoes",
        symbol:"ITUB4.SA",
        nomeParametro:"RSIclose14",
        operador:"Maior",
        valor:15
    }},{condicao: {
        TipoDado:"MetricasCotacoes",
        symbol:"ITUB4.SA",
        nomeParametro:"mediaMovelclose10",
        operador:"menor",
        valor:5
    }}],
    nomeRegra:"RSI 14 maior que 15 e Media Movel menor que 5"
  
},
{
  condicoes:[{condicao: {
      TipoDado:"MetricasCotacoes",
      symbol:"ITUB4.SA",
      nomeParametro:"RSIclose14",
      operador:"Maior",
      valor:30
  }}],
  nomeRegra:"RSI14 maior que 30 "

}

]


    let response = await scriptjs.RegrasValidas(minharegras,valoresItub);
    console.log(response);
    expect(response.length).toBe(2);
  });
});
