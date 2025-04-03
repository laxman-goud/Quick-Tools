const cogWheel = document.getElementById("Wheel");
const inputDob = document.getElementById("DOB");
const addBtn = document.getElementById("button");
const afterDobEl = document.querySelector(".afterDOB");
const beforeDOBel = document.querySelector(".beforeDOB");

let timerInterval;

// Function to toggle input visibility
const toggleInput = () => {
    inputDob.classList.toggle("hide");
    addBtn.classList.toggle("hide");
};

cogWheel.addEventListener("click", toggleInput);

addBtn.addEventListener("click", () => {
    const input = inputDob.value;
    if (input) {
        let enteredDate = new Date(input);
        let currentDate = new Date();

        // ✅ Reset entered date time to 00:00:00
        enteredDate.setHours(0, 0, 0, 0);
        currentDate.setMilliseconds(0); // Ensure accuracy

        // ❌ Prevent future dates
        if (enteredDate > currentDate) {
            alert("Please enter a past date!");
            inputDob.value = ""; // Reset input
            beforeDOBel.classList.remove("hide");
            afterDobEl.classList.add("hide");
            return;
        }

        beforeDOBel.classList.add("hide");
        afterDobEl.classList.remove("hide");

        // Stop any existing timer
        clearInterval(timerInterval);

        // Start new timer
        timerInterval = setInterval(() => {
            let currentDate = new Date(); // Update the current time in every interval

            let diffTime = currentDate - enteredDate; // Time difference in ms

            let years = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
            let months = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
            let days = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
            let hours = currentDate.getHours();
            let minutes = currentDate.getMinutes();
            let seconds = currentDate.getSeconds();

            document.querySelector(".Years").innerText = years.toString().padStart(2, "0");
            document.querySelector(".Months").innerText = months.toString().padStart(2, "0");
            document.querySelector(".Days").innerText = days.toString().padStart(2, "0");
            document.querySelector(".Hours").innerText = hours.toString().padStart(2, "0");
            document.querySelector(".Minutes").innerText = minutes.toString().padStart(2, "0");
            document.querySelector(".Seconds").innerText = seconds.toString().padStart(2, "0");

        }, 1000);

        // Keep input visible after clicking Add
        inputDob.classList.remove("hide");
        addBtn.classList.remove("hide");
        inputDob.value = "";
    } else {
        alert("Please enter a valid date!");
    }
});
