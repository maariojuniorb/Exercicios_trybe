let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let odd = [];
let even = []

for (index =0; index < numbers.length; index += 1) {
    if (numbers[index] %2 !== 0) {
        odd.push (numbers[index])
    };
};

for (index =0; index < numbers.length; index += 1) {
    if (numbers[index] %2 == 0) {
        even.push (numbers[index])
    };
};

console.log(odd);
console.log(even);





