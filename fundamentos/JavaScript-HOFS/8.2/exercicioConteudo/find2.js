const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (names) => names.find((item) => item.length === 5);

console.log(findNameWithFiveLetters(names));
