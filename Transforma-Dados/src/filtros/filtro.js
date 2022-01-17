

   const minhacondicao =  {condicao: {
        TipoDado:"MetricasCotacoes",
        symbol:"ITUB4",
        nomeParametro:"RSIclose14",
        operador:"maior",
        valor:15
    }}
 
function aplicaFiltro(){
    

}
function validaRegra(regra){

}

function validaCondicao(condicaoObj,dado){
    if(condicaoObj.condicao.TipoDado == "MetricasCotacoes")
    {
        dado
    }
    if(condicaoObj.condicao.TipoDado == "SerieTemporal")

}

function chamaOperador(operador,valorA,valorB){
    switch (operador) {
        case 'Maior':{return maior(operador,valorA,valorB);}
        case 'Menor':{return menor(operador,valorA,valorB) }
        case 'Entre':{return entre(operador,valorA,valorB) }    
      }

}

function menor(){}
function maior(){}
function entre(){}
