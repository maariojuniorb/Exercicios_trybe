let numeros = [9, 1, 2, 3, 9, 5, 7];

function highestCount(arrayToCount) {
  let maiorNumero
  let repeticaoMaiorNumero = 0;
  arrayToCount.forEach((item) => {
    if (maiorNumero < item || maiorNumero == undefined){
      maiorNumero = item
      // console.log(maiorNumero);
    }
    if ( maiorNumero == item){
      repeticaoMaiorNumero += 1;
    }

  });

  // for (index = 0; index < a.length; index +=1) {
  //   if ( maiorNumero == a[index]){
  //     repeticaoMaiorNumero += 1;
  //   }
  // }
  return repeticaoMaiorNumero;

};

console.log(highestCount(numeros));
