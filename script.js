const loginForm = document.querySelector(".login form");
const registerForm = document.querySelector(".register form");


if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const input = loginForm.querySelector("input").value;

        if (input === "") {
            alert("Please enter email or mobile number");
        } else {
            alert("Proceeding...");
        }
    });
}


if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputs = registerForm.querySelectorAll("input");

        let empty = false;

        inputs.forEach(input => {
            if (input.value === "") empty = true;
        });

        if (empty) {
            alert("Please fill all fields");
        } else {
            alert("Account created!");
        }
    });
}