var submit = document.getElementById('submit')


submit.addEventListener('click', function () {
    var assignment = +document.getElementById('assignment').value
    var groupProject = +document.getElementById('email').value
    var quiz = +document.getElementById('quiz').value
    var exam = +document.getElementById('exam').value
    var intex = +document.getElementById('intex').value
    var total = assignment + groupProject + quiz + exam + intex;
    var grade; 

    if (total >= 93) {
        grade = "A";
    }
    else if (total >= 90) {
        grade = "A-";
    }
    else if (total >= 90) {
        grade = "A-";
    }
    else if (total >= 87) {
        grade = "B+";
    }
    else if (total >= 83) {
        grade = "B";
    }
    else if (total >= 80) {
        grade = "B-";
    }
    else if (total >= 77) {
        grade = "C+";
    }
    else if (total >= 73) {
        grade = "C";
    }
    else if (total >= 70) {
        grade = "C-";
    }
    else if (total >= 67) {
        grade = "D+";
    }
    else if (total >= 63) {
        grade = "D";
    }
    else if (total >= 60) {
        grade = "D-";
    }
    else {
        grade = "E";
    }


    alert("Your estimated grade will be " + total + "% with a grade letter of a(n) " + grade)
});
