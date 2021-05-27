/**
 * Sistemas de gastos familiar
 * 
 * criar um objeto que possuirá 2 propriedades, ambas do tipo array:
    * Receitas: []
    * Despesas: []

Agora crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo
 */

let cashFlow = {
        receitas: [2000, 500, 600],
        despesas: [1500, 360, 222]
}



function sumCashFlow(receitas, despesas){

    let sumReceitas = 0
    let sumDespesas = 0
    let result = 0

    for(let i=0; i < receitas.length; i++){
    sumReceitas += receitas[i]
    }
    for(let x=0; x < despesas.length; x++){
    sumDespesas += despesas[x]
    }
    result = sumReceitas - sumDespesas

    return result

}

let result = sumCashFlow(cashFlow.receitas,cashFlow.despesas)
console.log(sumCashFlow(cashFlow.receitas, cashFlow.despesas))

if(result > 0){
    console.log('A familia está com saldo positivo')
}else if(result < 0 ){
    console.log('A familia está em divida')
}else {
    console.log('Saldo Nulo.')
}