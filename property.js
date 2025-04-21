const person = {
    name: 'Kamrujjaman Tuhin',
    age: '22',
    profession: 'Developer',
    salary: 100000,
    married: true,
    'favorite places': ['Coxs Bazar', 'Saint Martin']
}
console.log(person);

// dot notation
console.log(person.profession);

const income = person.salary;
console.log(income);

// bracket notation
console.log(person['age']);

const personAge = person['age'];
console.log(personAge);

console.log(person.'favourite places'); // Error

console.log(person['favorite places']);