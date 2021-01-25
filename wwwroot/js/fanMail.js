$("#submit").click( function () {
    var assignment = +$('#assignment').val();
    var groupProject = +$('#email').val();
    var quiz = +$('#quiz').val();
    var exam = +$('#exam').val();
    var intex = +$('#intex').val();
    var total = ((assignment*(.50)) + (groupProject*(.10)) + (quiz*(.10)) + (exam*(.20)) + (intex*(.10)));

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

    alert("You ended up with " + total + "% " + "and a grade of a(n) " + grade);




});
