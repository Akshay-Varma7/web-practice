let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","green","purple"];//class names

let started = false;
let level = 0;

let i = document.querySelector("i");

document.addEventListener("click",function (){//anywhere on webpage
    if(started == false){//to start only once + not "false"
        console.log("game is started");
        started = true ;

        levelUp();
    }
});

function btnFlash(btn){
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

    btnFlash(randomBtn);
}