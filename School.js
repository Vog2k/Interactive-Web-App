/*
//let or const || "var"- Globle variable Avoid using. 
//data types: number interger, decimal, float and string, boolean:True or false | null and undefined: object - complex data type
let name = "jack"; //'jack' single quotation
const age = 26;
const salary = 2000.00;

// output method for Javascript
console.log(typeof salary);
// template string
console.log(`Hello, ${name}`);
// backtake ``

// logic control - if
const isAdult = true;

// null and undefined
console.log(`The data type of null is ${typeof null}`);
console.log(`The data type of undefined is ${typeof undefined}`);
// null means we defined a varible and assign a value 'null' to it

// While 'undefined' means we define a variable, but never assign a value to it

let phone; //undefined
let address = null;// Dont know the value to this varibale.

const fruits = ['Smith', 12, false];
// add new data
fruits.push("apple");
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(fruits[2]);

// destructing method
let [smith, _, bool] = fruits;
console.log(smith, bool)
// use "_" to repersent the data you dont want

// object
const student = { 
firstName: "Jack",
lastName: "Bruh",
grade: 0.0
};
// Person is an entity and car is an entity
// Array notaion
student["IT5039 Client-Side Dev"] = 95.55;

// dot notation
student.postcode = 6014;
console.log(student);


//delete student.lastName;

const {lastName, postcode} = student;
console.log(lastName, postcode);

//if, while, for
//Student is an object, Fruits is an array

if(bool){
    console.log("You are able to vote now");
}else{
    console.log("Sike go home")
}

//while and for are used for completing the repeat tasks
// to get esum of 1 through 50


let count = 0;
let sum = 0;

while(count <=10){
    sum += count;
    count = count + 1;
}
 console.log(sum);


const fruit = ['Apple', "orange", "cherry"];

fruit.forEach(getEachFruit); 
//Call back function
//forEach is designed for retriving each data insdie an array

        function getEachFruit(data){
        console.log(data); //Function body
        }

fruit.forEach((data) => {
    console.log(data);
});

//arrow functions
let hey = (name) => {
    console.log(`Hey ${name}`);
};

hey("Tim");
//for(){}


//for loop is also used for getting each data in either an array or object

//class
//auth - 
class User {
   //You need at least a special method called a - constructor
   //using it for insitialization to all attributes of the class
   constructor(name, ID){
    //attributes
    this.name = name;
    this.ID = ID;
   }
   // method - not function
   sayHi(name){
    console.log(`Welcome to IT5039, ${name}`)
   }
}
//object is a specific item or thing insdie that class/group 
//each object is 'different' - in programming it means each
//item/thing repersents a copy (differnt) of the class

let jackSmith = new User("Jack Smith, 00659862");
let samSmith = new User("Sam Smith, 0077982");

jackSmith.sayHi("Kevin");

//calculator
/*class Calculator {
    constructor(num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }
}

//console.log()
class Calculator {
    add(num1, num2){
    return num1 + num2;
    }
    minus(num1, num2){
    return num1 - num2;
    }
    divide(num1, num2){
    return num1 / num2;
    }
    multiply(num1, num2){
    return num1 * num2;
    }

}
export {Calculator}

function addComment(message){
    console.log(`The comment ${message} was created`);
}
function deleteComment(message){
    console.log(`The comment ${message} was deleted`);
}
function editComment(message){
    console.log(`The comment ${message} was edited`);
}

export{addComment, editComment, deleteComment} */


const toDoInput = document.querySelector(".to-do input");
const toDoButton = document.querySelector(".add-item");
const listTasks = document.querySelector(".display-item")
const completedTasks = document.querySelector(".completed-tasks")

toDoButton.addEventListener("click", addItem);

function addItem(){
    if (toDoInput.value !=="" ){
        //!== empty value
        // == true
        // === false
        const li = document.createElement("li");
        li.innerHTML = `
        <input type="checkbox" class="list-item">
        ${toDoInput.value}`;   

        li.classList.add(`${toDoInput.value}`);

        listTasks.appendChild(li);
        toDoInput.value = "";
        } else{

            console.log("Please type in a task")
            alert("Please type in a task")
        
    }
}