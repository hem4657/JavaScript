let button = document.getElementById("show-btn");
let inputText = document.getElementById("inputText");
let taskList = document.getElementById("task-list")

let tasks = [];

button.addEventListener("click", addTask);

function renderTask(){
    taskList.innerHTML= "";

tasks.forEach((obj,index)=>{

    let li = document.createElement("li");

    if(obj.isEditing){
        let input = document.createElement("input");
    }
})
    
}

function addTask(){
   let text = inputText.value.trim();
    if(text === ""){
        alert("please enter your value");
    }
    else{
        tasks.push(text);
        inputText.value = "";
    }
}