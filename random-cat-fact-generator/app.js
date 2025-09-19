
let url="https://catfact.ninja/fact";
let para=document.querySelector("p");
async function getFacts() {
    btn.innerText="Loading Fact...";
    try{
    let res1=await fetch(url);
    let data1=await res1.json();
    para.innerText=data1.fact;
    btn.innerText="New Fact";
    }catch(err){
        para.innerText="No Fact Found";
    }
    
}

let btn=document.querySelector("button");
btn.addEventListener("click",getFacts);