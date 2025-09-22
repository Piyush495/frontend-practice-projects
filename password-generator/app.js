let btn=document.querySelector("button");
let input=document.querySelector("input");
let icon=document.querySelector(".icon");

async function getPass(){
    btn.innerText="Generating Password...";
    btn.disabled=true;
    try{
       let res=await fetch("https://api.genratr.com/?length=16&uppercase&lowercase&special&numbers");
       let data=await res.json();
       input.value=data.password;
       }catch{
        input.value="No Password Found";
    }
    btn.innerText="Generate Password";
    btn.disabled=false;    
}

function copyPass(){
    input.select();
    document.execCommand("copy");
}

btn.addEventListener("click",getPass);
icon.addEventListener("click",copyPass);