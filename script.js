"use strict";
//------------------ partie d'accueil------------------------
const title = document.querySelectorAll('main span');

for(let i=0; i<title.length; i++){
    setTimeout (()=>title[i].style.opacity ="1", 400*(1+i));
}
//----------------apropos de moi-------------------------------
const click = document.querySelectorAll(".slide-img");
click.forEach(img=>img.addEventListener("click",e=>{
    let pos = e.target.dataset.id<click.length ? parseInt(e.target.dataset.id)+1 : 1;
   document.querySelector("#slide-dot-"+pos).checked = true;
}));

// --------------------------competence--------------------------
const comp = document.querySelectorAll('#comp article');
comp.forEach(ar=>ar.addEventListener("click",e=>{
    e.target.closest("article").classList.toggle("hover");
}))

// ---------------------------expérience--------------------------
const exp = document.querySelectorAll('article.event');
const obsexp=  new IntersectionObserver (showpara, {threshold: 0.3});

exp.forEach(a=> obsexp.observe(a));

function showpara(entries) {
    entries.forEach(reveal)
}
function reveal (entry){
    if(entry.isIntersecting){
        entry.target.classList.add("fadeInUp")
        obsexp.unobserve(entry.target);
    }
}

//------------------projet-------------------

let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
if(document.querySelector(".show-container")){
    show(1, 0);
    show(1, 1);
}


function suivant(n, no) {
  show(slideIndex[no] += n, no);
}

function show(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}