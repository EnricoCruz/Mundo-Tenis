var header = document.getElementById("headerBackground");

var nav = document.getElementsByTagName("nav")[0];
var asidePanel = document.getElementsByTagName("aside")[0]
var headerSpace = document.getElementsByTagName("header")[0].offsetHeight - nav.offsetHeight;

function cambioNav(){
  if (scrollY >= headerSpace -20){
    nav.setAttribute("class","fixed"); // nav panel
    asidePanel.setAttribute("class", "fixed"); // aside panel
  } else if (scrollY < headerSpace -20){
    nav.setAttribute("class", "absolute");
    asidePanel.setAttribute("class", "absolute");
  }
}

document.addEventListener('wheel', cambioNav, {passive: true})
document.addEventListener('mousemove', cambioNav, {passive:true})
