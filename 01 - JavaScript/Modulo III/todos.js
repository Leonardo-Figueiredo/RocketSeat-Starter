var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var toDos = JSON.parse(localStorage.getItem(('list_toDos'))) || [];

function renderToDos() {
  listElement.innerHTML = '';
  for (toDo of toDos) {
    var toDoElement = document.createElement('li');//cria os elementos <li> da Lista.
    var toDoText = document.createTextNode(toDo);//texto que fica no elemento <li> da Lista.
    var linkElement = document.createElement('a');//cria o <a>
    var linkText = document.createTextNode('Excluir');// texto que vai ficar no <a>
    linkElement.setAttribute('href', '#');// cria um atributo para o <a>

    var position = toDos.indexOf(toDo);
    linkElement.setAttribute('onclick', 'deleteToDo(' + position + ')')

    linkElement.appendChild(linkText)// insere o texto no <a>
    toDoElement.appendChild(toDoText);// insere o texto dentro do <li>
    toDoElement.appendChild(linkElement);//cria o <a> dentro de <li>
    listElement.appendChild(toDoElement);//cria <li> dentro de <ul>
  }
}

renderToDos();

function addToDo() {
  var toDoText = inputElement.value + ' ';

  toDos.push(toDoText);
  inputElement.value = '';
  renderToDos();
  saveToStorage();
}

buttonElement.onclick = addToDo;

function deleteToDo(position) {
  toDos.splice(position, 1);
  renderToDos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_toDos', JSON.stringify(toDos));
}