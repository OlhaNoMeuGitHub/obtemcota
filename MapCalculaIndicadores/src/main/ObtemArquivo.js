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



async function obtemArquivoS3 (objectKey, bucket = "mapbucket") {
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

async function obtemResultados(event){

  let result = []
  for (var i = 0; i < event.length; i++) {
    let arquivo = await obtemArquivoS3(event[i].Key);
    result.push(arquivo);
  }
  return result;


}


module.exports = { obtemArquivoS3,obtemResultados };