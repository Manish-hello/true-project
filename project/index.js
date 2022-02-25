let page=document.querySelector(".top-text")
let ham=document.querySelector(".hm")
let nav=document.querySelector("#menu")
function link1(){
   page.textContent="HOME"
}
function link2(){
   page.textContent="NOTES";
}
function link3(){
   page.textContent="REFERANCE";
}
function link4(){
   page.textContent="ABOUT";
}
function link5(){
   page.textContent="UPLOADES";
}
function hamburger(){
   ham.classList.toggle("active");
   nav.classList.toggle("active");
}
