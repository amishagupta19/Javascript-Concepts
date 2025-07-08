Javascript is a versatile and widely-used programming language that plays a crucial role in web development. It enables developers to create interactive and dynamic elements within web pages, enhancing the user experience by adding functionality that responds to user actions. Javascript is primarily executed in web browsers, but it's also used in other environments like server-side scripting (Node.js).



JSON - Javascript Object Notation
Light weight data interchange format that is easy for humans to read and write. Often used for transmitting data between servers and application.


Template strings, also known as template literals, are a feature in javascript that allows you to create strings with embedded expressions.  Template strings provide a more flexible and concis way to construct strings, especially when they involve variables and expressions.

Arrow functions, also know as fat arrow functions, are a concise and shorter way to define functions in Javascript. They were introduced in ECMAScript 6 (ES6) and provide a more compact syntax compared to traditional functional expressions.

funcName = (parameter) => {...}


The spread operator(...) is  a new addition to the set of operators in Javascript ES6. It takes in an iterable (e.g an array) and expands it into individual elements. The spread operator is commonly used to make shallow copies of JS objects. Using this operator makes the code concise and enhances its readability.
function giveMe4 (a, b, c, d) {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
    console.log("d", d);
}

const colors = ["red", "green", "blue", "teal"];

giveMe4(...colors);



The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions(functions that accpts limited amount of parameter ) in Javascript.
function user(x, ... userData) {
    console.log(x);
    console.log(userData);
}

user("Ami", 22, "programmer", "writing");


Destructuring allows us to "unpack" values from data-structures (arrays, objects, functions) into seperate distinct variables. 
 const num = ["one", "two", "three"];
 const [one, two, three] = num;


 Ignoring return value using array Destructuring
 function f() {
    return [1, 2, 3];
}

const [a, , b] = f();
console.log(a); //1
console.log(b); //3

In object Destructuring order doesn't matter but the name does.
const person = {
    name : "Amisha",
    age : 22,
    gender : "  Female",
    country : "India",
};

const {name: personName, age: personAge, country: personCountry} = person;


The "for...in" loop in Javascript is used to iterate over the enumerable properties of an object. It is a way to loop through the keys (property names) of an object.

The "for...of" loop in Javascript is a modern iteration statement introduced in ECMAScript 6 (ES6) that provides a concise and easy way to loop over elements in iterable objects like arrays, strings, maps, sets, and more. It allows you to iterate directly over the values of the elements, rather than dealing with their indices or keys, which makes the code more readable and less error-prone.


When we call the forEach helper we pass in anonymous call back function. This function gets called one time for every element in the array, whatever is inside the function that logic gets executed.


The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

The filter() method is a buit-in array method in JS that allows you to create a new array containing elements that pass a certain condition. It prrovides a clean and coincise way to filter out elements from an array based on a specified criteria.
