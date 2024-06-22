let placegame = document.querySelector('.place-snake-life');
let scorepoint = document.querySelector('.score');
let scorepointhigh = document.querySelector('.high-score');

let foodx , foody;
let snakex = 4 ,  snakey = 12;
let runsnakex = 0 , runsnakey = 0;
let snakebody = [];
let gameover = false;
let intervalid;
let score = 0;

let highscore = localStorage.getItem("high-score") || 0;
scorepointhigh.innerHTML = `<span class="high-score">high Score : ${highscore}</span>`;


const handlegameover = () => {
    clearInterval(intervalid);
    alert("GAME OVER :(");
    location.reload();
    if (score > highscore) {
        score = highscore;
        placegame.innerHTML = `<span class="high-score">Score : ${highscore}</span>`;   
    }
}

let controlsfromscreen = (e) =>{
    if (e === "left") {
        snakesize("left");

    }else if (e === "down"){
        snakesize("down");

    }else if (e === "up"){
        snakesize("up");

    }else if (e === "right"){
        snakesize("right");

    }
}

let snakesize = (e) => {
    if(e.key === "ArrowUp" || e === "up" && runsnakex != 1 ){
        console.log(e);
        runsnakex = -1;
        runsnakey = 0;
    } else if(e.key === "ArrowDown" || e === "down" && runsnakex != -1 ){
        runsnakex = 1;
        runsnakey = 0;
    } else if(e.key === "ArrowLeft" || e === "left" && runsnakey != 1 ){
        runsnakex = 0;
        runsnakey = -1;
    } else if(e.key === "ArrowRight" || e === "right" && runsnakey != -1){
        runsnakex = 0;
        runsnakey = 1;
    }
}

const initgame = () => {
    if (gameover) {
        handlegameover();
    }
    let newdiv = `<div class="food" style="grid-area:${foodx} / ${foody};"></div>`;

    if (snakex === foodx && snakey === foody) {
        changepositionfood();
        snakebody.push([foodx , foody]);
        score ++;


        highscore = score >= highscore ? score : highscore;
        localStorage.setItem("high-score" , highscore);
        scorepoint.innerHTML = `<span class="score">Score : ${score}</span>`;
        scorepointhigh.innerHTML = `<span class="high-score">high Score : ${highscore}</span>`;
    }
    
    for (let i = snakebody.length -1; i > 0; i--) {
        snakebody[i] = snakebody[i - 1];
    }

    snakebody[0] = [snakey , snakex];

    snakex += runsnakex;
    snakey += runsnakey;

    for (let i = 0; i < snakebody.length; i++) {
        newdiv += `<div class="snake" style="grid-area:${snakebody[i][1]} / ${snakebody[i][0]};"></div>`;
        if (i !== 0 && snakebody[0][1] === snakebody[i][1] && snakebody[0][0] === snakebody[i][0] ){
            gameover = true;
        }
    }

    if (snakex > 35 || snakex <= 0 || snakey > 30 || snakey <= 0 ) {
        gameover = true;
    }

    placegame.innerHTML = newdiv;
}

const changepositionfood = () => {
    foodx = Math.floor(Math.random() * 35) + 1;
    foody = Math.floor(Math.random() * 30) + 1;
}
changepositionfood();
intervalid = setInterval(initgame , 100);
document.addEventListener("keydown" , snakesize);