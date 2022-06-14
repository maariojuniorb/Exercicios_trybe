let contador = 0;

const calculoContador = () => {
  const htmlContador = document.querySelector('#main');
  const button = document.querySelector('#button')
  const buttonClear = document.querySelector('#button-clear')
  const contadorClicks = document.createElement('p');
  contadorClicks.className = 'contadorClicks'
  contadorClicks.innerText = contador;
  htmlContador.appendChild(contadorClicks)
  button.addEventListener('click', () => {
    contadorClicks.innerText = contador +=1;
  })
  buttonClear.addEventListener('click', () => {
    contador = 0;
    contadorClicks.innerText = contador;
  })
}

calculoContador();
