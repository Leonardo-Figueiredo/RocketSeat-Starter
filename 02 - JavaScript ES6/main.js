const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
 };

 //4.1
 const { 
  nome,
  endereco: { cidade, estado } 
} = empresa;

 console.log(nome);
 console.log(cidade);
 console.log(estado);

 //4.2
function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

//5.1
const arr = [1, 2, 3, 4, 5, 6];
const [ x, ...y ] = arr;
console.log(x);
console.log(y);

function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1,2,3,4,5,6,7,8,9,500));

//5.2
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};
const usuario2 = { ...usuario, nome:'Gabriel' };
const usuario3 = { 
  ...usuario,
  endereco: {...usuario.endereco, cidade:'Lontras' } 
};

console.log(usuario);
console.log(usuario2);
console.log(usuario3);