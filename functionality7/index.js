let btn = document.getElementById("btn");
let text = document.getElementById("text");

btn.addEventListener("click", ()=>{
    if(btn.innerText == "Add To Cart"){
        btn.innerText = "Item Added To Cart !";
        text.classList.add("text");
        text.innerText = "Item Added To Cart !";    
    }
    else{
        btn.innerText = "Add To Cart";
        text.classList.remove("text");
        text.innerText = "";
    }
})