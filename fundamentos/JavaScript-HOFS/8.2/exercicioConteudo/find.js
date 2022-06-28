const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (numbers) => {
  return numbers.find((item) => item < 4)
}

console.log(findDivisibleBy3And5(numbers))
