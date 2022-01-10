function execute(dadosbolsa,paranMedia){
    return CriaMetricaMedia(dadosbolsa,paranMedia)
  }

function CriaMetricaMedia(dadosbolsa,paranMedia){

    let resultCalcMedia = CalculaMedia(dadosbolsa.dadosCotacoes,paranMedia);
    dadosbolsa.MetricasGerais["media"+paranMedia] = resultCalcMedia
    return dadosbolsa


}

function CalculaMedia(arr,paranMedia){
    contaMedia = arr.reduce((t, n) => n[paranMedia]+t, 0)/arr.length;
    return contaMedia;
}



module.exports = { execute,CalculaMedia};