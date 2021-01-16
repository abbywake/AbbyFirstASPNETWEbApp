var submit = document.getElementById('submit')

submit.addEventListener('click', function () {
    alert('From- ' + document.getElementById("from").value + "," +
        "Subject = " + document.getElementById("email").value + ", " +
        "Email = " + document.getElementById("subject").value + ", " +
        "Message = " + document.getElementById("message").value);
});