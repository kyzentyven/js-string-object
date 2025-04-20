const school = 'United Islamia Govt. High School';
console.log(school);
console.log(school.toLowerCase()); // lowercse
console.log(school.toUpperCase()); // uppercase

// uppercase: ABCD
// lowercase: abcd

const subject = 'Chemistry';
const book = 'chemistry';

if(subject.toLocaleLowerCase() === book.toLocaleLowerCase()){
    console.log('Khela hobe');
}
else{
    console.log('Target next semester');
}

const drink = ' water';
const liquid = ' water ';

if(drink.trim === liquid.trim){
    console.log('Real water');
}
else{
    console.log('Fake water');
}