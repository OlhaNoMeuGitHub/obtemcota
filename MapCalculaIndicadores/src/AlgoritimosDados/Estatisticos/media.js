function execute(dadosbolsa,paranMedia){
    return CriaMetricaMedia(dadosbolsa,paranMedia)
  }

function CriaMetricaMedia(dadosbolsa,paranMedia){

    let resultCalcMedia = CalculaMedia(dadosbolsa.dadosCotacoes,paranMedia);
    for (var i = 0; i < dadosbolsa.dadosCotacoes.length; i++) {
        dadosbolsa.dadosCotacoes[i]["media"+paranMedia] = resultCalcMedia
      }
    dadosbolsa.MetricasGerais["media"+paranMedia] = resultCalcMedia
    return dadosbolsa


}

function CalculaMedia(arr,paranMedia){
    contaMedia = arr.reduce((t, n) => n[paranMedia]+t, 0)/arr.length;
    return contaMedia;
}



module.exports = { execute,CalculaMedia};