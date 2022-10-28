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
