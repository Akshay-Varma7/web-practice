//as we design - we shld do as the flow of game
//while changing any existing var names - highlight and see where they exist
let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","purple"];//class names

let started = false;
let level = 0;

let i = document.querySelector("i");
//1
document.addEventListener("click",function (){//anywhere on webpage
    if(started == false){//to start only once + not "false"
        console.log("game is started");
        started = true ;

        levelUp();
    }
});
//2
function gameFlash(btn){//used 1. random flash(computer) + 2. seq flash (computer)
    btn.classList.add("flash");//shld exist in css
    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}

function levelUp(){
    level++;
    i.innerText =`level ${level}`

    //random btn choose
    let randomIdx = Math.floor(Math.random()*4);// 0 to 3
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);// . for class+ `` string 

    gameSeq.push(randomColor);
    gameFlash(randomBtn);
}
//3
function btnPress(){
    //this helps us to find the btn for which event triggered
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns();
}
function userFlash(btn){//used 1.user click flash
    btn.classList.add("userFlash");//shld exist in css
    setTimeout(function (){
        btn.classList.remove("userFlash");
    },250);
}

let allBtns = document.querySelectorAll(".btn");//collection
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
//4 
function checkAns(){//needed after we press the btn
    let idx = level-1;//level is global//tracking the last is enough

    if(gameSeq[idx] == userSeq[idx]){
        console.log("same value");
    }else{
        i.innerText =`Game Over! Press any key to start.`;
    }
}