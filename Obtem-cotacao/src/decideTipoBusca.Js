const requestYahoo = require('./requestYahoo');


async function  chamabusca(event){
    let retorno = []
    if(event.tipoBusca == "historico") {
        retorno=  await requestYahoo.GetTodasCotacoesHistorico(event.symbols,event.from,event.to)
    }
    else if(event.tipoBusca == "dias") {
        retorno = await requestYahoo.GetTodasCotacoesDias(event.symbols,event.dias)
    }
    return retorno

}

function montaRetorno(obJson){
    newObjs = [];
    for (var i = 0; i < obJson.length; i++) {
        newObjs.push({
          symbol:obJson[i].symbol,
          dadosCotacoes:obJson[i],
          MetricasGerais: {}
        })
      }
    return newObjs;
}


module.exports = { chamabusca,montaRetorno };