document.addEventListener("DOMContentLoaded", function() {
                    const temperature = 5; // Example temperature in °C
                    const windSpeed = 10; // Example wind speed in km/h
                
                    // Function to calculate wind chill
                    function calculateWindChill(temp, speed) {
                        return Math.round(13.12 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16));
                    }
                
                    let windChill;
                    if ((temperature <= 10 && windSpeed > 4.8)) {
                        windChill = calculateWindChill(temperature, windSpeed);
                    } else {
                        windChill = "N/A";
                    }
                
                    document.getElementById("wind-chill").textContent = windChill;
                
                    // Set current year and last modified date
                    const currentYear = new Date().getFullYear();
                    document.getElementById("current-year").textContent = currentYear;
                    document.getElementById("last-mod
                
                
                
                Share
                New
                Continue
                GPT-4o
                Cl