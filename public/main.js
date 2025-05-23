import { initInput, initBtn, hideInitModal, hideMainContent, hideHeaderSearch, headerInput, displayMainContent, locationDisplay,
    tempDisplay, descDisplay, feelsLikeDesc, humidityDesc, windDesc
 } from "./querySelectors.js";

// Hides main content and header search on initial load
hideMainContent();
hideHeaderSearch();

// API functionality 
function getWeather(location) {
    // Display loading message here 

    fetch(`/api/weather?location=${encodeURIComponent(location)}`)
        .then(res => res.json())

        .then(data => {
            console.log(data);

            // Refresh UI to display front end
            hideInitModal();
            displayMainContent();

            // Update the UI elements
            console.log("Placeholder")

            // Update UI elements with weather data
            locationDisplay().innerText = data.resolvedAddress;
            tempDisplay().innerText = "Temperature: " + data.days[0].temp + "°C";
            descDisplay().innerText = data.days[0].conditions;
            feelsLikeDesc().innerText = "Feels like: " + data.days[0].feelslike + "°C";
            humidityDesc().innerText = "Humidity: " + data.days[0].humidity + "%";
            windDesc().innerText = "Wind Speed: " + data.days[0].windspeed + "mph";
        })

        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

// Initial modal search
initBtn().addEventListener("click", () => {
    const input = initInput();
    getWeather(input.value);
})