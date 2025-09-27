let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;


document.addEventListener("click",function (){//anywhere on webpage
    if(started == false){//to start only once + not "false"
        console.log("game is started");
        started = true ;
    }
});