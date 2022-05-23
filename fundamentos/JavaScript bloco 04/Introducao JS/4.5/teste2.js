// const str = 'carro';
// console.log(str.replace(/a|e|i|o|u/g, 1));
let carro = 'paralelepipedou'

function encode(fraseEncode) {
    for (let index=0; index <= 1; index +=1) {
        let modo1 = fraseEncode.replace(/a/g, 1);
        let modo2 = modo1.replace(/e/g, 2);
        let modo3 = modo2.replace(/i/g, 3);
        let modo4 = modo3.replace(/o/g, 4);
        let modo5 = modo4.replace(/u/g, 5);

        return modo5;
    }
}

function trocarLetras(frase){


    function decode(fraseDecode) {
        for (let index=0; index <= 1; index +=1) {
            let modo1 = fraseDecode.replace(/1/g, a);
            let modo2 = modo1.replace(/2/g, e);
            let modo3 = modo2.replace(/3/g, i);
            let modo4 = modo3.replace(/4/g, o);
            let modo5 = modo4.replace(/5/g, o);

            return modo5;
        }
    }
}

function decode(fraseDecode) {
    for (let index=0; index <= 1; index +=1) {
        let modo1 = fraseDecode.replace(/1/g, a);
        let modo2 = modo1.replace(/2/g, e);
        let modo3 = modo2.replace(/3/g, i);
        let modo4 = modo3.replace(/4/g, o);
        let modo5 = modo4.replace(/5/g, o);

        return modo5;
    }
}

console.log(encode(carro))

// trocarLetras();
// console.log(trocarLetras(carro))
