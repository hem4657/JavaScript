let inputText = document.getElementById("inputText");
let copyText = document.getElementById("copyText");


copytext.addEventListener("click",function(){

    if(inputText.value === ""){
        alert("Please enter your value : 😡");
    }
    else{
        navigator.clipboard.writeText(inputText.value);
        inputText.value = "";
    }
})

// let inputText = document.getElementById("inputText");
// let copyText = document.getElementById("copyText");

// copyText.addEventListener("click",function(){

//   if(inputText.value === ""){
//     alert("Please Enter your value : 😡");
//   }
//   else{
//     navigator.clipboard.writeText(inputText.value);
//     inputText.value = "";
//   }

// })