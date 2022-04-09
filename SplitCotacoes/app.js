const splitOBJ = require('./src/main/splitCotacoes');
const obtemArquivoOBJ = require('./src/main/ObtemArquivo');

exports.lambdaHandler = async (event) => {
    try {
        console.log("SPLIT COTACOES Iniciado")
        console.log(typeof(event))
        event.cotacoes = await obtemArquivoOBJ.obtemArquivoS3(event.arquivo)
        let result = await splitOBJ.splitAll(event)
        let resultString = JSON.stringify(result);
        console.log("Map quantidade: " + result.length)
        console.log("SPLIT COTACOES Finalizado")
        return result

    } catch (err) {
        console.log(err);
        return err;
    }

};
