const usuarios = [
  { nome: 'Diego'  , idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas'  , idade: 30, empresa: 'Facebook' },
 ];

 //map
 const idades = usuarios.map(item => item.idade);
 console.log(idades);

 //filter
 const maiorIdade = usuarios.filter(
   item => item.empresa === 'Rocketseat' && item.idade >= 18
  );
 console.log(maiorIdade);

 //find
 const googleEmployee = usuarios.find(
   item => item.empresa === 'Google'
  );
  console.log(googleEmployee);

  //Unindo Operações
  const maxCinquenta = usuarios
    .map(item => ({ ...item, idade: item.idade * 2}))
    .filter(item => item.idade <= 50);
  console.log(maxCinquenta);