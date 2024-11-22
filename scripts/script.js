document.addEventListener('DOMContentLoaded', function () {
                    // Set the current year and last modified date
                    const currentYear = new Date().getFullYear();
                    const lastModified = new Date(document.lastModified).toLocaleDateString();
                
                    document.getElementById('current-year').textContent = currentYear;
                    document.getElementById('last-modified').textContent = lastModified;
                
                    // Static weather data
                    const temperature = 15; // Celsius
                    const windSpeed = 10; // km/h
                
                    // Function to calculate windchill
                    function calculateWindChill(temp, wind) {
                        if ((temp <= 10 && wind > 4.8) || (temp <= 50 && wind > 3)) {
                            return (13.12 + 0.6215 * temp -  11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1);
                        }
                        return "N/A";
                    }
                
                    // Display windchill
                    const windchillValue = calculateWindChill(temperature, windSpeed);
                    document.getElementById('windchill-value').textContent = windchillValue;
                });