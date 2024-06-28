let Greatingkeybord = document.querySelector(".keybord");
let question = document.querySelector(".question");
let gaugeword = document.querySelector(".place-answer");


let actiontype;

const randomeword = () => {
    const {word , hint} = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word);
    question.innerHTML = `hint: <span>${hint}</span>`;
    actiontype = word.split('');

    for (let i = 0; i < actiontype.length; i++) {
        gaugeword.innerHTML += `<li class="word"></li>`;
    }
}

const handleword = (lettertarget) => {
    let nodelist = document.querySelectorAll(".word");
    actiontype.forEach((letterforgauge) => {
        if (lettertarget === letterforgauge){
            let postiion = actiontype.indexOf(`${lettertarget}`);
            nodelist[postiion].classList.add("mark");
            nodelist[postiion].innerHTML = `${letterforgauge}` ;
            delete actiontype[postiion];
        }
    });
}

for (let i = 97; i <= 122; i++) {
    let genarate = String.fromCharCode(i);
    Greatingkeybord.innerHTML += `<button onclick="handleword('${genarate}')">${genarate}</button>`;
}
randomeword();
