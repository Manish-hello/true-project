let box=document.querySelector(".main-box");
let shadow="";
for(let i=0;i<300;i++){
	shadow+=(shadow? ",":"")+ i*1+"px " +i*1+"px 0 #2F0743";
}
box.style.boxShadow=shadow;
let page=document.querySelector(".pages")
function link1(){
   page.textContent="Your are inside the note.";
}
function link2(){
   page.textContent="Your are inside the referance.";
}
function link3(){
   page.textContent="Your are inside the about.";
}
function link4(){
   page.textContent="Your are inside the uplodes.";
}