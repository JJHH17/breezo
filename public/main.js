import { initInput, initBtn, hideInitModal, hideMainContent, hideHeaderSearch, headerInput, displayMainContent, locationDisplay } from "./querySelectors.js";

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