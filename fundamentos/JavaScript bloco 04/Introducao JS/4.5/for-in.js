let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let position in names) {
      console.log("Olá " + names[position])
  }

// -----------------------------

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for (let index in car) {
      console.log(index, car[index])
  };
