const selectorMaiorPalavra = (frase) => {
  let palavras = frase.split(' ');
  let maior = '';
 for (let key of palavras) {
     if ( maior.length < key.length)
     maior = key;
 }
   return maior;
}

console.log(selectorMaiorPalavra('eu amo meu cachorro'));
