/**
 crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra

 C = (F - 32) * 5/9
 F = C * 9/5 + 32
 */

 function transformDegree(degree){                                      //Função que transforma o Grau
     const celsiusExist = degree.toUpperCase().includes('C')            //Verifica se há Graus Celsius, a partir da UM.
     const fahrenheitExist = degree.toUpperCase().includes('F')         // Verifica se há FAhrenheit, a partir da UM

     if(!celsiusExist && !fahrenheitExist){                             //Caso não existe ambos, mensagem no console.
         throw new Error('Grau não identificado')
     }

     // fluxo ideal F -> C                                                  
     let updateDegree = Number(degree.toUpperCase().replace("F", ""));  //Atualização do grau, tranasformando em Numero e tirando a antiga UM
     let formula = (fahrenheit) => (fahrenheit - 32) * 5/9              // Arrow Function para formula
     let degreeSign = 'C'                                               //Adiciona a nova UM

    if(celsiusExist){
        updateDegree = Number(degree.toUpperCase().replace("C", ""));   //Atualiza o grau 
         formula = (celsius) => celsius * 9/5 + 32                      //Arrow Function
         degreeSign = 'F'                                               //Nova UM

    }



     return formula(updateDegree) + degreeSign                          // Retorna o resultado
 }

 try{                                                                   //Função Try de conferencia de erro.
     console.log(transformDegree('10c'))
     console.log(transformDegree('50f'))
 }catch(error){
    console.log(error.message)
 }

 