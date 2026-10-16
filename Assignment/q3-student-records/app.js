// Name: Ahmad Hussain | Roll No: 2500608

const students = [
    { name: "Ayesha", rollNo: "FSWD-01", marks: 88 },
    { name: "Ali", rollNo: "FSWD-02", marks: 74 },
    { name: "Sara", rollNo: "FSWD-03", marks: 91 },
    { name: "Hussain", rollNo: "FSWD-04", marks: 65 },
    { name: "Zain", rollNo: "FSWD-05", marks: 48 }
];

const tableBody = document.getElementById("studentTable");
const averageText = document.getElementById("average");
const topScorerText = document.getElementById("topScorer");
const sortBtn = document.getElementById("sortBtn");

// Returns the letter grade for the given marks (same logic as the class task)
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

// Fills the table body with one row per student
function renderStudents(list) {
    tableBody.innerHTML = "";

    for (const student of list) {
        const row = document.createElement("tr");
        const values = [student.name, student.rollNo, student.marks, getGrade(student.marks)];

        for (const value of values) {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        }

        if (getGrade(student.marks) === "F") {
            row.className = "fail-row";
        }

        tableBody.appendChild(row);
    }
}

// Calculates and shows the class average and the name of the top scorer
function showSummary() {
    let total = 0;
    let topStudent = students[0];

    for (const student of students) {
        total += student.marks;

        if (student.marks > topStudent.marks) {
            topStudent = student;
        }
    }

    const average = total / students.length;
    averageText.textContent = `Class Average: ${average.toFixed(1)}`;
    topScorerText.textContent = `Top Scorer: ${topStudent.name} (${topStudent.marks})`;
}

// Bonus: re-renders the table sorted from the highest marks to the lowest
sortBtn.addEventListener("click", function () {
    const sortedStudents = [...students].sort((first, second) => second.marks - first.marks);
    renderStudents(sortedStudents);
});

renderStudents(students);
showSummary();
