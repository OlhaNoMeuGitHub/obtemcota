function execute(dadosbolsa){
  return transformaEmPositivoNegativo(dadosbolsa)
}

function transformaEmPositivoNegativo(dadosbolsa) {
  dadosbolsa.dadosCotacoes = dadosbolsa.dadosCotacoes.sort(ordenaporData);
  let result = geraPositivoeNegativo(dadosbolsa);
  return result;
}

function geraPositivoeNegativo(dadosbolsa) {
  let QtdPositivoSeguidos = 1;
  let QtdNegativoSeguidos = 1;
  let vclose = "";

  //vai até pnultimo valor pois não temos o proximo dia
  for (var i = 1; i < dadosbolsa.dadosCotacoes.length ; i++) {
    if (dadosbolsa.dadosCotacoes[i].close > dadosbolsa.dadosCotacoes[i-1].close) {
      QtdNegativoSeguidos = 1;
      QtdPositivoSeguidos = QtdPositivoSeguidos + 1;
      vclose = "P"
    } else {
      QtdNegativoSeguidos = QtdNegativoSeguidos + 1;
      QtdPositivoSeguidos = 1;
      vclose = "N"
    }
    dadosbolsa.dadosCotacoes[i].vclose = vclose
    dadosbolsa.dadosCotacoes[i].QtdNegativoSeguidos = QtdNegativoSeguidos,
    dadosbolsa.dadosCotacoes[i].QtdPositivoSeguidos = QtdPositivoSeguidos
  }
  dadosbolsa.dadosCotacoes[0].vclose = ""
  dadosbolsa.dadosCotacoes[0].QtdNegativoSeguidos = 1,
  dadosbolsa.dadosCotacoes[0].QtdPositivoSeguidos = 1

  return dadosbolsa;
}

function ordenaporData(a, b) {
  if (a.date > b.date) {
    return 1;
  }
  if (a.date < b.date) {
    return -1;
  }
  // a must be equal to b
  return 0;
}

module.exports = { transformaEmPositivoNegativo, ordenaporData,geraPositivoeNegativo ,execute};
