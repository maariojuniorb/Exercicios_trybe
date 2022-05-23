let numero = [9, 1, 2, 3, 9, 5, 7,];

function highestCount(a) {
    let maiorNumero = Number.MIN_SAFE_INTEGER;
    let repeticaoMaiorNumero = 0;
    let novoMaiorNumero = Math.max(a);


    // for (let index = 0; index < a.length; index += 1) {
    //   if (maiorNumero <= a[index]) {
    //     maiorNumero = (a[index]);
    //   }
    // }

    for (let index = 0; index < a.length; index += 1) {
      if (novoMaiorNumero === a[index]) {
        repeticaoMaiorNumero += 1;
      }
    }

    return repeticaoMaiorNumero;
  }

//   console.log(highestCount(numero));

console.log(Math.max.apply(null, numero));
