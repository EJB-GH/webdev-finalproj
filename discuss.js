/*
Below is a use of the function called Reduce. Its a function that allows
you to condense/sum an array into a single value. This could be useful for totaling or 
summing values, thresholding. Think data science applications
*/
let arr = [12, 24, 48, 96];
let total = arr.reduce((acc, curr) => acc + curr, 0);

console.log("The output of the reduce function: " + total);

/*
Some security folks may also recognize stringify + parse as often used JS methods
this is super useful for working with APIs, or backend storage systems. This can be dangerous
if you do not sanitize your inputs
*/

const str = JSON.stringify({ "My data": 120942834 });
const obj = JSON.parse(str);
console.log(obj);
