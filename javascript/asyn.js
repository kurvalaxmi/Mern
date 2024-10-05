// async function displayInfo()
// {
//  x=await 10+20;
//  return x;
// }
// let result=displayInfo();
// result.then((data)=>{
//     console.log(data)
// })
// result.catch((error)=>{
//     console.log(error)
// })

// function greet(name, callback){
//     console.log(name)
//     callback();
//    }
//    function welcome()
//    {
//     console.log("this is a callback function")
//    }
//    greet("gnit", welcome);

class Employee
{
    constructor()
    {
     this.id=101;
     this.ename="Ajay"
    }
    displayInfo()
    {
        console.log(this.id+" "+this.ename);
    }
}
let emp=new Employee();
emp.displayInfo();