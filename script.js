function showMessage() {
    alert("Hello! Thanks for visiting my portfolio.");
}

function showProject(projectName) {
    alert("You selected: " + projectName);
}

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been submitted.");

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}