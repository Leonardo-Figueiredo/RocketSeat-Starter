function checaIdade(idade) {
  return new Promise(function(resolve, reject){
    setTimeout(() => {
      if(idade >= 18) {
        resolve();
      } else{
        reject();
      }
    }, 2000);
  })
 }
 
var idade = document.querySelector('input#age');
var btnElement = document.querySelector('button#btn');

  btnElement.onclick = function () {
    checaIdade(idade.value)
    .then(function() {
    console.log("Maior que 18");
    })
    .catch(function() {
    console.log("Menor que 18");
    });
    idade.value = "";  
  }