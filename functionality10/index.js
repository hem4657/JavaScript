let text = document.getElementById("text");
let copytext = document.getElementById("copytext");


copytext.addEventListener("click", function(){

    navigator.clipboard.writeText(text.innerText);
});