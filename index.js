//criando uma função para calcular o ranker
function nivelDaRankeada(vitorias, derrotas){
    let saldoDasVitorias = vitorias - derrotas
    //calculando o nivel do rank
    let ranker 
    
    //! estrutura de decisao
   if (saldoDasVitorias < 10){ 
        ranker = " ferro "   
    } 
    else if (saldoDasVitorias >= 11 && saldoDasVitorias <= 20){
        ranker = "bronze"
    }
    else if (saldoDasVitorias >= 21 && saldoDasVitorias <= 50){
        ranker = "prata"
    }
    else if (saldoDasVitorias >= 51 && saldoDasVitorias <= 80){
        ranker = "ouro"
    }
    else if (saldoDasVitorias >= 81 && saldoDasVitorias <= 90){
        ranker = "diamante"
    }
    else if (saldoDasVitorias >= 91 && saldoDasVitorias <= 100){
        ranker = "lendario"
    } 
    else {ranker = "imortal"
   
    }
    return `O Herói tem um saldo de ${saldoDasVitorias} está no nível de ${ranker}!`;

}

let vitorias = 11
let derrotas = 20
  
const result = nivelDaRankeada (vitorias, derrotas)

console.log(result)