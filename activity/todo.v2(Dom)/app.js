let btn = document.querySelector("button");//only 1
let ul = document.querySelector("ul");//only 1
let inp = document.querySelector("input");//only 1
//action in form while input and change mostly

btn.addEventListener("click",function (){
    if(inp.value != ""){
        let item = document.createElement("li");//declared here
        item.innerText = inp.value;
    
        let delBtn = document.createElement("button");
        delBtn.innerText ="delete";
        delBtn.classList.add("delete");

        item.appendChild(delBtn);
        ul.appendChild(item);//adding whole(li+button) to ul
        inp.value = "";//reset
    }else{
        alert("enter your task");
    }
});
inp.addEventListener("keydown",function(e){
    if(e.key == "Enter"){
        if(inp.value != ""){
            let item = document.createElement("li");//declared here
            item.innerText = inp.value;
    
            let delBtn = document.createElement("button");
            delBtn.innerText ="delete";
            delBtn.classList.add("delete");

            item.appendChild(delBtn);
            ul.appendChild(item);//adding whole(li+button) to ul
            inp.value = "";//reset
    }else{
        alert("enter your task");
    }
    }
})

ul.addEventListener("click",function (e){
    if(e.target.nodeName == "BUTTON"){
        let listItem = e.target.parentElement;//captured the list of particular buttons parent that was clicked
        listItem.remove();
    }
});
/*let delBtns = document.querySelectorAll(".delete");//collection
for(delBtn of delBtns){//iterates all buttons

    delBtn.addEventListener("click",function (){//in that iteration if click then trigger
        let par = this.parentElement;//navigation
        console.log(par);
        par.remove();
    });
}*/
//here the eventlisteners get added to only existing elements not the ones added in browser