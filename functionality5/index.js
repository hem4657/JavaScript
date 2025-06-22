let btn = document.getElementById("btn");
let text = document.getElementById("text");

btn.addEventListener("click", function(){
    if(btn.innerText == "🖤"){
        btn.innerText = "🧡";
        text.classList.add("text");
        Text.innerText = "Like";
    }
    else{
        btn.innerText = "🖤";
        text.classList.remove('text');
        Text.innerText = "";
    }
})