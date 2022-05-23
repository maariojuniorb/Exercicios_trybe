let habilidades = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript']

function techList(tecnologias,nome) {
    objeto:[];
    for (let index =0; index < tecnologias.length; index+=1) {
      if (tecnologias.length == 0) {
        objeto = 'vazio'
      } else {
        objeto = new Object(), 'name'= nome, 'tech'=tecnologias[index];
      }
    }
    return objeto;
  }

  console.log(techList(habilidades,'Lucas'))
