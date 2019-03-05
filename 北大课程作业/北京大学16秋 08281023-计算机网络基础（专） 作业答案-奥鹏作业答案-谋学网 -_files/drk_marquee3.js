var drk_colee_left2=document.getElementById("drk_colee_left2");var drk_colee_left1=document.getElementById("drk_colee_left1");var drk_colee_left0=document.getElementById("drk_colee_left0");drk_colee_left0.style.width=document.getElementById("drk_ledtd").clientWidth-10;drk_colee_left2.innerHTML=drk_colee_left1.innerHTML
function drk_Marquee3(){if(drk_colee_left2.offsetWidth- drk_colee_left0.scrollLeft<=0)
drk_colee_left0.scrollLeft-=drk_colee_left1.offsetWidth
else{drk_colee_left0.scrollLeft++}}
var drk_MyMar3=setInterval(drk_Marquee3,speed)
drk_colee_left0.onmouseover=function(){clearInterval(drk_MyMar3)}
drk_colee_left0.onmouseout=function(){drk_MyMar3=setInterval(drk_Marquee3,speed)}