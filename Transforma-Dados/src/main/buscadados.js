const AWS = require("aws-sdk");

async function obtemDados(reqCampos) {
  const lambda = new AWS.Lambda({
    endpoint: "http://127.0.0.1:3001",
    sslEnabled: false,
    signature_version: "UNSIGNED",
    region: "us-east-2",
  });
  
  var params = {
    FunctionName: "ObtemCotacaoFunction", // the lambda function we are going to invoke
    InvocationType: "RequestResponse",
    Payload: JSON.stringify(reqCampos),
  };

  let lambdaResult = await lambda.invoke(params).promise();
  obJson = JSON.parse(lambdaResult.Payload);
  newObjs = []
  for (var i = 0; i < obJson.length; i++) {
    newObjs.push({
      dadosCotacoes:obJson[i],
      MetricasGerais: {}
    })
  }
  return newObjs;
}

module.exports = { obtemDados };
