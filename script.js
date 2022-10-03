const menu_btn = document.querySelector('.menu_btn')
const menu = document.querySelector(".nav_links")
const btn_icon = document.querySelector("#btn_icon")

menu_btn.addEventListener("click", () =>{
    if(menu.classList.contains("hide_menu")){
        menu.classList.remove("hide_menu")
        btn_icon.src = "images/icon-close.svg"
    } else {
        menu.classList.add("hide_menu")
        btn_icon.src = "images/icon-hamburger.svg"
    }
})