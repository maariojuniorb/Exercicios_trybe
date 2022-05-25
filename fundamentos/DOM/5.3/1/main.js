const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const classTech = document.querySelector('.tech')



// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.

// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
input.focus;
firstLi.addEventListener('click', function () {
    firstLi.className = 'tech'
    console.log(firstLi);
})

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';

function mudaTexto() {
    const inputTexto = document.querySelector('.tech')
    inputTexto.innerText = input.value;
}
input.addEventListener('keyup', mudaTexto)


// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;

// 4.1. Que tal redirecionar para seu portfólio?

function clickRedirecionar(){
    window.location.replace('https://maariojuniorb.github.io//')
};

thirdLi.addEventListener('dblclick', clickRedirecionar)

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

// Segue abaixo um exemplo do uso de event.target:

thirdLi.addEventListener('mouseover', function(){
    thirdLi.style.background = 'red'
    console.log('mouse está do elemento')
})

thirdLi.addEventListener('mouseleave', function(){
    console.log('mouse saiu do elemento')
})


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
