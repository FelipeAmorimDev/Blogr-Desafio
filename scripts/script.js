const menuBtn = document.querySelector(".menu-hb");
const navMenu = document.querySelector(".header__nav")
const connectDropdown = document.querySelector(".connect")
const connectSubmenu = document.querySelector(".nav__submenu")

menuBtn.addEventListener("click", ({target}) =>{
  if(target.getAttribute("src") == "./images/icon-hamburger.svg"){
    target.setAttribute("src","./images/icon-close.svg")
  }else{
    target.setAttribute("src","./images/icon-hamburger.svg")
  }

  navMenu.classList.toggle("ativo")
  })

  connectDropdown.addEventListener("click", () => {
  toogleDropdown()
  })

  function toogleDropdown() {
    if(connectSubmenu.classList.contains("show")){
      connectSubmenu.classList.remove("show")
      connectDropdown.querySelector("a img").style = "transform: rotate(0deg)"
      }else{
      connectSubmenu.classList.add("show")
      connectDropdown.querySelector("a img").style = "transform: rotate(180deg)"
    }
  }

  window.onclick = function (event){
   

   if(!event.target.matches(".nav__submenu") && !event.target.matches(".teste")){
    if(connectSubmenu.classList.contains("show")){
      connectSubmenu.classList.remove("show")
      connectDropdown.querySelector("a img").style = "transform: rotate(0deg)"
    }
   }
  }