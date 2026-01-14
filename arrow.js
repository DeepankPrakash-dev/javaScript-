let obj1 = {
    name: "Deepank",
    age : function umar(){
        return this.name;
    }
}
console.log(obj1.age());

let obj = {
    name: "Deepank",
    show(){
        const Age = ()=>{
            console.log (this.name + " is my name") ;
        }
        Age();
        
    }
} ;
obj.show() ;