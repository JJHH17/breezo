import { initBtn, hideInitModal, hideMainContent, hideHeaderSearch } from "./querySelectors.js";

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
            // TODO: Handle data and update the UI
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}

// Initial modal search
initBtn().addEventListener("click", () => {
    alert("Hello, World!");
})