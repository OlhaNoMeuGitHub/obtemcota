function execute(dadosbolsa,paranMedia,numLancamentos){
    return CriaMetricaMediaMovel(dadosbolsa,paranMedia,numLancamentos)
  }

function CriaMetricaMediaMovel(dadosbolsa,paranMedia,numLancamentos){

    let primeirosValore = dadosbolsa.dadosCotacoes.slice(0, numLancamentos)
    let mediaPrimeira = CalculaMedia(primeirosValore,"close")
    let mediaMovel = mediaPrimeira;
    for (var i = 0; i < numLancamentos-1 ; i++) {
        dadosbolsa.dadosCotacoes[i]["mediaMovel"+paranMedia+numLancamentos]=0;
    }
    for (var i = numLancamentos; i < dadosbolsa.dadosCotacoes.length ; i++) {
        mediaMovel = CalculaProximaMediaMovel(dadosbolsa.dadosCotacoes,i,numLancamentos,mediaMovel,paranMedia);
        dadosbolsa.dadosCotacoes[i]["mediaMovel"+paranMedia+numLancamentos] = mediaMovel
    }
    return dadosbolsa


}

function CalculaProximaMediaMovel(arr,indice,numLancamentos,mediaMovelAnterior,paranMedia){
    let primeiroValor = arr[indice - numLancamentos][paranMedia];
    let valorAtual = arr[indice][paranMedia];
    let novaMediaMovel = ((mediaMovelAnterior*numLancamentos) - primeiroValor + valorAtual)/numLancamentos;
    return novaMediaMovel;


}

function CalculaMedia(arr,paranMedia){
    contaMedia = arr.reduce((t, n) => n[paranMedia]+t, 0)/arr.length;
    return contaMedia;
}



module.exports = { execute,CalculaMedia,CalculaProximaMediaMovel,CriaMetricaMediaMovel};