function execute(dadosbolsa,paranMedia){
    return CriaMetricaMediaMovel(dadosbolsa,paranMedia)
  }

function CriaMetricaMediaMovel(dadosbolsa,paranMedia,numLancamentos){


    for (var i = numLancamentos; i < dadosbolsa.dadosCotacoes.length ; i++) {


    }
    let resultCalcMedia = CalculaMedia(dadosbolsa.dadosCotacoes,paranMedia);
    dadosbolsa.MetricasGerais["media"+paranMedia] = resultCalcMedia
    return dadosbolsa


}

function CalculaProximaMediaMovel(arr,indice,numLancamentos,mediaMovelAnterior,paranMedia){
    let primeiroValor = arr[numLancamentos - indice][paranMedia];
    let valorAtual = arr[indice][paranMedia];
    let novaMediaMovel = ((mediaMovelAnterior*numLancamentos) - primeiroValor + valorAtual)/numLancamentos;
    return novaMediaMovel;


}

function CalculaMedia(arr,paranMedia){
    contaMedia = arr.reduce((t, n) => n[paranMedia]+t, 0)/arr.length;
    return contaMedia;
}



module.exports = { execute,CalculaMedia};