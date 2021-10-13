
window.addEventListener("scroll",function (x){
    let menu = document.getElementById("site-header");
    let logo = document.getElementById("logo-c")
    if (window.pageYOffset!=0){
        menu.classList.add("fixed")
        console.log(logo.style)
    }else{
        menu.classList.remove("fixed")
    }

})