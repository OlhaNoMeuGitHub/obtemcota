const scriptjs = require('./src/main/transformadados');
const obtemArquivo = require('./src/main/ObtemArquivo');
const uploadArquivo = require('./src/main/uploadArquivo');
const filtros = require('./src/filtros/filtro');

exports.lambdaHandler = async (event) => {
    try {
        console.log("MAP Iniciado")
        console.log(process.env.API_KEY)
        console.log(process.env.NODE_ENV)
        
        let dados = await obtemArquivo.obtemArquivoS3(event.Key)
        let cotacoesProcessadas = await scriptjs.ExecutaTodosAlgosEmTodosSymbols(dados)
        let regras = await filtros.getRegras()
        let arquivo = filtros.RegrasValidasSymbol(regras,cotacoesProcessadas)
        console.log(arquivo)
        let result = await uploadArquivo.uploadS3(arquivo)
        // let resulString = JSON.stringify(result)

        return result;

    } catch (err) {
        console.log(err);
        return err;
    }

};
