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