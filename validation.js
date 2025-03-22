// validation.js

document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            // Prevent the default form submission
            event.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const location = document.getElementById('location').value.trim();
            const terms = document.getElementById('terms').checked;

            // Validate inputs
            const errors = [];

            if (name === '') {
                errors.push('Name is required.');
            }

            if (email === '') {
                errors.push('Email is required.');
            } else if (!validateEmail(email)) {
                errors.push('Please enter a valid email address.');
            }

            if (password === '') {
                errors.push('Password is required.');
            } else if (password.length < 6) {
                errors.push('Password must be at least 6 characters long.');
            }

            if (phone === '') {
                errors.push('Phone number is required.');
            } else if (!validatePhone(phone)) {
                errors.push('Please enter a valid phone number.');
            }

            if (location === '') {
                errors.push('Location is required.');
            }

            if (!terms) {
                errors.push('You must agree to the terms and conditions.');
            }

            // Display errors or submit the form
            const resultDiv = document.createElement('div');
            resultDiv.className = 'error-messages';
            if (errors.length > 0) {
                resultDiv.innerHTML = errors.join('<br>');
                registrationForm.insertAdjacentElement('beforebegin', resultDiv);
            } else {
                // If no errors, you can submit the form or perform further actions
                resultDiv.innerHTML = '<p>Registration successful!</p>';
                registrationForm.insertAdjacentElement('beforebegin', resultDiv);
                // Here you can submit the form or send data to the server
                // registrationForm.submit(); // Uncomment this line to submit the form
            }
        });
    }

    // Function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Function to validate phone number format (simple validation)
    function validatePhone(phone) {
        const re = /^\d{10}$/; // Adjust this regex based on your phone number format
        return re.test(String(phone));
    }
});