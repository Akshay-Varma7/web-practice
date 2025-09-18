let todo = [];//to store tasks

let add = prompt("add your first task");
todo.push(add);
let req = prompt("please enter your request");

while(true){//works for ever-(no segmentation fault) maybe waiting 
    if(req.toLowerCase().trim() == "quit"){
        console.log("quitting app");
        break;
    }
    if(req.toLowerCase().trim() == "list"){
        console.log("----------");
        for(let i=0;i<todo.length;i++){
            console.log(i+1,". ",todo[i]);
        }
        console.log("----------");
    }else if(req.toLowerCase().trim() == "add"){
        let task = prompt("enter the task");// intializes in every iteration declared in while
        todo.push(task);
        console.log(`${task} is added"`)
    }else if(req.toLowerCase().trim() == "delete"){
        let finished = prompt("enter completed task");
        let idx = todo.indexOf(finished);
        if(idx == -1){
            console.log("The following task has not been added");
        }else{
            todo.splice(idx,1);//remove 1 element at idx
            console.log(`${finished} is completed`);
        }
    }
    req = prompt("enter your request");
}