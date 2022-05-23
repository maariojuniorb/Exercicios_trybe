const produto = 49
const imposto = (produto * 20) / 100
const valorTotalDeCustoProduto = ( produto + imposto)
const produtoVenda = 70

const valorTotalDeLucro = ( produtoVenda - valorTotalDeCustoProduto)

console.log ("o valor de lucro na venda de 1000 produtos é " + valorTotalDeLucro * 1000);

console.log ("o valor de lucro na venda de 1000 produtos é " + (produtoVenda - ((produto * 20 / 100) + produto)) * 1000);



