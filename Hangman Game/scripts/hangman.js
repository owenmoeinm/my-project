let Greatingkeybord = document.querySelector(".keybord");
let question = document.querySelector(".question");

const randomeword = () => {
    const {word , hint} = wordList[Math.floor(Math.random() * wordList.length)];
    console.log(word, hint);
    question.innerHTML = `hint: <span>${hint}</span>`;
}

const handleword = (e) => {
    console.log(e);
}

for (let i = 97; i <= 122; i++) {
    let genarate = String.fromCharCode(i);
    Greatingkeybord.innerHTML += `<button onclick="handleword(${genarate})">${genarate}</button>`;
}
randomeword();