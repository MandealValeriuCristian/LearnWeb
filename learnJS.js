console.clear()
var num1=10; // integer
var num2=10.9; // decimal number
console.log(typeof(num1));
console.log(typeof(num2));

var num3 = 15;
var sum = num3 + num1 + num2;
console.log(sum); // addition

// substraction
var diff = num3 - num1;
console.log(diff);

// multiplication
var mul = num3 * num1;
console.log(mul);

// division
var div = num3 / num1;

var divByZero = num3 /0 ;
console.log(divByZero);
console.log(typeof(divByZero));

var mulByString = num3 * 'A';
console.log(mulByString);
console.log(typeof(mulByString));