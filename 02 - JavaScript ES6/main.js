class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo() {
    this.todos.push('Novo todo');
    console.log(this.todos);
  }
}

const MinhaLista = new TodoList();

document.querySelector('#novotodo').onclick = function () {
  MinhaLista.addTodo();
};