// Name: Ahmad Hussain | Roll No: 2500608

// Select the elements we need
const nameInput = document.getElementById("name");
const marksInput = document.getElementById("marks");
const calcBtn = document.getElementById("calcBtn");
const result = document.getElementById("result");

// Returns the letter grade for the given marks
function getGrade(marks) {
    if (marks >= 85) {
        return "A";
    }
    else if (marks >= 70) {
        return "B";
    }
    else if (marks >= 50) {
        return "C";
    }
    else {
        return "F";
    }
}

// Shows a message inside the result box with the given style class
function showResult(message, styleClass) {
    result.textContent = message;
    result.className = styleClass;
}

// Reads both inputs, validates them and shows the grade
calcBtn.addEventListener("click", function () {
    const studentName = nameInput.value.trim();
    const marksValue = Number(marksInput.value);

    if (studentName === "") {
        showResult("Please enter the student name.", "error");
        return;
    }

    if (marksInput.value === "" || Number.isNaN(marksValue) || marksValue < 0 || marksValue > 100) {
        showResult("Marks must be a number between 0 and 100.", "error");
        return;
    }

    const grade = getGrade(marksValue);
    const message = `${studentName} scored ${marksValue} → Grade ${grade}`;

    if (grade === "F") {
        showResult(message, "fail");
    }
    else {
        showResult(message, "pass");
    }
});
