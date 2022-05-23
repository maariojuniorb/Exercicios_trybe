let player = {
name: 'Marta',
lastName: 'Silva',
age: 34,
medals: { golden: 2, silver: 3 },
bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
};

console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age + " anos de idade." )

let numeroDeVezesMelhorDoMundo = 0;

for (index = 0; index < player.bestInTheWorld.length; index ++){
    numeroDeVezesMelhorDoMundo +=1
}

console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + numeroDeVezesMelhorDoMundo + " vezes.");

console.log(" A jogadora possuí " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.")
