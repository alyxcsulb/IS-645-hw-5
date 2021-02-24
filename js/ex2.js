// a.	An array of odd numbers
// b.	An array of numbers divisible by 2 or 5
// c.	An array of numbers divisible by 3 squared
// d.	The sum of the following: square the numbers divisible by 5

let my_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let odd_array = my_array.filter(n => n%2);
let b_array = my_array.filter (x => (x % 2 == 0) || (x % 5 == 0));
let c_array = my_array.filter ( x => x % 3 == 0).map(x => x * x);
let d_array = my_array.filter( x => x % 5 == 0).map(x => x * x).reduce((a,b) => a + b,0);

console.log(`An array of odd numbers are: ${odd_array}`);
console.log(`An array of numbers divisble by 2 or 5 are: ${b_array}`);
console.log(`An array of numbers divisible by 3 squared are: ${c_array}`);
console.log(`The sum of the following: square the numnbers divisible by 5 are: ${d_array}`);



