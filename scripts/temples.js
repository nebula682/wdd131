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

const hamburger = document.getElementById('#hamburger');
const navbar = document.getElementById('#navbar');

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







// Temple data array
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Salt Lake Utah",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, May, 6",
      area: 100000,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-utah/400x250/salt-lake-utah-temple.jpg"
    },
    {
      templeName: "Frankfurt Germany",
      location: "Frankfurt, Germany",
      dedicated: "1987, October, 9",
      area: 27000,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-germany-temple.jpg"
    }
  ];
  
  // Function to generate a temple card
  function createTempleCard(temple) {
    const card = document.createElement("div");
    card.classList.add("temple-card");
  
    const templeImage = document.createElement("img");
    templeImage.src = temple.imageUrl;
    templeImage.alt = temple.templeName;
    templeImage.loading = "lazy";  // Native lazy loading
  
    const templeName = document.createElement("h2");
    templeName.textContent = temple.templeName;
  
    const templeLocation = document.createElement("p");
    templeLocation.textContent = `Location: ${temple.location}`;
  
    const templeDedicated = document.createElement("p");
    templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
    const templeArea = document.createElement("p");
    templeArea.textContent = `Area: ${temple.area} sq ft`;
  
    card.appendChild(templeImage);
    card.appendChild(templeName);
    card.appendChild(templeLocation);
    card.appendChild(templeDedicated);
    card.appendChild(templeArea);
  
    return card;
  }
  
  // Function to render temples based on filter
  function renderTemples(filteredTemples) {
    const container = document.getElementById("temple-cards-container");
    container.innerHTML = "";  // Clear current cards
    filteredTemples.forEach(temple => {
      const templeCard = createTempleCard(temple);
      container.appendChild(templeCard);
    });
  }
  
  // Filtering functions
  function filterOld() {
    return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
  }
  
  function filterNew() {}
  
  
  
  
  
  
