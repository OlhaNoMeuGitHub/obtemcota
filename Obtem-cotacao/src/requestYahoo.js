const yahooFinance = require("yahoo-finance2").default;

async function GetValoresAtuais(symbol) {
  return await yahooFinance.quote(symbol);
}

async function GetValoresHistorico(symbol,from,to = null ) {
  const query = symbol;
  const queryOptions = to==null?{ period1: from}:{ period1: from, period2: to } ;
  return await yahooFinance.historical(query, queryOptions);

}

async function GetValoresDiasAnteriores(symbol,dias ) {
  let d =new Date();
  d.setDate(d.getDate()-dias)
  d = d.toISOString().split('T')[0]
  const query = symbol;
  const queryOptions = { period1: d } ;
  return await yahooFinance.historical(query, queryOptions);

}

async function GetTodasCotacoesHistorico(symbols,from,to=null ) {
  arrayCotacoes = [];
  for (let symbol of symbols) {
    let resultYahoo = await GetValoresHistorico(symbol,from,to)
    resultYahoo.map((v) =>{v.symbol = symbol},symbol)
    arrayCotacoes.push(...resultYahoo)  
  }
  return arrayCotacoes;

}

async function GetTodasCotacoesDias(symbols,dias) {
  arrayCotacoes = [];
  for (let symbol of symbols) {
    let resultYahoo = await GetValoresDiasAnteriores(symbol,dias)
    resultYahoo.map((v) =>{v.symbol = symbol},symbol)
    arrayCotacoes.push(...resultYahoo)  
  }
  return arrayCotacoes;

}


module.exports = { GetValoresAtuais,GetValoresHistorico,GetValoresDiasAnteriores,GetTodasCotacoesHistorico,GetTodasCotacoesDias };
