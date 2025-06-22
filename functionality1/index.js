// let button = document.getElementById("btn");
// let body= document.getElementById("body");
// let text = document.getElementById("result");
// // console.log(btn);
// // console.log(body);
// // console.log(result);

// button.addEventListener("click", function(){
// let age = prompt("enter your age: ");
// if(age >= 18){
//     text.innerText = `you are eligible for voie : $(age)`;
//     body.style.backgroundColor = "green";
// }
// else{
//     text.innerText = `you are not eligible for vote : $(age)`;
//     body.style.backgroundColor = "yellow";
// }
// })

let button = document.getElementById("btn");
let text = document.getElementById("result");
let body = document.getElementById("body");


button.addEventListener("click", ()=>{
    let marks = prompt("marks for fail or pass: ");
    if(marks >= 85){
        text.innerText = `you are enter for next class : $(marks)`;
        body.style.backgroundColor = "skyblue";
    }
    else{
        text.innerText = `you are not enter for next class: $(marks)`;
        body.style.backgroundColor = "red";
    }
})