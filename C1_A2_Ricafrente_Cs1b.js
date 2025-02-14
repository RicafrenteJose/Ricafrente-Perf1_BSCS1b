//CS1b_jRicafrente_C1_A2s.js


// Initialize all the 4 variables
let a = 25;
let b = 20;
let c = 12
let d = "15";
const e = 15;

//Display the sum
// I use parseInt() to convert the string to a number
let sum = a + b + c + parseInt(d) + e;
console.log("Sum of the number is:", sum);

//Compare the variables d and e using relational operators
let dNumber = parseInt(d);
console.log("d > e:", dNumber > e);
console.log("d < e:", dNumber < e);
console.log("d >= e:", dNumber >= e);
console.log("d <= e:", dNumber <= e);
console.log("d === e:", dNumber === e);


//Subtract all the values
let subtraction = a - b - c -dNumber - e;
console.log("Result of the Subtraction:", subtraction);

//Multiply vraible a and c then divided by constant e
let MultiplyDivide = (a * c) / e;
console.log("The result of the multiplication then dividing;", MultiplyDivide);

//Display the exponent value of constant e raise to the power of variable c
let exponent = e ** c;
console.log("The exponent is:", exponent);

//reassign t he value of c.3 to constant e then display the result
// i use * becuase in my own understanding it should be three times the value of c
let Triplec = c * e;
console.log("The result is:", Triplec);