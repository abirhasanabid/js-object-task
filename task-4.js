// Count the number of properties.

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

let count1 =0;

for (const propName in student){
    count1++
}
console.log(count1);


/**
 * making this object in an array and using for loop to count the property/keyname
 */

const newObj = Object.keys(student);
let count = 0;

for (const prop of newObj){
    count++
}
console.log(count);