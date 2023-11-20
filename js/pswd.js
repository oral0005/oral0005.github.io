const passwordField = document.getElementById("pwd");
const strengthLabel = document.getElementById("strength-label");


function checkPasswordStrength(password) {
    if (password.length >= 8) {
        return "Strong";
    } else if (password.length >= 6) {
        return "Moderate";
    } else {
        return "Weak";
    }
}

passwordField.addEventListener("keypress", function () {
    const passwordValue = passwordField.value.trim();
    const strength = checkPasswordStrength(passwordValue);


    strengthLabel.textContent = strength;
    strengthLabel.style.color = strength === "Strong" ? "green" : "red";

    const passwordStrength = document.getElementById("password-strength");
    if (passwordValue === "") {
        passwordStrength.style.display = "none";
    } else {
        passwordStrength.style.display = "block";
    }
});
