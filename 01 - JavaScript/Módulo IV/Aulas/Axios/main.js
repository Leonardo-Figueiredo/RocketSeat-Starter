axios.get('https://api.github.com/users/Leonardo-Figueiredo')
.then(function(response) {
  console.log(response);
})
.catch(function(error) {
  console.log(error);
});