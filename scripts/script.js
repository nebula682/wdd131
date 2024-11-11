// Calculate Windchill Function
function calculateWindChill(temperature, windSpeed) {
                    if (temperature <= 10 && windSpeed > 4.8) {
                        // Windchill formula for metric (Celsius and km/h)
                        return Math.round(13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
                    } else if (temperature <= 50 && windSpeed > 3) {
                        // Windchill formula for imperial (Fahrenheit and mph)
                        return Math.round(35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
                    }
                    return 'N/A';  // Windchill not applicable if conditions aren't met
                }
                
                // Setting up the footer with the current year and last modified date
                document.getElementById('year').textContent = new Date().getFullYear();
                document.getElementById('modified-date').textContent = document.lastModified;
                
                // Display Windchill in the weather section when the page loads
                window.onload = function() {
                    const temperature = 5;  // Example temperature in Celsius
                    const windSpeed = 8;    // Example wind speed in km/h
                
                    const windchill = calculateWindChill(temperature, windSpeed);
                    document.getElementById('windchill').textContent = `Windchill: ${windchill}°C`;
                };