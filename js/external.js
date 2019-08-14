/*var a = 10;
b = 20
let c = a + b
document.write("The sum of " + a + " and " + b + " is " + c);*/

function greeting() {
    alert("Good Morning");
}

/*function userName()
{
    var name;
    name=prompt("Enter your name.");
    document.getElementById("Name").innerHTML="Welcome, "+name;
}*/
function oddEven() {
    var num;
    num = parseInt(prompt("Enter a number:"));
    if (num % 2 == 0) {
        alert(num + " is even.")

    }
    else {
        alert(num + " is odd.")
    }
}
function christmas() {
    var month = "December";
    var day = "25";
    if (month == "December" && day == "25") {
        alert("Hurray!Merry Christmas");
    }
    else if (month == "December" && (day >= 20 || day <= 30)) {
        alert("Christmas is coming");
    }
    else {
        alert("Normal Days");
    }
}
function mulTable() {
    var num;
    num = parseInt(prompt("Enter a number"));
    for (i = 0; i <= 10; i++) {
        mul = num * i;
        document.getElementById("mulTable").innerHTML += num + " * " + i + " = " + mul + "<br/>";
    }
}
function factorial() {
    var num;
    fact = 1;
    num = parseInt(prompt("Enter a number"));
    while (num > 0) {
        fact = fact * num;
        num--;
        document.getElementById("factorial").innerHTML = fact + "<br/>";
    }
}
function validation() {

    var username, password;
    //retrieve data from the form
    username = LoginForm.name.value;
    password = LoginForm.password.value;
    //check if all fields are blank
    if (username =="" && password =="")
    {
        document.getElementById("error").innerHTML="All fields are required";
        return false;
    }
    
}

function currentDate()
{
    var day,date,month,year;
    // d object of Date class
    d= new Date();
    day=d.getDay();//0-6
    date=d.getDate();//1-31
    month=d.getMonth();//0-11
    year=d.getFullYear();

    if(day==0) day="Sunday";
    else if(day==1) day="Monday";
    else if(day==2) day="Tuesday";
    else if(day==3) day="Wednesday";
    else if(day==4) day="Thursday";
    else if(day==5) day="Friday";
    else day="Saturday";

    if(month==0) month="January";
    else if(month==1) month="February";
    else if(month==2) month="March";
    else if(month==3) month="April";
    else if(month==4) month="May";
    else if(month==5) month="June";
    else if(month==6) month="July";
    else if(month==7) month="August";
    else if(month==8) month="September";
    else if(month==9) month="October";
    else if(month==10) month="November";
    else month="December";

    document.getElementById("currentDate").innerHTML=day+","+date+""+month+""+year;
    //calling the refresh time
    refreshTime();
    
    function currentTime()
    {
        var hh,mm,ss,ampm;
        t=new Date();
        hh=t.getHours();
        mm=t.getMinutes();
        ss=t.getSeconds();
        ampm=hh<=11?"AM":"PM";
        document.getElementById("hh").innerHTML=hh;
        document.getElementById("mm").innerHTML=mm;
        document.getElementById("ss").innerHTML=ss+""+ampm;

    }

    function refreshTime()
    {
        setInterval(currentTime,1000);
    }

}
