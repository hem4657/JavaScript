let scrolltop = document.getElementById("scrolltop");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        scrolltop.style.display = "block";
    }
    else{

        scrolltop.style.display = "none";
    }
});


scrolltop.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior : "smooth"
    })
});