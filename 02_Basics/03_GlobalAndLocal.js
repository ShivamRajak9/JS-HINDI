
//var c = 300

let a = 300

//block scope
if(true){
    let a  = 10
    const b = 20
   // console.log("Inner: ",a);
}

///console.log(a);
//console.log(b);
//console.log(c);

function one()
{
    const username = "shivam"
    function two()
    {
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
   // two()
}
//one()


if(true)
{
    const username = "shivam"
    if(username === "shivam")
    {
        const website = " Youtube"
       // console.log(username+website);
    }
   // console.log(website);
}
//console.log(username);


//++++++++++++++ Intresting +++++++++++++++++

console.log(addOne(5));
function addOne(num) {
    return num +1
}

addTwo(5)
const addTwo = function (num)
{
    return num + 2
}
