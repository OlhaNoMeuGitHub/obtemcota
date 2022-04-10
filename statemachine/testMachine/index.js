
var AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });


async function lambdaHandler(inputPayload, stateARN= "arn:aws:states:us-east-1:123456789012:stateMachine:machineMapTest"){
    var params = {
        stateMachineArn: stateARN, /* required */
        input:JSON.stringify(inputPayload),
      };


    var stepfunctions = new AWS.StepFunctions(
        {
            endpoint: "http://127.0.0.1:8083",
            sslEnabled: false,
            s3ForcePathStyle: true,
            signatureVersion: 'v4'
          }

    );
    let result = await stepfunctions.startExecution(params).promise();
    console.log(result);
    return result;

}
module.exports = { lambdaHandler};
