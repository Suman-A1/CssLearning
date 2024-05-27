// let h1 = document.querySelectorAll("h1");
// console.log(h1);
let favSeries = "Netflix";

{
  favSeries === "Netflix" ? "Netflix" : "Horror";
}
console.log(favSeries);

//map and filter method

let names = ["suman", "mehwish", "aleena", "sobia"];

const finalResult = names.map((person, index, arr) => {
  console.log(person + " : " + index);
});

const items = ["apple", "banana", "orange"];

function MyComponent() {
  const keys = ["a", "b", "c"];

  return items.map((item, index) => {
    const key = keys[index];
    console.log(`Key for "${item}" is: ${key}`);
    return (key = { key } > { item });
  });
}
let item = ["apple", "banana", "orange"];
const correctList = item.map((item, index) =>
  console.log((key = { item } > { item }))
);
