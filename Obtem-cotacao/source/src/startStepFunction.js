
var AWS = require("aws-sdk");


async function startStepFunction(inputPayload){
  console.log(process.env.StateMachineURL)
  
  let paransState = {}
  if(process.env.AMBIENTE == "development" ){
    paransState =      {
      endpoint: process.env.ENDPOINTHOST+":8083",
      sslEnabled: false,
      s3ForcePathStyle: true,
      signatureVersion: 'v4'
    }
  }

  console.log("PARANS " + paransState.endpoint)
  var params = {
      stateMachineArn: process.env.StateMachineURL,
      input:JSON.stringify(inputPayload),
    };
  
    var stepfunctions = new AWS.StepFunctions(paransState);
    let result = await stepfunctions.startExecution(params).promise();
    return result;

}
module.exports = { startStepFunction};
