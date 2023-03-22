let span1 = document.querySelector(".skillSpan1");
let span2 = document.querySelector(".skillSpan2");
let span3 = document.querySelector(".skillSpan3");
let span4 = document.querySelector(".skillSpan4");
let span5 = document.querySelector(".skillSpan5");
  
let num = 0;
setInterval(function(){
    if(num == 90){
        clearInterval();
    }
    else{
        num += 1;
        span1.innerHTML = num;
    }
},100)

let num1 = 0;
setInterval(function(){
    if(num1 == 85){
        clearInterval();
    }
    else{
        num1 += 1;
        span2.innerHTML = num1;
    }
},100)


let num2 = 0;
setInterval(function(){
    if(num2 == 80){
        clearInterval();
    }
    else{
        num2 += 1;
        span3.innerHTML = num;
    }
},100)


let num3 = 0;
setInterval(function(){
    if(num3 == 85){
        clearInterval();
    }
    else{
        num3 += 1;
        span4.innerHTML = num3;
    }
},100)

let num4 = 0;
setInterval(function(){
    if(num4 == 80){
        clearInterval();
    }
    else{
        num4 += 1;
        span5.innerHTML = num4;
    }
},100)