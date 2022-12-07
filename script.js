const burger = document.querySelector(".header__burger")
const menu = document.querySelector(".header__menu")
const body = document.body
burger.addEventListener('click', ()=>{
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('lock')
})