function calculate() {
    let scoreMarks = document.getElementsByClassName("scoreMarks");
    let totalMarks = 0;

    for (let i = 0; i < scoreMarks.length; i++) {
        totalMarks += parseInt(scoreMarks[i].innerText);
    }

    let percentage = Math.floor((totalMarks / 600) * 100);

    document.getElementById("percentage").innerHTML = `Percentage: ${percentage}%`;
    document.getElementById("totalScoreMarks").innerHTML = totalMarks;
}
