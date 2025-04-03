const btnEl = document.querySelector('.btn');
const c1El = document.getElementById('c1');
const c2El = document.getElementById('c2');
const c3El = document.getElementById('c3');
const c4El = document.getElementById('c4');

const colorCodeEl = document.querySelector('.colorCode');
const cc1El = document.getElementById('cc1');
const cc2El = document.getElementById('cc2');
const cc3El = document.getElementById('cc3');
const cc4El = document.getElementById('cc4');

const randomColor=()=>{
    let hex = Math.floor(Math.random() * 16777216).toString(16);
    return "#" + hex.padStart(6, "0");
}

const colorChange = ()=>{
    let temp;
    temp = randomColor();
    c1El.style.backgroundColor=temp;
    cc1El.innerHTML=temp;

    temp = randomColor();
    c2El.style.backgroundColor=temp;
    cc2El.innerHTML=temp;

    temp = randomColor();
    c3El.style.backgroundColor=temp;
    cc3El.innerHTML=temp;

    temp = randomColor();
    c4El.style.backgroundColor=temp;
    cc4El.innerHTML=temp;

    navigator.clipboard.writeText(temp)
}
const copyColorCode = function () {
    navigator.clipboard.writeText(this.innerText)
        .then(() => alert(`Color Copied : ${this.innerText}`))
        .catch(err => console.error("Failed to copy:", err));
};

colorChange();
btnEl.addEventListener('click',colorChange);

c1El.addEventListener('click',copyColorCode)
c2El.addEventListener('click',copyColorCode)
c3El.addEventListener('click',copyColorCode)
c4El.addEventListener('click',copyColorCode)