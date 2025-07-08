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
    //console.log(people);
}

const text = "Hello";

for(const char of text){
    //console.log(char);
}

const array1 = ["a", 'b', 'c'];

for(const element of array1){
    //console.log(element);
}

//--------------forEach Method in JS-------------------

const colors = ["teal", "blue", "red", "green"];
//colors.forEach((color) => console.log(color));

const words = ["hello", "bird", "table", "football", "pipe", "code"];
const capWords = words.forEach((word, index, arr) => {
    arr[index] = word[0].toUpperCase() + word.substring(1);
});

//console.log(words);

const numbers = [12, 18, 19, 11, 12, 29];
let sum = 0;
const adder = numbers.forEach((number) => {
    sum += number;
});
//console.log(sum);

//----------------- map() method in JS ------------------------------

let nums = [1, 2, 3, 4, 5]
let double = nums.map(num => num * 2)
//console.log(double);

let mult = nums.map(num => num * 10)
//console.log(mult);


//------------------- filter() method in JS --------------------------

 const songs = [
    {name: "Lucky You", duration: 4.34},
    {name: "Just Like You", duration: 3.23},
    {name: "The Search", duration: 2.33},
    {name: "Old Town Road", duration: 1.43},
    {name: "The Box", duration: 5.23},
 ];

 console.log(songs.filter((song) => song.duration > 3)); 


 const ages = [16, 19, 32, 23, 22, 40];

 function checkAdults(age){
    return age >= 18;
 }

 const res = ages.filter(checkAdults);
 console.log(res);