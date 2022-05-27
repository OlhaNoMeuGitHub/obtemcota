const regras = require("./regras.json");
const obterArquivo = require("../main/ObtemArquivo");

const minhacondicao = {
  condicao: {
    TipoDado: "MetricasCotacoes",
    symbol: "ITUB4.SA",
    nomeParametro: "RSIclose14",
    operador: "maior",
    valor: 15,
  },
};

const minharegra = {
  condicoes: [
    {
      condicao: {
        TipoDado: "MetricasCotacoes",
        symbol: "ITUB4.SA",
        nomeParametro: "RSIclose14",
        operador: "Maior",
        valor: 15,
      },
    },
    {
      condicao: {
        TipoDado: "MetricasCotacoes",
        symbol: "ITUB4.SA",
        nomeParametro: "MediaMovelclose10",
        operador: "menor",
        valor: 100,
      },
    },
  ],
  nomeRegra: "RSI 14 maior que 15 e Media Movel menor que 100",
};

function RegrasValidas(regras, dados) {
  let nomesRegrasValidas = [];
  for (var i = 0; i < regras.length; i++) {
    if (validaRegra(regras[i], dados)) {
      nomesRegrasValidas.push(dados.symbol + " => " + regras[i].nomeRegra);
    }
  }
  return nomesRegrasValidas;
}

function RegrasValidasSymbol(regras, dados) {
    let nomesRegrasValidas = [];
    for (var i = 0; i < regras.length; i++) {
        for (var j = 0; j < dados.length; j++) {
      if (validaRegra(regras[i], dados)) {
        nomesRegrasValidas.push(dados[j].symbol + " => " + regras[i].nomeRegra);
      }
    }
    }
    return nomesRegrasValidas;
  }

function validaRegra(regra, dados) {
  for (var i = 0; i < regra.condicoes.length; i++) {
    if (!validaCondicao(regra.condicoes[i], dados)) {
      return false;
    }
  }
  return true;
}

function validaCondicao(condicaoObj, dado) {
  let cotacoesSymbol = [];
  for (var i = 0; i < dado.length; i++) {
    if (
      dado[i].symbol == condicaoObj.condicao.symbol ||
      "*" == condicaoObj.condicao.symbol
    ) {
      cotacoesSymbol = dado[i].dadosCotacoes;
      break;
    }
  }
  let ultimovalor = cotacoesSymbol[cotacoesSymbol.length - 1];
  let valorParametro = ultimovalor[condicaoObj.condicao.nomeParametro];
  let valorComparacao =
    typeof condicaoObj.condicao.valor == "object" &&
    !Array.isArray(condicaoObj.condicao.valor)
      ? ultimovalor[condicaoObj.condicao.valor.parametro]
      : condicaoObj.condicao.valor;
  let resultado = chamaOperador(
    condicaoObj.condicao.operador,
    valorParametro,
    valorComparacao
  );
  return resultado;
}

function chamaOperador(operador, valorA, valorB) {
  switch (operador.toLowerCase()) {
    case "maior": {
      return maior(valorA, valorB);
    }
    case "menor": {
      return menor(valorA, valorB);
    }
    case "entre": {
      return entre(valorA, valorB);
    }
  }
}

function menor(valorA, valorB) {
  return valorA < valorB;
}
function maior(valorA, valorB) {
  return valorA > valorB;
}
function entre(valorA, valorB) {
  return valorA > valorB[0] && valorA < valorB[1];
}

async function getRegras() {
  return await obterArquivo.obtemArquivoS3("regras.json","configbucketmapreduce")
}

module.exports = {
  validaCondicao,
  maior,
  chamaOperador,
  validaRegra,
  RegrasValidas,
  RegrasValidasSymbol,
  getRegras};
