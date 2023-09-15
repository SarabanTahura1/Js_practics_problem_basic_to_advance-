/**you are given an array
 * var fruits = ['Apple', 'Banana', 'Orange' ];
 * a)Find the index of 'Banana' and replace 'Banana' with Mango.
 * b)Remove 'Orange' and add "Watermelon".
*/
//a
var fruits = ['Apple', 'Banana', 'Orange' ];
var indexOf = fruits.indexOf('Banana');
//console.log(indexOf);
fruits[1] = 'Mango';
//console.log(fruits);

//b
fruits.pop();
//console.log(fruits);
fruits.push('Watermelom');
console.log(fruits);