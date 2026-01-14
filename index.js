console.log("JS testing")

var c = 10;
let a = "deep";
let b = 20;

console.log(a+b+c);

{
    var c = 55;     
    console.log(a);
}
console.log(a);

console.log(typeof a, typeof b, typeof c);




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


let h = {
    name : "Deep",
    Country : "UK",
    Car : "venue",
    "Job posting" : "Albania",
    New_role : "dev"

}

console.log(h);


let Round_the_clock = {
    Name : "RTC",
    Employees : 1000,
    turnover : "1000000crore",
    is_active : true,
    is_bad : false,
    working_hours : "9 to 5:30" 
}
console.log(Round_the_clock);
