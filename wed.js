

let n1 = [ 1,2,3,4,5];
let n2 = [6,7,8,9,10];
let n3 = [11,12,13,14,15];
n1 = n1.concat(n2,n3);
console.log(n1);


let a = [11,452,33];
a.sort();
console.log(a);

const numbers = [ 2,5,7,99,33,55,4];
numbers.splice(1,0,100,2000000);
console.log(numbers);

const fruits = ['apple', 'banana', 'grapes', 'mango'];
fruits.splice(2,1,'kiwi');
console.log(fruits);


const cars = ['Safari', 'venue', 'nexon', 'e-rickshaw', 'Lord Alto']
cars.splice(0,4,'Maybach');
console.log(cars);

const colour = ['red', 'blue', 'green', 'yellow'];
const slicedColour1 = colour.slice(2);
const slicedColour2 = colour.slice(1,3);
console.log(colour);
console.log(slicedColour1);
console.log(slicedColour2);

let obj = {
  name : 'Deepank',
  Age : ()=>{ 
   return this.name + ' will turn 24 years old in March'; 
  }
}
console.log(obj.Age());

