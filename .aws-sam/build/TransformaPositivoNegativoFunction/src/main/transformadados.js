const positivoNegativo = require('../AlgoritimosDados/PositivoNegativo/PositivoNegativo');
const buscaDados = require('./buscadados');


function executeAll(AlgoElements,dadosbolsa){
    let novosdados = dadosbolsa;
    for (var i = 0; i < AlgoElements.length ; i++) {
        novosdados = execute(AlgoElements[i],novosdados);
    }
    return novosdados;
}

async function ExecutaTodosAlgosEmTodosSymbols(AlgoElements,symbolsData){
    
    let dados = await buscaDados.obtemDados(symbolsData)
    let result = []
    for (var i = 0; i < dados.length ; i++) {
        result.push(executeAll(AlgoElements,dados[i]));
    }
    return result;

}

function execute(type,dados){
    if (type === 'PositivoNegativo'){
        return  positivoNegativo.execute(dados);
    }
}


module.exports = { execute, executeAll,ExecutaTodosAlgosEmTodosSymbols };
