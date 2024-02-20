//for -each loop
//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 9, 9];
//let sum = 0;
// let count = [];
// arr.forEach((items, index, arr) => {
// console.log(items);
//console.log(index);
//console.log(arr);
//sum of array
//sum = items += sum;
//check how many times items are in array
//   if (count[items]) {
//     count[items]++;
//   } else {
//     count[items] = 1;
//   }
// });
// console.log(count);
// Map -method-------

//let numbers = [1, 5, 6, 7, 3, 4];
//map method used to access or change every element of an array
//let doublenumbers = numbers.map(multiply);

//function multiply(values, index, arr) {
// return values * 2;
// return index * values;
//}
//console.log(doublenumbers);
// let cities = ["karachi", "isb", "lahore", "shangin"];
// let capitalCities = cities.map((item) => {
//   return item.charAt(0).toUpperCase() + item.slice(1);
// });

// console.log(capitalCities);
//reduce method
//it reduces the elements of array to a single value
let numbers = [5, 10, 30, 20, 15, 40];

// let total = numbers.reduce(sum);
// function sum(previous, next) {
//   //pervious = accumulator and next = element
//   return previous + next;
//}

let total = numbers.reduce((previous, next) => {
  return previous + next;
});
console.log(`The total = $${total}.`);
//to get max and min from the array

let num = [1, 3, 50, 9, 45];

let maximum = num.reduce(max);
function max(accumulator, element) {
  return Math.max(accumulator, element);
}
let minimum = num.reduce(min);
function min(accumulator, element) {
  return Math.min(accumulator, element);
}
console.log(`The Maximum number from the array ${maximum}`);
console.log(`The Minimum number from the array ${minimum}`);

//calculate the total sum of all the items in the store by their count values

let store = [
  {
    product: "laptop",
    value: 1000,
    count: 3,
  },
  {
    product: "desktop",
    value: 1500,
    count: 4,
  },
  {
    product: "tablets",
    value: 500,
    count: 6,
  },
  {
    product: "tablets",
    value: 1500,
    count: 1,
  },
  {
    product: "tablets",
    value: 800,
    count: 6,
  },
];
let totalAmount = store.reduce(addition, 0);

function addition(acc, item) {
  return (acc += item.value * item.count);
}
console.log(totalAmount);

//slice method
let arr = [1, 3, 4, 6, 7, 8];

let see = arr.slice(2, 5);

console.log(see); // start and end value here 0=1 and 4=7
//sort method
let sorting = [20, 45, 67, 88, 97, 65, 43, 21];

let result = sorting.sort((a, b) => {
  //return a - b;
  return b - a;
});
console.log(result);
//Array concate method

let a = [1, 2, 3];
let b = [4, 5, 6];
let d = [7, 8, 9, 10, 11, 12, 13];
//let remove = d.splice(1, 3); //used to remove array elements
d.push(60, 50);
console.log(d);

//let c = d.concat(20, 90, d, a);

//console.log(c);
// indexOf and lastIndexOf method

let z = ["suman", "aleena", "mehwish", "abiya", "Rimsha", "abiya"];
let update = z.lastIndexOf("abiya");
//z[update] = " haniaaaa"; update value of mehiwhs

console.log(update);
//every() method

let e = [
  {
    name: "suman",
  },
  {
    name: "suman",
  },
  {
    name: "suman",
  },
  {
    name: "suman",
  },
];
let res = e.every((e) => e.name !== undefined);

console.log(res);
//Array.from() method
let str = "1234567";

let show = Array.from(str);
console.log(show);
//to complete make it like a numbers add number method
// let show1 = Array.from(str, (v) => Number(v));
let show1 = Array.from(str, Number);

console.log(show1);
// or by simple method

let again = Array.from(str, fun);
function fun(n) {
  return Number(n);
}
console.log(again);

//alslo remove duplicates and convert into an array

let x = [1, 2, 2, 4, 5, 6, 7, 6, 7, 7, 3, 3];

let make = new Set(x); // now convert this into array
let makes = Array.from(new Set(x));
console.log(makes);

//adding 10 in each array element using forEach loop

let mynums = [1, 2, 3, 4, 5];
let lemme = [];
mynums.forEach((v) => {
  lemme.push(v + 10);
});

//let lemme = mynums.map((s) => s + 10);using map method
console.log(lemme);
//chain concept using multiple methods same time

let hipe = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let seeHipe = hipe
  .map((arr) => arr * 10)
  .map((arr) => arr + 5)
  .filter((arr) => arr > 40);

console.log(seeHipe);
//Reduce method to add shoopingcart prices
let shoppingCart = [
  {
    course: "Python",
    price: 2000,
  },
  {
    course: "JS",
    price: 1000,
  },
  {
    course: "C++",
    price: 3000,
  },
  {
    course: "Java",
    price: 4000,
  },
];
//add all the price by reduce method

let seeCart = shoppingCart.reduce((acc, curr) => acc + curr.price, 0);
console.log(seeCart);
//Rest and spread opeartor

//spread operator

function sumTow(a, b) {
  return a + b;
}
let nums = [5, 5];
console.log(sumTow(10, 10));
//console.log(sumTow(...nums)); uso of spread operator

//Rest operator

function sumNmul(...args) {
  let sum = 0;
  //forOf loop
  // for (const arg of args) {
  //   sum += arg;
  //by foreach
  args.forEach((arg) => {
    //sum = sum + arg;
    sum += arg;
  });
  return sum;
}

console.log(sumNmul(2, 2, 4, 3, 5, 10));

// map method

let number = [0, 10, 20, 30, 40];
//output should be [0,100,200,300,400]

let multiply = number.map((num) => num * 10);
console.log(multiply);

//filter method

let person = [
  {
    name: "suman",
    email: "sumanpervaiz3@gmail.com",
    password: "12345",
    age: 22,
  },
  {
    name: "Iram ",
    email: "Iramhameed63@gmail.com",
    password: "12345",
    age: 22,
  },
  {
    name: "aleena",
    email: "aleenafatii65@.com",
    age: 25,
  },
  {
    name: "sania",
    email: "saniahanif32@gmail.com",
    age: 18,
  },
  {
    name: "mehwish",
    password: "mehw345#@",
    age: 28,
  },
  {
    name: "Abiyaa",
    password: "bebo432@",
    age: 21,
  },
  {
    name: "Mehak",
    age: 20,
  },
  {
    name: "Minahil",
    age: 17,
  },
];
let details = person
  .filter((items) => items)
  // .filter((items) => items.email)
  .filter((items) => items.password);

console.log(details);
