let numeros = [2, 15, 7, 9, 45];

function fizzBuzz(parametro) {
    let divisiveis = [];
    for (let index = 0; index < parametro.length; index += 1) {
      if (parametro[index] % 3 === 0 && parametro[index] % 5 !== 0) {
        divisiveis.push('fizz');
      } else if (parametro[index] % 5 === 0 && parametro[index] % 3 !== 0) {
        divisiveis.push('buzz');
      } else if (parametro[index] % 3 === 0 && parametro[index] % 5 === 0) {
        divisiveis.push('fizzBuzz');
      } else {
        divisiveis.push('bug!');
      }
    }
    return divisiveis;
  }

  fizzBuzz(numeros);

  console.log(fizzBuzz(numeros));

