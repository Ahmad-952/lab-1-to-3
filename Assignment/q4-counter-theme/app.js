// Name: Ahmad Hussain | Roll No: 2500608

let count = 0;
const countDisplay = document.getElementById("count");
const themeBtn = document.getElementById("themeBtn");

// Adds 1 to the counter and shows the new value
document.getElementById("increaseBtn").addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
});

// Removes 1 from the counter, but never lets it go below 0
document.getElementById("decreaseBtn").addEventListener("click", function () {
    if (count > 0) {
        count--;
        countDisplay.textContent = count;
    }
});

// Sets the counter back to 0
document.getElementById("resetBtn").addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
});

// Toggles the dark class on the body and swaps the button label
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "Light Mode";
    }
    else {
        themeBtn.textContent = "Dark Mode";
    }
});
