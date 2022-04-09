const positivoNegativo = require("../AlgoritimosDados/PositivoNegativo/PositivoNegativo");
const media = require("../AlgoritimosDados/Estatisticos/media");
const maior = require("../AlgoritimosDados/Estatisticos/maior");
const RSI = require("../AlgoritimosDados/SerieTemporal/rsi");
const mediaMovel = require("../AlgoritimosDados/SerieTemporal/mediaMovel");



function executeAll(AlgoElements, dadosbolsa) {
  let novosdados = dadosbolsa;
  for (var i = 0; i < AlgoElements.length; i++) {
    novosdados = execute(AlgoElements[i], novosdados);
  }
  return novosdados;
}

async function ExecutaTodosAlgosEmTodosSymbols(symbolsData) {
  let AlgoElements = getAlgoelements();
  let result = [];
  for (var i = 0; i < symbolsData.length; i++) {
    result.push(executeAll(AlgoElements, symbolsData[i]));
  }
  return result;
}

function getAlgoelements()
{
  return [{algo:"PositivoNegativo"},
  {algo:"Maior",parans:["QtdNegativoSeguidos"]},
  {algo:"Maior",parans:["close"]},
  {algo:"Media",parans:["QtdNegativoSeguidos"]},
  {algo:"Media",parans:["close"]},
  {algo:"RSI",parans:["close",14]},
  {algo:"MediaMovel",parans:["close",10]},
]
}



function execute(type, dados) {
  switch (type.algo) {
    case 'PositivoNegativo':{return positivoNegativo.execute(dados);}
    case 'Media':{return media.execute(dados,...type.parans) }
    case 'Maior':{return maior.execute(dados,...type.parans) }
    case 'RSI':{return RSI.execute(dados,...type.parans) }
    case 'MediaMovel':{return mediaMovel.execute(dados,...type.parans) }

  }

}

module.exports = { execute, executeAll, ExecutaTodosAlgosEmTodosSymbols };
