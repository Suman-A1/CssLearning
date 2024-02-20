//filter method

// let person = [
//   {
//     name: "suman",
//     email: "sumanpervaiz3@gmail.com",
//     password: "12345",
//     age: 22,
//   },
//   {
//     name: "Iram ",
//     email: "Iramhameed63@gmail.com",
//     password: "12345",
//     age: 22,
//   },
//   {
//     name: "aleena",
//     email: "aleenafatii65@.com",
//     age: 25,
//   },
//   {
//     name: "sania",
//     email: "saniahanif32@gmail.com",
//     age: 18,
//   },
//   {
//     name: "mehwish",
//     password: "mehw345#@",
//     age: 28,
//   },
//   {
//     name: "Abiyaa",
//     password: "bebo432@",
//     age: 21,
//   },
//   {
//     name: "Mehak",
//     age: 20,
//   },
//   {
//     name: "Minahil",
//     age: 17,
//   },
// ];

// let detials = person.filter((items) => {
//   return items;
// return items.email && items.password;
//return items.password;
//return items.email;
//   //return !items.password && !items.email;
// });

// console.log(detials);

// forEach loop

let students = [
  {
    name: "suman pervaiz",
    score: 98,
  },
  {
    name: "Hania shakeel",
    score: 90,
  },
  {
    name: "Amna Ashraf",
    score: 80,
  },
  {
    name: "Nida Yasir",
    score: 78,
  },
];
//foreach to print each student property

students.forEach((items) => {
  console.log(`Student name: ${items.name} and her Scores: ${items.score}`);
});
