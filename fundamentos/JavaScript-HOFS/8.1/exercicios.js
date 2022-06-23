const numberSort = () => numeroSorteado = Math.round(Math.random() *5);

const checkSort = (numero, callback) => {
  const numeroApostado = numero;
  const numeroSorteado = callback()
  if (numeroSorteado === numeroApostado) {
    return `Parabéns, você ganhou! o número sorteado foi ${numeroSorteado}. `
  } else {
    return `Que pena, não foi dessa vez, mas continue tentando. o número sorteado foi ${numeroSorteado}`
  }
}

console.log(checkSort(2, numberSort));


