// Set the current year dynamically
document.getElementById('footer-year').textContent = new Date().getFullYear();

//Set the last modified date dynamically
document.getElementById('footer-modified').textContent = document.lastModified;

// Hamburger menu functionality for mobile view
/*
const menuToggle = document.createElement('button');
menuToggle.textContent = '☰'; // Hamburger icon
menuToggle.classList.add('menu-toggle');
document.querySelector('header').appendChild(menuToggle);

const navMenu = document.querySelector('nav ul');

// Toggle the visibility of the nav menu when the hamburger button is clicked
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('visible');
});//*/






// CSS for the visible class (to be added to your CSS file)

const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Toggle the navbar when the hamburger button is clicked
hamburger.addEventListener('click', function() {
    navbar.classList.toggle('active');
    
    // Change the hamburger icon to 'X' when the menu is 
    if (navbar.classList.contains('active')) {
        hamburger.innerHTML = '&#10006;'; // 'X' symbol
    } else {
        hamburger.innerHTML = '&#9776;'; // Hamburger icon
    }
});
