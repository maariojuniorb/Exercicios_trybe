const angulo1 = 60;
const angulo2 = 90;
const angulo3 = 30;

if (( angulo1 + angulo2 + angulo3) == 180 ){
    console.log("true");
} else if ( angulo1 < 0 || angulo2 <0 || angulo3 <0) {
    console.log("Angulo inválido");
} else {
    console.log("false");
};
