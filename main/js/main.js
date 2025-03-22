// main.js

// Function to toggle the navigation menu on the homepage
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-menu');
    const navbar = document.getElementById('navbar');

    // Check if the toggle button exists
    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            // Toggle the visibility of the navbar
            if (navbar.style.display === 'block') {
                navbar.style.display = 'none';
            } else {
                navbar.style.display = 'block';
            }
        });
    }
});

// Function to handle the disease detection form submission
document.addEventListener('DOMContentLoaded', function() {
    const detectionForm = document.getElementById('disease-detection-form');
    const resultDiv = document.getElementById('result');

    if (detectionForm) {
        detectionForm.addEventListener('submit', async function(event) {
            event.preventDefault(); // Prevent the default form submission

            const formData = new FormData(detectionForm);
            const cropImage = formData.get('crop-image');

            // Validate that an image has been uploaded
            if (!cropImage) {
                resultDiv.innerHTML = '<p style="color: red;">Please upload an image of your crop.</p>';
                return;
            }

            // Display a loading message
            resultDiv.innerHTML = '<p>Detecting disease... Please wait.</p>';

            try {
                // Simulate an API call to detect disease (replace with actual API call)
                const response = await simulateApiCall(cropImage);
                resultDiv.innerHTML = `<p>${response}</p>`;
            } catch (error) {
                resultDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
            }
        });
    }
});

// Simulated API call function (replace with actual API call)
async function simulateApiCall(image) {
    // Simulate a delay for the detection process
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulated result (replace with actual result from API)
            const simulatedResult = "Detected Disease: Powdery Mildew. Suggested Action: Apply fungicide.";
            resolve(simulatedResult);
        }, 2000); // Simulate a 2-second delay
    });
}