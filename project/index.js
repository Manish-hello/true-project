let box=document.querySelector(".main-box");
let shadow="";
for(let i=0;i<300;i++){
	shadow+=(shadow? ",":"")+ i*1+"px " +i*1+"px 0 #2F0743";
}
box.style.boxShadow=shadow;
let page=document.querySelector(".top-text")
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