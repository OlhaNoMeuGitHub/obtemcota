const requestYahoo = require('./src/requestYahoo');

exports.lambdaHandler = async (event) => {
    try {
        console.log(event)
        let resultCotacoes = await  requestYahoo.GetTodasCotacoesHistorico(event.symbols,event.from,event.to)
  

        return resultCotacoes
        
    } catch (err) {
        console.log(err);
        return err;
    }

};



