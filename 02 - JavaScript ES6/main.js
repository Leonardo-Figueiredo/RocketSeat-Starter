class User {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin() {
    return this.admin === true;
  }

  mostraDados() {
    console.log(`e-mail: ${this.email} Senha: ${this.senha}`);
  }

}

class Admin extends User {
  constructor(email, senha) {
    super(email, senha);
    this.admin = true;
  }
}

const User1 = new User('email@testee.com', 'senha1234');
const Adm1  = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()); //False
console.log(Adm1.isAdmin());  //True
User1.mostraDados();
Adm1.mostraDados();