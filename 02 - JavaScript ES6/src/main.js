// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
async function umPorSegundo() {
  const response = await delay();
  await delay(console.log('1s'));
  await delay(console.log('2s'));
  await delay(console.log('3s'));
}
// function umPorSegundo() {
//  delay().then(() => {
//   console.log('1s');

//   delay().then(() => {
//    console.log('2s');

//     delay().then(() => {
//      console.log('3s');
//     });
//   })
//  });
// }
umPorSegundo();

import axios from 'axios';

class Api {
  static async getUserFromGithub (username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response.data);
    } catch (err) {
      console.warn('Erro na API');
    }
  }
}
// function getUserFromGithub(user) {
//   axios.get(`https://api.github.com/users/${user}`)
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.log('Usuário não existe');
//     })
// }
Api.getUserFromGithub('diego3g');
Api.getUserFromGithub('diego3g124123');

class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response);
    } catch (err) {
      console.warn('Repositório não existente');
    }
  }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

const buscaUsuario = async user => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);
  } catch (err) {
    console.warn('Usuário não existente!!');
  }
}
buscaUsuario('diego3g');
buscaUsuario('leonardo-figueiredo');
buscaUsuario('leonardo-figueiredo1321321');