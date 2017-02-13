var header = document.getElementById("headerBackground");

var nav = document.getElementsByTagName("nav")[0];
var headerSpace = document.getElementsByTagName("header")[0].outsetHeight - nav.outsetHeight;

function headerTopPosition(){
  header.style.backgroundPositionY= (-window.scrollY/4) + "px";
  header.style.filter= "blur("  + (window.scrollY/70) + "px)";
}

function cambioNav(){
  if (scrollY >= nav.offsetHeight){
    nav.style.position = "fixed";
  }
}
