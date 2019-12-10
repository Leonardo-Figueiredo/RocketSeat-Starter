const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK') }, 2000);
});

// async function executaPromise() {
//   //Forma com async/await
//   const response = await minhaPromise();
//   //  console.log(await minhaPromise());
//   //  console.log(await minhaPromise());
//   //  console.log(await minhaPromise());
//   //  console.log(await minhaPromise());

//   //Feito da forma antiga:
//   // minhaPromise()
//   // .then(response => {
//   //   console.log(response);

//   //   minhaPromise()
//   //   .then(response => {
//   //     console.log(response);
      
//   //     minhaPromise()
//   //     .then(response => {
//   //       console.log(response);
//   //     });
//   //   });
//   // });
// }
//executaPromise();

//Com Arrow Function
const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
};

executaPromise();