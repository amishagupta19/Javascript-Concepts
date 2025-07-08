//-----------------for in loop in JS------------------------
let person = {
    name : "Amisha",
    age: 22,
    gender: "female"
};

for(let key in person){
    //console.log(key, person[key]);
}

//for loop on array data structure
let list = ["one", "two", "three", "four"];

for(let index in list){
    //console.log(`${index}: ${list[index]}`);
}

//example
const obj = {
    a: 1, b: 2, c: 3
};

for(let keys in obj){
    //console.log(`${keys}: ${obj[keys]}`);
}

//---------------for of loop in JS-----------------------

let peoples = ["amisha", "alex", "abc", "xyz"];

for(let people of peoples ){
    console.log(people);
}

const text = "Hello";

for(const char of text){
    console.log(char);
}

const array1 = ["a", 'b', 'c'];

for(const element of array1){
    console.log(element);
}