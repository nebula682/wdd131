// Dynamic greeting function
const greetUser = () => {
    const hours = new Date().getHours();
    let greeting = '';

    if (hours < 12) {
        greeting = 'Good Morning';
    } else if (hours < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }

    document.getElementById('greetingMessage').innerText = `${greeting}! Ready to live a healthier life?`;
};

// Show and hide workout routines on button click
const showRoutine = () => {
    const buttons = document.querySelectorAll('.showRoutineBtn');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const routineId = `${e.target.dataset.routine}-routine`;
            const routineList = document.getElementById(routineId);

            if (routineList.style.display === 'none' || routineList.style.display === '') {
                routineList.style.display = 'block';
            } else {
                routineList.style.display = 'none';
            }
        });
    });
};

// Initialize features
greetUser();
showRoutine();



// Contact Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let responseMessage = '';

    // Validate form fields
    if (!name || !email || !message) {
        responseMessage = 'Please fill out all fields.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        responseMessage = 'Please enter a valid email address.';
    } else {
        responseMessage = 'Thank you for contacting us! We will respond shortly.';
        // Clear the form
        document.getElementById('contactForm').reset();
    }

    // Display the response message
    document.getElementById('formResponse').innerText = responseMessage;
});

 //Populate the current year
 document.getElementById('currentyear').textContent = new Date().getFullYear();
                
 //Populate last modified date
document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;