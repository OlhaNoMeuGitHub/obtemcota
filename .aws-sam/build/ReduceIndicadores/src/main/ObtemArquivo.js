// import { S3 } from "aws-sdk";

var AWS = require("aws-sdk");
AWS.config.update({ region: "us-east-1" });

const s3Aws = new AWS.S3({
  endpoint: "http://host.docker.internal:9000",
  accessKeyId: "teste",
  secretAccessKey: "teste",
  sslEnabled: false,
  s3ForcePathStyle: true,
  signatureVersion: 'v4'
});


async function obtemArquivoS3 (objectKey,s3SDK =  s3Aws, bucket = "teste") {
  try {
    const params = {
      Bucket: bucket,
      Key: objectKey 
    }

    const data = await s3Aws.getObject(params).promise();

    jsonRetorno=  JSON.parse(data.Body.toString('utf-8'));
    return jsonRetorno;
  } catch (e) {
    throw new Error(`Could not retrieve file from S3: ${e.message}`)
  }
}


module.exports = { obtemArquivoS3 };
