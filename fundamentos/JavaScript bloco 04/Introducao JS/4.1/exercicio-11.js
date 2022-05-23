let salario = 3000.00;
let ir = ((salario * 7.5) / 100);
let inss = ((salario * 9) / 100);
let salarioLiquido = (salario - ir - inss);


console.log("O IR refente ao salário é R$" + ir);
console.log("O INSS referente ao salário é R$" + inss);
console.log("O valor líquido a receber de um salário de R$2.300,00 é R$" + salarioLiquido)

