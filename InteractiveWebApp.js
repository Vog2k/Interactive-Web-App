let result=document.getElementById("inputText");

//Current line will take the given number from the user ('number) this is the users desierd number
let calculate=(number)=>{
    result.value+=number;

}

//Oringnally i used var and const but had no luck
let Result=()=>{
    try{
        result.value=eval(result.value)
    }
    catch(err){
        alert("Enter A Valid Equation")
    }
}

function clr(){
    result.value="";
}

function del(){
    //This line will erase th last number the user has entered. 
    result.value=result.value.slice(0, -1);
}

/*var menuItems = document.querySelectorAll('.menuItem');
menuItems[0].classList.add('hidden');
menuItems[0].classList.remove('hidden');
*/
function showTime(){
    var date = new Date();
    //Hour
    var h = date.getHours(); // 0 - 23
    //Minute
    var m = date.getMinutes(); // 0 - 59
    //Second
    var s = date.getSeconds(); // 0 - 59

    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    // To see if it is 12 in the morning or 12 at night 
    //Boolean is chosen
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    //Steven just taught us this information above when using the ? sign
    var time = h + ":" + m + ":" + s + " " + session;
    //Will display for example 05:02:20

    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    //This determines how fact you want the time to skip , every two seconds would be 2000
    setTimeout(showTime, 1000);
    
}

showTime();