let max = prompt("enter a number:");

const random = Math.floor(Math.random()*max)+1;
alert("let the game begin !");
let guess = prompt("guess the random");

while(true){
    if(guess.toLowerCase().trim() == "quit"){
        alert("thanks for your intrest");
        break;
    }
    if(guess == random){
        alert(`congrats, random is ${guess}`);
        break;
    }else if(guess > random){
        guess = prompt(`guess smaller than ${guess}`);
    }else if(guess < random){
        guess = prompt(`guess larger than ${guess}`);
    }
    //guess = prompt("wrong guess! try again")
}