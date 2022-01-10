function execute(dadosbolsa,paranMedia){
    return CriaMetricaMedia(dadosbolsa,paranMedia)
  }

function CriaMetricaMedia(dadosbolsa,paran){

    let resultCalcMaior = CalculaMaior(dadosbolsa.dadosCotacoes,paran);
    dadosbolsa.MetricasGerais["maior"+paran] = resultCalcMaior
    return dadosbolsa


}

function CalculaMaior(arr,paran){
    contaMaior = arr.reduce((t, n) => {
        
        return n[paran]>t?n[paran]:t
    
    }, 0);
    return contaMaior;
}



module.exports = { execute,CalculaMaior};