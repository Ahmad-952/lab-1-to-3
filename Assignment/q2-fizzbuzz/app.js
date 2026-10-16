// Name: Ahmad Hussain | Roll No: 2500608

const limitInput = document.getElementById("limit");
const generateBtn = document.getElementById("generateBtn");
const fizzBuzzList = document.getElementById("fizzBuzzList");
const message = document.getElementById("message");

// Returns the word for a number: Fizz, Buzz, FizzBuzz or the number itself
function getFizzBuzzWord(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz";
    }
    else if (number % 3 === 0) {
        return "Fizz";
    }
    else if (number % 5 === 0) {
        return "Buzz";
    }
    else {
        return String(number);
    }
}

// Clears the list and builds it again from 1 up to the limit
function buildFizzBuzzList(limit) {
    fizzBuzzList.innerHTML = "";

    for (let i = 1; i <= limit; i++) {
        const item = document.createElement("li");
        const word = getFizzBuzzWord(i);

        item.textContent = word;

        if (word !== String(i)) {
            item.className = "special";
        }

        fizzBuzzList.appendChild(item);
    }
}

// Reads the limit, validates it and regenerates the list
generateBtn.addEventListener("click", function () {
    const limit = Number(limitInput.value);

    if (limitInput.value === "" || !Number.isInteger(limit) || limit < 1) {
        message.textContent = "Please enter a whole number of 1 or more.";
        fizzBuzzList.innerHTML = "";
        return;
    }

    message.textContent = "";
    buildFizzBuzzList(limit);
});
