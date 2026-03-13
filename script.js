AOS.init({
duration:1000
})

const menu=document.getElementById("mobile-menu")
const nav=document.querySelector(".nav-list")

menu.addEventListener("click",()=>{
nav.classList.toggle("active")
})
