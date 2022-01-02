function transformaEmPositivoNegativo(dadosbolsa) {
  let Valoresordenados = dadosbolsa.sort(ordenaporData);
  let result = geraPositivoeNegativo(Valoresordenados);
  return result;
}

function geraPositivoeNegativo(dadosbolsa) {
  let QtdPositivoSeguidos = 0;
  let QtdNegativoSeguidos = 0;
  let vclose = "";

  //vai até pnultimo valor pois não temos o proximo dia
  for (var i = 1; i < dadosbolsa.length ; i++) {
    if (dadosbolsa[i].close > dadosbolsa[i-1].close) {
      QtdNegativoSeguidos = 0;
      QtdPositivoSeguidos = QtdPositivoSeguidos + 1;
      vclose = "P"
    } else {
      QtdNegativoSeguidos = QtdNegativoSeguidos + 1;
      QtdPositivoSeguidos = 0;
      vclose = "N"
    }
    dadosbolsa[i].vclose = vclose
    dadosbolsa[i].QtdNegativoSeguidos = QtdNegativoSeguidos,
    dadosbolsa[i].QtdPositivoSeguidos = QtdPositivoSeguidos
  }
  dadosbolsa[0].vclose = ""
  dadosbolsa[0].QtdNegativoSeguidos = 0,
  dadosbolsa[0].QtdPositivoSeguidos = 0

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

module.exports = { transformaEmPositivoNegativo, ordenaporData,geraPositivoeNegativo };
