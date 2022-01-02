const positivoNegativo = require('../AlgoritimosDados/PositivoNegativo/PositivoNegativo');



function executeAll(AlgoElements,dadosbolsa){
    let novosdados = dadosbolsa;
    for (var i = 0; i < AlgoElements.length ; i++) {
        novosdados = execute(AlgoElements[i],novosdados);
    }
    return novosdados;
}

function execute(type,dados){
    if (type === 'PositivoNegativo'){
        return  positivoNegativo.execute(dados);
    }
}


module.exports = { execute, executeAll };
