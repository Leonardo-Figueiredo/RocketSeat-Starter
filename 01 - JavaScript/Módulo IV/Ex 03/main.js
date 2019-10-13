var inputElement = document.querySelector('input#user');
var buttonElement = document.querySelector('button#search');
var ulElement = document.querySelector('ul#repos');
var listElement = document.createElement('li');

function promiseStateOn() {
  var estadoText = document.createTextNode('Carregando...');
  listElement.appendChild(estadoText);
  listElement.setAttribute('id', 'status');
  ulElement.appendChild(listElement);
}

function promiseStateOff() {
  var liState = document.querySelector('li#status');
  liState.innerHTML ="";
  liState.parentNode.removeChild(liState);
  // console.log(liState);
}

buttonElement.onclick = function() {
  promiseStateOn();
  axios.get('https://api.github.com/users/' + inputElement.value + '/repos')
  
  .then(function(response) {
    promiseStateOff()
    //console.log(response.data[0].name);
    var cont = response.data.length - 1; // Quantidade de repositórios(Vetores) do JSON
    for(var i = 0; i <= cont; i++) {
      var reposName = response.data[i].name;
      var textElement = document.createTextNode(reposName);
      var listElement = document.createElement('li');
      ulElement.appendChild(listElement);
      listElement.appendChild(textElement);
    }
  })

  .catch(function(reject) {
    alert('   Erro 404 \n   Usuário inválido no GitHub');
    console.warn(reject + ' Usuário não encontrado.');
  })
};

