const user = document.querySelector('#user');
const comp = document.querySelector('#comp');
const res=document.querySelector('.msg');
const reset=document.querySelector('.rst');
var audio1 = new Audio('win.mp3');
var audio2 = new Audio('lost.mp3');
var audio3 = new Audio('tie.mp3');

var winner=new Audio("winner.mp3");
var loser=new Audio("loser.mp3");
let countu=0;
let countc=0;
const choices = document.querySelectorAll('.choice');
const ComputerChoice=()=>{
    const a=["rock","paper","scissor"];
     const idx=Math.floor(Math.random()*3);
     return a[idx];
}
const clear=()=>{
    countc=0;
        countu=0;
        comp.innerText="0";
        user.innerText="0";
        res.innerText="Play Your Move";
        res.style.backgroundColor="#5e0301";
}
reset.addEventListener('click',clear);
const playGame=(userChoice,compChoice)=>{
    if(userChoice=="rock" && compChoice=="paper"){
        countc++;
        comp.innerText=countc;
        res.innerText="You Lost";
        res.style.backgroundColor="red";
        audio2.play();
    }
    else if(userChoice=="rock" && compChoice=="scissor"){
        countu++;
        user.innerText=countu;
        res.innerText="You Win";
        res.style.backgroundColor="green";
        audio1.play();
    }
    else if(userChoice=="paper" && compChoice=="rock"){
        countu++;
        user.innerText=countu;
        res.innerText="You Win"
        res.style.backgroundColor="green";
        audio1.play();
    }
    else if(userChoice=="paper" && compChoice=="scissor"){
        countc++;
        comp.innerText=countc;
        res.innerText="You Lost";
        res.style.backgroundColor="red";
        audio2.play();
    }
    else if(userChoice=="scissor" && compChoice=="rock"){
        countc++;
        comp.innerText=countc;
        res.innerText="You Lost";
        res.style.backgroundColor="red";
        audio2.play();
    }
    else if(userChoice=="scissor" && compChoice=="paper"){
        countu++;
        user.innerText=countu;
        res.innerText="You Win";
        res.style.backgroundColor="green";
        audio1.play();
    }
    else{
        console.log("tie");
        res.innerText="Tie";
        res.style.backgroundColor="blue";
        audio3.play();
    }
    if(countu==5){
        clear();
        winner.play();
        res.style.backgroundColor="orangered";
        res.style.color="black";
        res.innerText="CONGRATULATION YOU WON THE MATCH";
       }
       if(countc==5){
        clear();
        loser.play();
        res.style.backgroundColor="yellow";
        res.style.color="black";
        res.innerText="SORRY YOU LOST THE MATCH";
       }
    setTimeout(()=>{
        res.innerText="Play Your Move";
            res.style.backgroundColor="#5e0301";
            res.style.color="white";
    },1300);
}
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        const compChoice=ComputerChoice();
        playGame(userChoice,compChoice);
    })
});
//--------------------------------------------------

const img=document.querySelector('.logo');
const play=document.querySelector('.play');
setInterval(()=>{
    img.style.transform="scale(1.4)";
    img.style.transition="all 2s";
},1000);
setInterval(()=>{
    img.style.transform="scale(1)";
    img.style.transition="all 2s";
},2000);



setInterval(()=>{
    play.style.transform="scale(1.2)";
    play.style.transition="all 2s";
},1000);
setInterval(()=>{
    play.style.transform="scale(1)";
    play.style.transition="all 2s";
},2000);