function transformaEmPositivoNegativo(dadosbolsa){
    let Valoresordenados = dadosbolsa.sort(ordenaporData);



}

function geraPositivoeNegativo(dadosbolsa){

    dadosbolsa.map(function(value, index, elements) {
        var next = elements[index+1];
        vclose = value.close > next.close?"Positivo":"Negativo"
        QtdPositivoSeguidos: 
        return {
            close: 
        }
        
        // do something
      });

}

function ordenaporData(a,b){
    if (a.date > b.date) {
        return 1;
      }
      if (a.date < b.date) {
        return -1;
      }
      // a must be equal to b
      return 0;

}

module.exports = { transformaEmPositivoNegativo,ordenaporData };