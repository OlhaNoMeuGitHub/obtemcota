const splitOBJ = require('./src/main/splitCotacoes');
const uploadArquivo = require('./src/main/uploadArquivo');
const obtemArquivo = require('./src/main/ObtemArquivo');

exports.lambdaHandler = async (event) => {
    try {
        console.log("Reduce Iniciado")
        console.log(JSON.stringify(event))
        console.log("Reduce Finalizado")
        let result = await obtemArquivo.obtemResultados(event)
        await uploadArquivo.uploadS3(result);
        return result

    } catch (err) {
        console.log(err);
        return err;
    }

};
