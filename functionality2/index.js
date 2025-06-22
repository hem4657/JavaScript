let toogle = document.getElementById("btn");
let body = document.getElementById("body");
//console.log(toogle);


toogle.addEventListener("click", function(){
    body.classList.add("body");
    document.body.classList.toogle("body");
    
})