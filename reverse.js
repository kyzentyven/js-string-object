const sentence = 'I am learning Web Development.'
console.log(sentence);

let reverse = '';
for(const letter of sentence){
    reverse = letter + reverse;
}
console.log(reverse);

let rev = '';
for(let i = 0; i < sentence.length; i++){
    const letter = sentence[i];
    rev = letter + rev;
}
console.log(rev);

const reversedSentence = sentence.split('').reverse().join('');
console.log(reversedSentence);