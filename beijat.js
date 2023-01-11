function navchanger(){
const navbar = document.getElementById('nav');
const navlinks =document.querySelector('.class')

window.addEventListener('scroll', function(event){
    event.preventDefault();
    if(window.scrollY >= 200 ){
        navbar.style.background="white"
        navlinks.style.color="black"
        // navbar.style.color="black"
    }else{
        navbar.style.background="transparent"
    }
})
}
navchanger()

// BURGER SLIDER 
function burgerslider(){
    const burger = document.querySelector('.burg')
const slide = document.querySelector('.nav-links')

burger.addEventListener("click", ()=>{
    slide.classList.toggle("navtoggle")
})

}
burgerslider();

 




































