function sayMyName ()
{
    console.log("S");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
    console.log("m");
    
}

//sayMyName()

// function addTwoNumber(number1,number2)
// {
//     console.log(number1+number2);
// }


function addTwoNumber(number1,number2)
{
    // let result = number1+number2
    // return result

    return number1+number2
}
const result = addTwoNumber(2,3)
console.log("Result:", result);


function loginUserMessage(username="sam"){
    if(!username)
    {
        console.log("Please enter a user name");
        return
    }
    return`${username} just logged in`
}

//console.log(loginUserMessage("shivam"));
//console.log(loginUserMessage());
console.log(loginUserMessage("shivam"));