let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for (index =0; index < numbers.length; index += 1) {
    soma = numbers[index] + soma;
};

console.log(numbers.length)

console.log(soma);

console.log("a media do array é " + soma / numbers.length);
