const questions=["1.Which is the largest animal int the world?","Which is the smallest country in the world","Which is the largest desert in the world","Which is the smallest continent in the world"];
const opt1=["Giraffe","Vatican city","Kalahari","Asia"]
const opt2=["Blue Whale","Bhutan","Gobi","Australia"]
const opt3=["Elephant","Nepal","Sahara","Arctic"]
const opt4=["Tiger","Sri Lanka","Thar","Africa"]
const answers=["Blue Whale","Vatican city","Sahara","Australia"]

let p=document.querySelector("p");
let option1=document.querySelector("#one");
let option2=document.querySelector("#two");
let option3=document.querySelector("#three");
let option4=document.querySelector("#four");
let btn=document.querySelectorAll(".btn");
let submit=document.querySelector("#submit");
let container=document.querySelector(".container");
let score=0;
let index=0;
let answered=false;

p.innerText=questions[index];
option1.innerHTML=opt1[index];
option2.innerHTML=opt2[index];
option3.innerHTML=opt3[index];
option4.innerHTML=opt4[index];

btn.forEach((option)=>{
  option.addEventListener("click",()=>{
    answered=true;

    btn.forEach((b)=>{
      b.disabled=true
      b.classList.add("disabled");
    });
    
      let selectedAnswer=option.innerText;
      let correctAnswer=answers[index];
      if(selectedAnswer===correctAnswer){
        option.classList.add("right");
        score++;
      }else{
        option.classList.add("wrong");
      }

  })
})


submit.addEventListener("click",()=>{
  if(!answered){
    alert("Select one Option before next");
    return
  }else{
    answered=false;
  }

  btn.forEach((b)=>{b.disabled=false
    b.classList.remove("disabled");
    b.classList.remove("wrong");
    b.classList.remove("right");
  });
  
  
    index++;
    if(index<questions.length){
        p.innerText=questions[index];
    option1.innerHTML=opt1[index];
    option2.innerHTML=opt2[index];
    option3.innerHTML=opt3[index];
    option4.innerHTML=opt4[index];
    }else{
      container.classList.add("completed");
      container.innerHTML=`<h2>Quiz Completed</h2><p>Your score is ${score} out of ${questions.length}</p>`;
    }
    

})

