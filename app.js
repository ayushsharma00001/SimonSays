let level = document.querySelector(".level");
let started = false;
let leveln = 0;
let colors = ["red","yellow","green","purple"];
let userSeq = [];
let gamSeq = [];
let highest = document.querySelector(".highest");
let hscore = 0;

window.addEventListener("keypress",function(){
    if(started == false){
        started = true;
        levelup();
    }
});
function levelup(){
    userSeq = [];
    leveln++;
    level.innerText = `Level ${leveln}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = colors[randIdx];
    gamSeq.push(randColor);
    let randbtn = document.querySelector(`.${randColor}`);
    flash(randbtn);

}

function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },200);
    // console.log(gamSeq);

}

let allBtn = document.querySelectorAll(".btn");

for(let btns of allBtn){
    btns.addEventListener("click",btnPress);
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let color = this.getAttribute("id");
    userSeq.push(color);
    getAns(userSeq.length - 1);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");

    },200);
}

function getAns(idx){
    if(userSeq[idx] == gamSeq[idx]){
        if(userSeq.length == gamSeq.length){
           setTimeout(function(){
            levelup();
           },500);
        }
        else{
            flash();
        }
    }
    else{
        level.innerHTML = `Game over! Your score is <b> ${leveln - 1} </b> <br> PLease Try Again Press any key`;
        if(hscore<leveln-1){
            hscore = leveln-1;
            highest.innerText = `Highest Score is ${hscore}`;
        }
        restart();

    }
}

function restart(){
    leveln = 0;
    started = false;
    userSeq = [];
    gamSeq = [];

}