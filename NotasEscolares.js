/**
 * Crie um algoritmo que  transforme as notas do sistema numérico para sistema de notas em caracteres tipo ABC
 

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F

 */

/**
1 - Criar um sistema de notas, para o exercicio vou usar 5 notas
2 - a partir de um laço percorrer o array e com uma condicional if, altera-los.

for(let i = 0;i<5;i++){
    if(Notas[i] >= 90){
        Notas[i] == 'A'
    }
    
 */

let score

function getScore(score){

    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score >= 0 && score <= 59

    if(scoreA){
        score = 'A'
        return score
    }else if(scoreB){
        score = 'B'
        return score
    }else if(scoreC){
        score = 'C'
        return score
    }else if(scoreD){
        score = 'D'
        return score
    }else if(scoreF){
        score = 'F'
        return score
    }else{
       return ('Nota Invalida')
    }
}

console.log(getScore(100))
console.log(getScore(15))
console.log(getScore(53))
console.log(getScore(68))
console.log(getScore(77))
console.log(getScore(88))
console.log(getScore(-1))