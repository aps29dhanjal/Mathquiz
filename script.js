let a1=[];
let b1=[];
let final=[] ;
let score=0;
let a=0;
let b=0;
let button=document.getElementById("submit");
let blocks=document.getElementsByClassName("block");
let easy=document.getElementById("easy");
let medium=document.getElementById("medium");
let hard =document.getElementById("hard");
let multiply=document.getElementById("multiply");
let subtraction=document.getElementById("subtraction");
let addition =document.getElementById("addition");
let symbol="";

function getnum(){
  if(subtraction.checked){
    symbol="-";
    console.log(symbol);
        if(easy.checked){
        a=Math.floor(Math.random()*10) +15;
        b=Math.floor(Math.random()*10) +5;
        }
        else if(medium.checked){
            a=Math.floor(Math.random()*40) +1;
            b=Math.floor(Math.random()*40) +1;
        }
        else{
            a=Math.floor(Math.random()*1000) +1;
            b=Math.floor(Math.random()*1000) +1;
        }
    }
    else if (multiply.checked){
        symbol="*";
        console.log(symbol);
        if(easy.checked){
            a=Math.floor(Math.random()*10) +1;
            b=Math.floor(Math.random()*10) +1;
        }
        else if(medium.checked){
            a=Math.floor(Math.random()*30) +10;
            b=Math.floor(Math.random()*10) +1;
        }
        else{
            a=Math.floor(Math.random()*30) +10;
            b=Math.floor(Math.random()*20) +10;
        }
    }
    else{
        symbol="+";
        console.log(symbol);
        if(medium.checked){
            a=Math.floor(Math.random()*50) +10;
            b=Math.floor(Math.random()*50) +10;
        }
        else if(hard.checked){
            a=Math.floor(Math.random()*1000) +1;
            b=Math.floor(Math.random()*1000) +1;
        }
        else{
            a=Math.floor(Math.random()*10) +1;
            b=Math.floor(Math.random()*10) +1;
        }
    }
}
 function addnew (){
    button.innerText="Submit";
for(let i=0;i<10;i++){
    getnum();
    a1[i]=a;
    b1[i]=b;
    switch (symbol){
        case "+":final[i]=b1[i]+a1[i];
        console.log(symbol+"symbol");
        break;
        case "-":
        final[i]=a1[i]-b1[i];
        console.log(symbol+"symbol");
        break;
        case "*":final[i]=b1[i]*a1[i];
        console.log(symbol+"symbol");
        break;
    }
   
    blocks[i].children[0].innerText= a1[i];
    blocks[i].children[2].innerText=b1[i];
    blocks[i].children[1].innerText= symbol;
    blocks[i].children[4].children[0].value="";
    blocks[i].lastElementChild.innerText="";
    blocks[i].lastElementChild.removeAttribute("style");

    score=0;
    document.getElementById("score").innerText="Your Score";
    button.disabled=false;
}}
addnew();


button.addEventListener('click',()=>{
    for(let i=0;i<10;i++){
        if(blocks[i].children[4].children[0].value==final[i]){
            blocks[i].lastElementChild.setAttribute("style","background-image: url(check-mark.png)");
            score++;
        }
        else{
            blocks[i].lastElementChild.setAttribute("style","background-color: red");
            blocks[i].lastElementChild.innerText=final[i];
        }
    }
    document.getElementById("score").innerText="Score "+score+"/10";;

    button.disabled=true;
    button.innerText="Click new";
})


/*
let a=document.getElementById("q1");
let b=document.getElementById("q2");
let result=document.getElementById("result");
let first =Math.floor(Math.random()*20) +1;
let second =Math.floor(Math.random()*20) +1;
     a.innerText =first;
     b.innerText =second;
     result.value=first+second;
*/