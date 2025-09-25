let btn = document.querySelector("button");

btn.addEventListener("click",function (){
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText =randomColor;//.style.color,backgroundColor ....

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;//all style values must be strings in the DOM API.
    //CSS parses the string, recognizes the rgb()
    console.log("color updated");
})
//RGB- 0 to 255
function getRandomColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color =`rgb(${red}, ${blue}, ${green})`;//"rgb( , , )"
    return color;
}