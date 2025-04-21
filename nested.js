const college = {
    name: 'VNC',
    class: ['11', '12'],
    events: ['Science Fair', '21 February', '16 December'],
    unique: {
        color: 'blue',
        result: {
            gpa: '5.00',
            merit: 'Top'
        }
    }
}

console.log(college.name);
console.log(college.unique.color);

console.log(college.unique.result.gpa);

college.unique.result.merit = 'Top most in Bangladesh';
console.log(college['unique'].result.merit);

college.events[1] = '7 March';
console.log(college.events[1]);

delete college.class;
console.log(college);