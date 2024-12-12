document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.querySelector('.sign-up-htm form');
    const emailInput = signUpForm.querySelector('input[type="text"]');
    const passwordInputs = signUpForm.querySelectorAll('input[type="password"]');
    const submitButton = signUpForm.querySelector('input[type="submit"]');

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validatePassword(password) {
        return password.length >= 8;
    }

    function updateSubmitButton() {
        const email = emailInput.value.trim();
        const password = passwordInputs[0].value.trim();
        const repeatPassword = passwordInputs[1].value.trim();

        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);
        const arePasswordsMatch = password === repeatPassword;

        if (isEmailValid && isPasswordValid && arePasswordsMatch) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    // Add event listeners for input fields
    emailInput.addEventListener('input', updateSubmitButton);
    passwordInputs.forEach(input => {
        input.addEventListener('input', updateSubmitButton);
    });
});




