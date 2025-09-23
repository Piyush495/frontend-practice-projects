const inputBox=document.querySelector(".inp");
const btnAdd=document.querySelector("#btns");
let list=document.querySelector("#list");




btnAdd.addEventListener("click",()=>{

    const taskText = inputBox.value.trim();

    if(taskText===''){
        alert("you must write something in the input field to add");
    }else{
        let li=document.createElement("li");
        

        let checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.classList.add("task-check");

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        taskSpan.classList.add("task-text");

        checkbox.addEventListener("click",()=>{
            taskSpan.classList.toggle("completed",checkbox.checked);
        })

        let delbtn=document.createElement("button");
        delbtn.innerText="\u00d7";
        delbtn.classList.add("delete");


        delbtn.addEventListener("click",()=>{
        list.removeChild(li);
        })

        li.appendChild(checkbox);
        li.appendChild(taskSpan);
        li.appendChild(delbtn);
        list.appendChild(li);
        
        }


    
    inputBox.value='';
})

