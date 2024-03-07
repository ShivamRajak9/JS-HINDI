//#premitive data Type

//7 types : String,number,boolean, null, undifined,symbol,BigInt

const id =Symbol("123")
const anotherId = Symbol("123")
console.log(id===anotherId);

const bigNumber = 232456789654321234n
console.log(typeof bigNumber);
//# Refrence Type(Non Primitive)

//Array, Object, Functions

const heros = ["IronMan", "Hulk","Thor"]
let myObj=
{
    name:"shivam",
    age:24,
}

const myFunction=function()
{
 console.log("hello world");
}

//*********************************************** */


//Stack(primitive), Heap(Non-primitive)

let myName = "Shivam"

let anotherName = myName
anotherName="sakshi"
console.log(myName);
console.log(anotherName);

let userOne =
{
    email:"user@google.com",
    upi:"user@ybl"
}
let usertwo =userOne
usertwo.email="shivam@google.com"

console.log(userOne.email);
console.log(usertwo.email);