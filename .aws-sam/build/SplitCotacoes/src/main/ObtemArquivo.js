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
  console.log("AMBIENTE DEV");
  console.log(paransS3)
  }
  return  s3Aws = new AWS.S3(paransS3);
}


async function obtemArquivoS3 (objectKey, SdkFunc = getSDK, bucket = "cotacoesmapreduce") {
  try {
    const params = montaparans(objectKey) ;
    console.log(params)
    console.log(process.env.AMBIENTE == "development" )
    s3SDK = SdkFunc();
    const data = await s3Aws.getObject(params).promise();

    jsonRetorno=  JSON.parse(data.Body.toString('utf-8'));
    return jsonRetorno;
  } catch (e) {
    throw new Error(`Could not retrieve file from S3: ${e.message}`)
  }
}

function montaparans(objectKey){
  try{
    let bucket = process.env.bucketCotacoes
    console.log("teste " + bucket)
    if(bucket == undefined) {throw new Error("Nao foi possivel obter variavel de ambiente")}
    const params = {
      Bucket: bucket,
      Key: objectKey 
    }
    return params;

  } catch (e) {
    throw new Error(`Erro ao obter parametro: ${e}`)
  }


}

module.exports = { obtemArquivoS3 ,montaparans};
