// import { S3 } from "aws-sdk";

var AWS = require("aws-sdk");



function getSDK(){
  let paransS3 = {}
  if(process.env.AMBIENTE == "development" ){
  paransS3 = {
    endpoint: process.env.ENDPOINTHOST+":9000",
    accessKeyId: process.env.API_KEY,
    secretAccessKey: process.env.API_URL,
    sslEnabled: false,
    s3ForcePathStyle: true,
    signatureVersion: 'v4'
  }
  console.log("AMBIENTE DEV")
  }
  return  s3Aws = new AWS.S3(paransS3);
}

async function uploadS3(objUpload, SdkFunc = getSDK) {
  console.log(process.env.AMBIENTE == "development" )
  s3SDK = SdkFunc()
  jsonString = JSON.stringify(objUpload);
  var date = Date.now();
  keyfile = date + ".json"
  const params = {
    Bucket: process.env.REDUCEBUCKET,
    Key: keyfile,
    Body: jsonString,
  };

  let result = {
    Bucket: process.env.REDUCEBUCKET,
    Key: keyfile
  };
  try {
    const stored = await s3SDK.upload(params).promise();
    console.log(stored);
    return result
  } catch (err) {
    console.log(err);
  }
}


module.exports = { uploadS3 };
