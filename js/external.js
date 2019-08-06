/*var a = 10;
b = 20
let c = a + b
document.write("The sum of " + a + " and " + b + " is " + c);*/

function greeting()
{
    alert("Good Morning");
}

function userName()
{
    var name;
    name=prompt("Enter your name.");
    document.getElementById("Name").innerHTML="Welcome, "+name;
}