var xhr = new XMLHttpRequest(); //cria a requisição do servidor

xhr.open('GET', 'https://api.github.com/users/Leonardo-Figueiredo');// chama a api
xhr.send(null);

xhr.onreadystatechange = function() {// Quando atualizar a página, vai requisitar
  if (xhr.readyState === 4) {// Se a volta for "4" (requisição concluida)
    console.log(JSON.parse(xhr.responseText));// Converte o JSON para texto e exibe no console
  }
}