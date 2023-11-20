document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting

    const passwordField = document.getElementById("pwd");
    const passwordValue = passwordField.value.trim();

    if (passwordValue === "") {
        alert("Password field cannot be blank.");
    } else {

        const loginForm = document.getElementById("login-form");
        loginForm.style.transition = "opacity 0.5s";
        loginForm.style.opacity = 0;


        const loginMessage = document.getElementById("login-message");
        loginMessage.style.transition = "opacity 0.5s";
        loginMessage.style.opacity = 1;
    }
});
