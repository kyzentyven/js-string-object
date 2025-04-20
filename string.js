// Different ways to declare a string
const country = 'Bangladesh';
const division = "Dhaka";
const district = `Madaripur`;
const thana = new String('Madaripur'); // Used in special purpose

console.log(typeof country);
console.log(typeof division);
console.log(typeof district);
console.log(thana);

// Array
const numbers =  [10, 15, 35, 22, 66, 30];
console.log(numbers);
console.log(numbers.length);
numbers[0] = 16;
console.log(numbers);

// String
const capital = 'Dhaka';
console.log(capital);
console.log(capital.length);
console.log(capital[2]);
capital[1] = 'q'; // String is immutable
console.log(capital);