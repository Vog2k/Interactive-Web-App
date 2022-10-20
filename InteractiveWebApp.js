let result=document.getElementById("inputText");

//Current line will take the given number from the user ('number) this is the users desierd number
let calculate=(number)=>{
    result.value+=number;

}

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

//NEED TO FIND OUT HOW TO IMPEMENT % 
//ADDED "," FROM LARGER AMOUNTS
//

/*let btnClose = document.querySelector('#close');

let myTab;

btnClose.addEventListener('click', ()=>{
    if(myTab) myTab.close();
}); */

let btnClose = document.querySelector('#close');

let myTab;

btnClose.addEventListener('click', ()=>{
    if(myTab) myTab.close();
}); 

let myWindow;

function openWin() {
  myWindow = window.open("", "", "width=200,height=100");
}

function closeWin() {
  myWindow.close('container');
}