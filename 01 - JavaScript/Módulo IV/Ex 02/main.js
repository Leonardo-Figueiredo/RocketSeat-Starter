var inputElement = document.querySelector('input#user');
var buttonElement = document.querySelector('button#search');
var ulElement = document.querySelector('ul#repos');

buttonElement.onclick = function() {
  axios.get('https://api.github.com/users/' + inputElement.value + '/repos')

  .then(function(response) {
    //console.log(response.data[0].name);
    var cont = response.data.length - 1; // Quantidade de repositórios(Vetores) do JSON
    for(var i = 0; i <= cont; i++) {
      var reposName = response.data[i].name;
      var textElement = document.createTextNode(reposName);
      var listElement = document.createElement('li');
      listElement.appendChild(textElement);
      ulElement.appendChild(listElement);
    }
  })

  .catch(function(reject) {
    alert('   Erro 404 \n   Usuário inválido no GitHub');
    console.warn(reject + ' Usuário não encontrado.');
  })
};

