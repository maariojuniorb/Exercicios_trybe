

const mudarParametro = (nome) => {
  let exibicao = `Tryber ${nome} aqui!`
  return exibicao;
}

const habilidades = (nome, hab1, hab2, hab3) => {
  let exibicao = `${mudarParametro(nome)} Minhas três principais habilidades são: ${hab1}, ${hab2} e ${hab3} Skills.`
  return exibicao
}

console.log(habilidades('Mario', 'HTML', 'CSS', 'JAVASCRIPT'));
