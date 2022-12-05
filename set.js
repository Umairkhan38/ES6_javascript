console.log("its set in javascript");


// Sets in js
// let array=[1,2,3,5,6];
// let obj=new Set(array);
// obj.add(7);
// obj.add(8);
// obj.delete(7);
// let myObj={name:"khan Umair"}
// obj.add(myObj);

// console.log(obj);
// for(let name of obj){
//     console.log(name);
// }

// obj.clear();





// Maps in js store data in the form of key and value pair

// we can create a JavaScript Map by:
// Passing an Array to new Map()
// Create a Map and use Map.set()

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

console.log(fruits.get("bananas"));



const cars = new Map();
// Set Map Values
cars.set("Mercedez", 4300000);
cars.set("Fortuner",4500000);

console.log(cars.get("Fortuner"));
console.log(cars.has("Mercedez"));



