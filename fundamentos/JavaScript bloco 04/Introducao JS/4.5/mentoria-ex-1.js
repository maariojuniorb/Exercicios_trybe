function calculoAreaEPerimetro (base,altura) {
    let CalcArea = (base * altura)
    let CalcPerimetro = (2 * base) + (2 * altura)

    let resultado = {
        area: CalcArea,
        perimetro: CalcPerimetro
    };

    return resultado;
}

console.log(calculoAreaEPerimetro(30,20));




