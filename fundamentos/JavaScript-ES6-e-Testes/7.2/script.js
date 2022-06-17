function validateSum(value1, value2, result) {
  result = parseInt(value1) + parseInt(value2);
  if (value1 !== '' && value2 !== '') {
    return result;
  } else if (isNaN(value1, value2)) {
    throw new Error('Erro, digite somente números.')
  } else {
    throw new Error('Campo vazio, preencha corretamente.')
  }
}

function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    document.getElementById('result').innerHTML = `Resultado: ${validateSum(value1, value2, result)}`;
  } catch (error) {
    document.getElementById('result').innerHTML = `${error.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
