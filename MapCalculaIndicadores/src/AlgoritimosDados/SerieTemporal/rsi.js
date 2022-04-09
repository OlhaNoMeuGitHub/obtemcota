const RSI = require('technicalindicators').RSI;


function execute(dadosbolsa,paran,numLancamentos){
    return CriaMetricaRSI(dadosbolsa,paran,numLancamentos)
  }

function CriaMetricaRSI(dadosbolsa,paran,numLancamentos){

    for (var i = 0; i < numLancamentos-1 ; i++) {
        dadosbolsa.dadosCotacoes[i]["RSI"+paran+numLancamentos]=0;
    }
    let resultRSI = CalculaRSI(dadosbolsa.dadosCotacoes,paran,numLancamentos)
    for (var i = numLancamentos; i < dadosbolsa.dadosCotacoes.length ; i++) {
        dadosbolsa.dadosCotacoes[i]["RSI"+paran+numLancamentos] = resultRSI[i - numLancamentos]
    }
    return dadosbolsa


}


function CalculaRSI(arr,paran,numLancamentos){
    arrValores = arr.map((n) => {return n[paran]})
    var inputRSI = {
        values : arrValores,
        period : numLancamentos
      };
    let resultRSI = RSI.calculate(inputRSI)
    return resultRSI;
}



module.exports = { execute,CalculaRSI,CriaMetricaRSI};