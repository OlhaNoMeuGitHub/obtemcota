// import { S3 } from "aws-sdk";

var AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const s3Aws = new AWS.S3({
  endpoint: "http://127.0.0.1:9000",
  accessKeyId: "AKIAVUGMUKIGD7N2QOVR",
  secretAccessKey: "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",
  sslEnabled: false,
  s3ForcePathStyle: true,
  signatureVersion: 'v4'
});

async function uploadS3(objUpload, s3SDK = s3Aws) {
  jsonString = JSON.stringify(objUpload);
  var date = Date.now();
  keyfile = date + ".json"
  const params = {
    Bucket: "teste",
    Key: keyfile,
    Body: jsonString,
  };
  try {
    const stored = await s3SDK.upload(params).promise();
    console.log(stored);
    return params
  } catch (err) {
    console.log(err);
  }
}


module.exports = { uploadS3 };
