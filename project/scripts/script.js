// Handle form submission on the Contact page
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        // Retrieve form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Save data to localStorage
        const formData = {
            name,
            email,
            message,
        };
        localStorage.setItem('contactFormData', JSON.stringify(formData));

        // Confirmation message
        alert('Thank you for contacting us! Your message has been saved.');
        contactForm.reset(); // Clear form fields
    });
}

// Dynamic content for the About page (example)
if (window.location.pathname.includes('about.html')) {
    const aboutSection = document.querySelector('.about');
    const dynamicContent = document.createElement('p');
    dynamicContent.textContent = "Our mission is to deliver engaging and responsive web experiences.";
    aboutSection.appendChild(dynamicContent);
}

// Dynamic greeting on the Home page
if (window.location.pathname.includes('index.html')) {
    const heroSection = document.querySelector('.hero');
    const timeGreeting = document.createElement('p');
    const hour = new Date().getHours();

    if (hour < 12) {
        timeGreeting.textContent = "Good Morning!";
    } else if (hour < 18) {
        timeGreeting.textContent = "Good Afternoon!";
    } else {
        timeGreeting.textContent = "Good Evening!";
    }

    timeGreeting.style.fontSize = "1.2rem";
    heroSection.appendChild(timeGreeting);
}