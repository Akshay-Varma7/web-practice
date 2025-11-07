let url = "http://universities.hipolabs.com/search?name=";//gives array of objects.each object an college
let btn = document.querySelector("button");
let inp = document.querySelector("input");

btn.addEventListener("click", async function(e) {//2nd arg is callback function
    let country = document.querySelector("input").value;
    let colArr = await getColleges(country);//as getColleges is async function it returns promise so we use await
    show(colArr);
});
//inp over btn as after typing in input when we press enter it doesnt trigger btn as we keydown entered for input box
inp.addEventListener("keydown", async function(e) {//2nd arg is callback function
    if(e.key == "Enter"){
        if(inp.value != ""){
            let country = document.querySelector("input").value;
            let colArr = await getColleges(country);//as getColleges is async function it returns promise so we use await
            show(colArr);
        }else{
        alert("enter your task");
       }
    }
    
});

function show(colArr){
    let list =document.querySelector("#list");
    list.innerText=""; //clears all <li> child elements too, because setting innerText replaces the element's entire content (it removes all child nodes, not just text)

    for(col of colArr){//ul(List) has list of li
        console.log(col.name);//col is object
        let li =document.createElement("li")
        li.innerText=col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url+country);//{data:[{}],status,headers....}
        return res.data; 
    }catch(e){
        console.log("error :",e);
        return [];// if error occurs return empty array
    }
};