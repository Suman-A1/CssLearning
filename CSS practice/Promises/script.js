// fetching data from JSON placeholder
// promises / async await // then/ catch/finally

//let fetchDatafromServer = fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(fetchDatafromServer);
// in this above case this will only return us a promise to get it we need to use
//async await this is promise
//async function dataFetch() {
//let fetchData = await fetch("https://jsonplaceholder.typicode.com/posts");
//console.log(await fetchData.json());
//}
//dataFetch();
//the second method  if you don't wanna make a function
let getData = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => {
    console.log(data.json());
  })
  .catch((error) => {
    console.log(error);
  });
console.log(getData);
