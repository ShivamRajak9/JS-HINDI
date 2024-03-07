const name = "shivam"
const repoCount = 50

//console.log(name+repoCount+"Value");

console.log(`Hello my name is ${name} and my reop count is${repoCount}`);


const gameName = new String("Shivam_Ra_ja_k")
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("i"));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-6,2)
console.log(anotherString);

const newString1 = "    Shivam   "
console.log(newString1);
console.log(newString1.trim());

const url = "http://shivam.com/shivam%20rajak"
console.log(url.replace("%20","_"));
console.log(url.includes("shivam"));

console.log(gameName.split("_"));

