//singleton

//object.create   ==constructor method
// object literals

const mySym = Symbol("Key")
const JsUsers = {
    name: "Shivam",
    "full name":"shivam rajak",
    [mySym]: "mykey1",
    age:18,
    location:"indore",
    email:"shivam@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

console.log(JsUsers.email);
console.log(JsUsers["email"]);
console.log(JsUsers["full name"]);
console.log(JsUsers[mySym]);

JsUsers.email = "shivam@gmail.com"
//Object.freeze(JsUsers)
JsUsers.email = "shivam@microsoft.com"

console.log(JsUsers);

JsUsers.greeting = function()
{
    console.log("Hello js users");
}
JsUsers.greetingTwo = function()
{
    console.log(`Hello js users, ${this.name}`);
}
console.log(JsUsers.greeting());
console.log(JsUsers.greetingTwo());