const scriptjs = require('./src/main/transformadados');
const uploadArquivo = require('./src/main/uploadArquivo');

exports.lambdaHandler = async (event) => {
    try {
        console.log(typeof(event))
        console.log(Object.keys(event))
        let arquivo = await scriptjs.ExecutaTodosAlgosEmTodosSymbols(event)
        let result = uploadArquivo.uploadS3(arquivo)
        // let resulString = JSON.stringify(result)

        return result;

    } catch (err) {
        console.log(err);
        return err;
    }

};
