let numeros = [2,4,5,6,7,8,34,12,33,13,21]

function ParesEImpares (array) {
    let odd = [];
    let even = [];
    for (index = 0; index < array.length; index += 1 ){
     if (array[index] %2 !== 0) {
         odd.push (array[index])
     } else if (array[index] %2 == 0){
         even.push (array[index])
     };
    };

     resultado = {
         pares: even,
         impares: odd
        }
        return resultado;
};

console.log(ParesEImpares(numeros));
