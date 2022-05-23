let xadrez = "Cavalo".toLowerCase();


switch (xadrez) {
    case "bispo":
        console.log(" Sò pode andar em diagonal");
        break;

    case "cavalo":
        console.log(" Sò pode andar em L");
        break;

    case "torre":
        console.log(" Sò pode andar em linha reta");
        break;

    case "rainha":
        console.log(" pode andar em todas as direções");
        break;

    case "peão":
        console.log(" Sò pode andar para frente de uma em uma casa");
        break;

    case "rei":
        console.log(" Sò pode andar de uma em uma casa");
        break;

    default:
        console.log("essa peça não é válida");
};
