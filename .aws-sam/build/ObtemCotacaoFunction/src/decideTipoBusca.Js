const requestYahoo = require('./requestYahoo');


async function  chamabusca(event){
    if(event.tipoBusca == "historico") {
        return await requestYahoo.GetTodasCotacoesHistorico(event.symbols,event.from,event.to)
    }
    else if(event.tipoBusca == "dias") {
        return await requestYahoo.GetTodasCotacoesDias(event.symbols,event.dias)
    }
    else return []

}


module.exports = { chamabusca };