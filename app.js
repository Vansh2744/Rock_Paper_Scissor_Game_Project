const start=document.querySelector('.start');
setInterval(()=>{
    start.style.transform="scale(1.4)";
    start.style.transition="all 2s";
},1000);
setInterval(()=>{
    start.style.transform="scale(1)";
    start.style.transition="all 2s";
},2000);

