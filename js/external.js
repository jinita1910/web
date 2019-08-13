/*var a = 10;
b = 20
let c = a + b
document.write("The sum of " + a + " and " + b + " is " + c);*/

function greeting()
{
    alert("Good Morning");
}

/*function userName()
{
    var name;
    name=prompt("Enter your name.");
    document.getElementById("Name").innerHTML="Welcome, "+name;
}*/
function oddEven()
{
    var num;
    num=parseInt(prompt("Enter a number:"));
    if(num%2==0)
    {
        alert(num+ " is even.")
    
    }
    else
    {
        alert(num+" is odd.")
    }
}
function christmas()
{
    var month="December";
    var day="25";
    if(month=="December" && day=="25")
    {
        alert("Hurray!Merry Christmas");
    }
    else if(month=="December" && (day>=20 || day<=30)){
        alert("Christmas is coming");
    }
    else{
        alert("Normal Days");
    }
}
function mulTable()
{
    var num;
    num=parseInt(prompt("Enter a number"));
    for(i=0;i<=10;i++)
    {
        mul=num*i;
        document.getElementById("mulTable").innerHTML+=num +" * " +i + " = " +mul +"<br/>";
    }
}
function factorial()
{
    var num;
    fact=1;
    num=parseInt(prompt("Enter a number"));
    while(num>0)
    {
        fact=fact*num;
        num--;
        document.getElementById("factorial").innerHTML= fact+"<br/>";
    }
}
function validation()
{
    
    var username,password;
    //retrieve data from the form
    username=loginForm.name.value;
    password=loginForm.password.value;
    //check if all fields are blank
    if(username="" && password="")
    {
        document.getElementById("error").innerHTML="All fields are required";
        return false;
    }
    return
}
