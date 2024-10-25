let userSeq = [];
let gameSeq = [];

let  started = false;
let level = 0;

let btns = ["red", "yellow", "green", "purple"];
h2 = document.querySelector('h2');

document.addEventListener("keypress", function(){
 if(started == false){
    console.log("game started");
    started  = true;
    levelUp();
 }
 });

 function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },250);
}

 function levelUp(){
   level++;
   h2.innerText = `level ${level}`;
   let ranIdx = Math.floor(Math.random*3);
   let ranColor = btns[ranIdx];
   let ranBtn = document.querySelector(`.${ranColor}`)
   console.log(ranIdx);
   console.log(ranColor);
   console.log(ranBtn);
 
   btnFlash(ranBtn); //button flash
   
   
}




