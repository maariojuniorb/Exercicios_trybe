let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  let info2 = {
      personagem:'Tio Patinhas',
      origem:'Christmas on Bear Mountain Dells Four Color Comics #178',
      nota: 'O último MacPatinhas'
  }

  info['recorrente'] = 'sim'
  info2['recorrente'] = 'sim'

  for (key in info2,info) {
      console.log(info[key],info2[key])
  };
