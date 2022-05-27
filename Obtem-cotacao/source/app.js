const uploads3 = require('./src/uploadArquivo');
const  StepFunctionObj = require('./src/startStepFunction');
const tipobusca = require('./src/decideTipoBusca');

exports.lambdaHandler = async (event) => {
    try {
        console.log(event)
        let resultCotacoes = await tipobusca.chamabusca(event)
        let resultMontado = tipobusca.montaRetorno(resultCotacoes)
        let objS3 = await uploads3.uploadS3(resultMontado)
        eventStep = {
            arquivo: objS3.Key,
            qtdMap: 10
        }
        await StepFunctionObj.startStepFunction(eventStep)

        return resultMontado
        
    } catch (err) {
        console.log(err);
        return err;
    }

};



