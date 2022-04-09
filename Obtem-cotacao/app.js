// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
let response;
const tipobusca = require('./src/decideTipoBusca');
const uploads3 = require('./src/uploadArquivo');
const  StepFunctionObj = require('./src/startStepFunction');


/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html 
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * 
 */
exports.lambdaHandler = async (event, context) => {
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

    return response
};



