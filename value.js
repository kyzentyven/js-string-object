const person = {
    name: 'Kamrujjaman Tuhin',
    age: '22',
    profession: 'Developer',
    salary: 100000,
    married: true,
    'favorite places': ['Coxs Bazar', 'Saint Martin']
}

// Update value using dot notation
person.salary = 120000;

// Update value using bracket notation
person['age'] = 23;

console.log(person);

const profName = 'profession';
person[profName] = 'DevOPS';

console.log(person);