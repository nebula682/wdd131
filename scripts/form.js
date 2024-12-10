 //Populate the current year
 document.getElementById('currentyear').textContent = new Date().getFullYear();
                
 //Populate last modified date
document.getElementById('lastModified').textContent = "Last modified: " + document.lastModified;


const products = [
                    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
                    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
                    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
                    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
                    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
                  ];
                  
                  document.addEventListener('DOMContentLoaded', function() {
                      const productSelect = document.getElementById('product');
                      
                      // Populate the product select element dynamically
                      products.forEach(product => {
                          const option = document.createElement('option');
                          option.value = product.id;
                          option.textContent = product.name;
                          productSelect.appendChild(option);
                      });
                  });
                  
                  // Handling form submission and review counter
                  document.getElementById('reviewForm').addEventListener('submit', function(event) {
                      // Prevent default form submission
                      event.preventDefault();
                  
                      // Store review count in localStorage
                      let reviewCount = localStorage.getItem('reviewCount');
                      reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
                      localStorage.setItem('reviewCount', reviewCount);
                  
                      // Redirect to review confirmation page
                      window.location.href = 'review.html?count=' + reviewCount;
                  });