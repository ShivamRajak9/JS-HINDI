//const  tinderUsers = new Object() //singleton object
const tinderUsers ={} //non singleton object
 
tinderUsers.id = "123abc"
tinderUsers.name = "shivam"
tinderUsers.isLoggedIn = false

//console.log(tinderUsers)

const regularUsers = {
    email:"shivam@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shivam",
            lastname:"rajak"
        }
    }
}
//console.log(regularUsers.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj4 ={5:"e",6:"f"}

//objest add krne ke liye
//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4}
//console.log(obj3);

//database se jab
const user =[
     {

    id:1,
    email:"s@gmail.com"
},
     {

    id:1,
    email:"s@gmail.com"
},
     {

    id:1,
    email:"s@gmail.com"
},
     {

    id:1,
    email:"s@gmail.com"
},
]

user[1].email
console.log(tinderUsers);

console.log(Object.keys(tinderUsers));
console.log(Object.values(tinderUsers));
console.log(Object.entries(tinderUsers));

console.log(tinderUsers.hasOwnProperty("isLoggedIn"));