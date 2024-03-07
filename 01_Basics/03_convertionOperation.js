let score ="33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

let score1 = null
console.log(typeof score1);
console.log(typeof(score1));

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

let num=undefined
console.log(typeof num);
console.log(typeof(num));

let valueInNumber2 = Number(num)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let score2 = true
console.log(typeof score2);
console.log(typeof(score2));

let valueInNumber3 = Number(score2)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

//"33" =33
//"33abc" = NaN
//true = 1; false = 0


let  isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

let  isLoggedIn1 = ""
let booleanisLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanisLoggedIn1);

let  isLoggedIn2 = "shivam"
let booleanisLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanisLoggedIn2);

//1 = true; 0=false
//"" = false
//"shivam" = true


let sumNumber = 33

let stringNumber = String(sumNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//**************Operations *****************/

let value  = 3
let negValue = -value
console.log(negValue);


let str1 = "hello"
let str2 = "shivam"
let str3 = str1+str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");

// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
