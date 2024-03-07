const accountId=142223333
let accountEmail="shivam@gmail.com"
var accountPassword="12345"
accountCity="Indore"
let accountState;

accountEmail = "shivam@123gmail.com"
accountPassword="1234543"
accountCity="Benglore"
// accountId=2 Not Allowed

console.log(accountId);
/*
perfer not use to var because is of issues in block scope and functinal scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
