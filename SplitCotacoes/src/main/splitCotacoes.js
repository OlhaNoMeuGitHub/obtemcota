

const uploadArquivo = require('./uploadArquivo');

function splitAll(event) {
  let novosdados = event.cotacoes;
  let qtdMaps = calculaQtdMaps(novosdados,event.qtdMap);
  arrays = sliptinchunks(novosdados,qtdMaps)
  return arrays;
}

function getqtdMaps(event){
  // calculaQtdMaps(event.cotacoes,event.qtdMap)
  return 2
}

function sliptinchunks(array,qtdMaps){
  ///precisar conseguir fazer quebrar as quantidas de map a ideia é dividr pela qtd de vezes

  const items = array //… your array, filled with values
  const n = Math.ceil(array.length/qtdMaps) //tweak this to add more items per line

const result = new Array(Math.ceil(items.length / n))
  .fill()
  .map(_ => items.splice(0, n))

  return result;

  // if()
  // var arrays = [];
  // for (let i = 0; i < array.length; i += 1) {

  // }
  // arrays.push(...array.slice(0, qtdMaps));
  // arrays.push(...array.slice(qtdMaps, array.le));
  // return arrays

}

const getSizeInBytes = obj => {
  let str = null;
  if (typeof obj === 'string') {
    // If obj is a string, then use it
    str = obj;
  } else {
    // Else, make obj into a string
    str = JSON.stringify(obj);
  }
  // Get the length of the Uint8Array
  const bytes = Buffer.byteLength(str);
  // const bytes = new TextEncoder().encode(str).length;
  return bytes;
};

const logSizeInKilobytes = (obj) => {
  const bytes = getSizeInBytes(obj);
  const kb = (bytes / 1000).toFixed(2);
  return parseFloat(kb)
};

function calculaQtdMaps(array,qtdmaxima,limitsize =200){
  let sizearray = logSizeInKilobytes(array);
  let qtdminomoMaps = sizearray/limitsize
  // let retorno = (array.length < qtdmaxima && array.length > qtdminomoMaps)?array.length:qtdmaxima
  if(array.length < qtdmaxima && array.length > qtdminomoMaps){
      return Math.ceil(array.length);
  }
  if(array.length >  qtdmaxima &&  qtdminomoMaps < qtdmaxima){
    return Math.ceil(qtdmaxima);
  }
  else {
    return Math.ceil(qtdminomoMaps);
  }
  


}

async function gravaMaps(dados){

  let result = []
  for (var i = 0; i < dados.length; i++) {
    let file = await uploadArquivo.uploadS3(dados[i])
    result.push(file)

}
return result
}


module.exports = { sliptinchunks,splitAll,logSizeInKilobytes,calculaQtdMaps,gravaMaps};
