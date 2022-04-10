const splitOBJ = require('./src/main/splitCotacoes');
const obtemArquivoOBJ = require('./src/main/ObtemArquivo');

exports.lambdaHandler = async (event) => {
    try {
        console.log("Reduce Iniciado")
        console.log(JSON.stringify(event))
        console.log("Reduce Finalizado")
        return event

    } catch (err) {
        console.log(err);
        return err;
    }

};
