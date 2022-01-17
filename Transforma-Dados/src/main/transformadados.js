const positivoNegativo = require("../AlgoritimosDados/PositivoNegativo/PositivoNegativo");
const media = require("../AlgoritimosDados/Estatisticos/media");
const maior = require("../AlgoritimosDados/Estatisticos/maior");
const RSI = require("../AlgoritimosDados/SerieTemporal/rsi");
const mediaMovel = require("../AlgoritimosDados/SerieTemporal/mediaMovel");


const buscaDados = require("./buscadados");

function executeAll(AlgoElements, dadosbolsa) {
  let novosdados = dadosbolsa;
  for (var i = 0; i < AlgoElements.length; i++) {
    novosdados = execute(AlgoElements[i], novosdados);
  }
  return novosdados;
}

async function ExecutaTodosAlgosEmTodosSymbols(AlgoElements, symbolsData) {
  let dados = await buscaDados.obtemDados(symbolsData);
  let result = [];
  for (var i = 0; i < dados.length; i++) {
    result.push(executeAll(AlgoElements, dados[i]));
  }
  return result;
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
