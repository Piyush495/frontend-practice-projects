let inputBox=document.querySelector("#inp");

let btn=document.querySelectorAll("input");

let string='';

btn.forEach(button=>{
    button.addEventListener("click",(e)=>{
        let value=e.target.value;

        if(value=="="){
            try{
                string=eval(string);
                inputBox.value=string;
            }catch{
                inputBox.value="ERROR";
                string="";
            }
            
        }else if(value=="AC"){
            string="";
            inputBox.value=string;
        }else if(value=="DE"){
            string=string.slice(0,-1);
            inputBox.value=string;
        }else{
            string+=value;
            inputBox.value=string;
        }

    })
})