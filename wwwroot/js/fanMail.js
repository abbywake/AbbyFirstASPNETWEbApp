$("#submit").click(function () {
    //assigning variables inside the '#submit' function - taking the info from what they entered to use it 
    var assignment = +$('#assignment').val();
    var groupProject = +$('#email').val();
    var quiz = +$('#quiz').val();
    var exam = +$('#exam').val();
    var intex = +$('#intex').val();
    //takes those variables they entered and clculates how big of a part of the class they are. 
    var total = ((assignment*(.50)) + (groupProject*(.10)) + (quiz*(.10)) + (exam*(.20)) + (intex*(.10)));

    var grade; 

    //this code takes the total for what they got in the class and assigned a grade letter 
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
    //output alert with their percentage and letter grade 
    alert("You ended up with " + total + "% " + "and a grade of a(n) " + grade);




});
