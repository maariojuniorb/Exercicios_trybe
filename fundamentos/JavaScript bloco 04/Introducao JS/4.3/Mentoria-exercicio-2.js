let numeros = '';

for (index = 1; index <= 50; index += 1) {
    if (index %2 !== 0) {
        numeros += ' ' + index
    };
};

console.log(numeros);
