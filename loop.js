const mobile = {
    brand: 'Samsung',
    price: 85000,
    color: 'Black',
    camera: '200mp',
    isNew: true
}

// for of: Used in array
// for in: Used in object
for(const prop in mobile){
    console.log(prop);
    console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key, ':', mobile[key]);
}