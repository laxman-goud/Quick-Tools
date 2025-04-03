const mathsEl = document.getElementById("maths");
const englishEl = document.getElementById("english");
const hindiEl = document.getElementById("hindi");
const scienceEl = document.getElementById("science");
const btn = document.getElementById('calculate');
const resultEL = document.getElementById('result');

const getResult = () => {
    const maths = parseInt(mathsEl.value)
    const english = parseInt(englishEl.value)
    const hindi = parseInt(hindiEl.value)
    const science = parseInt(scienceEl.value)
    const total = maths + english + hindi + science;
    if (total) {
        if (total > 400 || total < 0) {
            alert("Please Enter marks less than 100 and Greater than 0");
        }
        else{

            const percentage=Math.floor((total/400)*100);
            resultEL.classList.remove('hide');
            resultEL.innerHTML=`You have got ${total} marks out of 400 and your percentage is ${percentage}%`;
        }
    }
    else{
        alert("Please Enter all values before submitting");
    }
}

btn.addEventListener('click', getResult);