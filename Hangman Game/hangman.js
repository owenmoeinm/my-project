let Greatingkeybord = document.querySelector(".keybord");

const randomegame = () => {
}
console.log('moein');
for (let i = 97; i <= 122; i++) {
    let genarate = String.fromCharCode(i);
    Greatingkeybord.innerHTML += `<button>${genarate}</button>`;
}

randomegame();