// import { S3 } from "aws-sdk";

var AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });



let paransS3 = {}
if(process.env.NODE_ENV == "development" ){
paransS3 = {
  endpoint: "http://host.docker.internal:9000",
  accessKeyId: process.env.API_KEY,
  secretAccessKey: process.env.API_URL,
  sslEnabled: false,
  s3ForcePathStyle: true,
  signatureVersion: 'v4'
}
}
const s3Aws = new AWS.S3(paransS3);

async function uploadS3(objUpload, s3SDK = s3Aws) {
  jsonString = JSON.stringify(objUpload);
  var date = Date.now();
  keyfile = date + ".json"
  const params = {
    Bucket: "mapbucket",
    Key: keyfile,
    Body: jsonString,
  };

  let result = {
    Bucket: "mapbucket",
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
