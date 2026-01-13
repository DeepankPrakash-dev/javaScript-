console.log("JS testing")

var a = 10;
let b = "deep";
let c = 20;


//console.log(a+b+c);

{
    var a = 55;     
    console.log(a);
}
console.log(a);

console.log(typeof a, typeof b, typeof c);


function demo() {
  if (true) {
    var a = 1;
    let b = 2;
  }
  console.log(a);
  console.log(b);
}

demo();

let x = "deepank";
let y = 5.55;
let z = undefined;
const p = true;
let q = null;
console.log(x ,y ,z ,p ,q); 
console.log(typeof x ,typeof y ,typeof z ,typeof p ,typeof q); 

let o = { 
    "job role" : "developer", company : "RTC", Salary : 20000, is_Jacked : true, name : "Deepank"
}

console.log(o);
(o).Salary = "100crore"
console.log(o);
