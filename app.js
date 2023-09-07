let gameSeq=[];
let userSeq=[];
let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

let started= false;
let level =0;
document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started =true;
        levelup();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    } ,1000);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    } ,1000);

}

function levelup() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx =Math.floor(Math.random()*3);
    let randomColor = btns[randIdx];
    let randombtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    btnFlash(randombtn);

};
function checkAns(idx){
   
   if(userSeq[idx]=== gameSeq [idx]){
    if(userSeq.length == gameSeq.length){
        setTimeout(levelup,1000);
    }
    
   }
   else{
    h2.innerHTML = `game over ! your score was <b> ${level}</b><br>Press any key to start.`;
    document.querySelector("body").style.backgroundcolor ="red";
    setTimeout(function() {
        document.querySelector("body").style.backgroundcolor ="white";  
    },150);
    reset();
}
}
function btnPress(){
    console.log(this);
    let btn =this;
    userFlash(btn);
    userColor= btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(bt of allbtns){
    bt.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    userSeq=[];
    gameSeq=[];
    level=0;
}