var submit = document.getElementById('submit')


submit.addEventListener('click', function () {
    var assignment = document.getElementById('assignment').value
    var groupProject = document.getElementById('email').value
    var quiz = document.getElementById('quiz').value
    var exam = document.getElementById('exam').value
    var intex = document.getElementById('intex').value

    alert("Your estimated grade will be " + parseInt(assignment + groupProject + quiz + exam + intex) + "%")
});
