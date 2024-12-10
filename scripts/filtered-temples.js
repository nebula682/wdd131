const temples = [
                    {
                      templeName: "Aba Nigeria",
                      location: "Aba, Nigeria",
                      dedicated: "2005, August, 7",
                      area: 11500,
                      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
                    },
                    {
                      templeName: "Manti Utah",
                      location: "Manti, Utah, United States",
                      dedicated: "1888, May, 21",
                      area: 74792,
                      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
                    },
                    {
                      templeName: "Payson Utah",
                      location: "Payson, Utah, United States",
                      dedicated: "2015, June, 7",
                      area: 96630,
                      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
                    },
                    {
                      templeName: "Yigo Guam",
                      location: "Yigo, Guam",
                      dedicated: "2020, May, 2",
                      area: 6861,
                      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
                    },
                    {
                      templeName: "Washington D.C.",
                      location: "Kensington, Maryland, United States",
                      dedicated: "1974, November, 19",
                      area: 156558,
                      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
                    },
                    {
                      templeName: "Lima Perú",
                      location: "Lima, Perú",
                      dedicated: "1986, January, 10",
                      area: 9600,
                      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
                    },
                    {
                      templeName: "Mexico City Mexico",
                      location: "Mexico City, Mexico",
                      dedicated: "1983, December, 2",
                      area: 116642,
                      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
                    },
                    {
                    templeName: "Hong Kong China",
                                        location: "Hong Kong, China",
                                        dedicated: "1996, May, 26",
                                        area: 21981,
                                        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x250/hong-kong-china-temple-exterior.jpg"
                                      },


 { templeName: "Rome Italy",
  location: "Rome, Italy",
  dedicated: "2019, March, 10",
  area: 44470,
  imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-exterior.jpg"
},

{
                    templeName: "Johannesburg South Africa",
                    location: "Johannesburg, South Africa",
                    dedicated: "1985, August, 24",
                    area: 19000,
                    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-exterior.jpg"
                  },






                 
                  ];
                  
                  const container = document.getElementById("temples-container");
                  
                  // Populate the container with temple cards
                  function displayTemples(templesToDisplay) {
                    container.innerHTML = ""; // Clear current content
                    templesToDisplay.forEach((temple) => {
                      const card = document.createElement("div");
                      card.classList.add("temple-card");
                  
                      card.innerHTML = `
                        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                        <h2>${temple.templeName}</h2>
                        <p>Location: ${temple.location}</p>
                        <p>Dedicated: ${temple.dedicated}</p>
                        <p>Area: ${temple.area.toLocaleString()} sq ft</p>
                      `;
                      container.appendChild(card);
                    });
                  }
                  
                  // Filters
                  function filterTemples(criteria) {
                    let filteredTemples;
                    switch (criteria) {
                      case "old":
                        filteredTemples = temples.filter((t) => new Date(t.dedicated).getFullYear() < 1900);
                        break;
                      case "new":
                        filteredTemples = temples.filter((t) => new Date(t.dedicated).getFullYear() > 2000);
                        break;
                      case "large":
                        filteredTemples = temples.filter((t) => t.area > 90000);
                        break;
                      case "small":
                        filteredTemples = temples.filter((t) => t.area < 10000);
                        break;
                      default:
                        filteredTemples = temples;
                    }
                    displayTemples(filteredTemples);
                  }
                  
                  // Event Listeners for Buttons
                  document.getElementById("home").addEventListener("click", () => filterTemples());
                  document.getElementById("old").addEventListener("click", () => filterTemples("old"));
                  document.getElementById("new").addEventListener("click", () => filterTemples("new"));
                  document.getElementById("large").addEventListener("click", () => filterTemples("large"));
                  document.getElementById("small").addEventListener("click", () => filterTemples("small"));
                  
                  // Footer Data
                  //Populate the current year
    document.getElementById('currentyear').textContent = new Date().getFullYear();
                
    //Populate last modified date
   document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;



                  
                  
                  // Initial Load
                  displayTemples(temples);