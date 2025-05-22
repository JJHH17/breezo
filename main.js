import { initBtn, hideInitModal, hideMainContent, hideHeaderSearch } from "./querySelectors.js";

// Handling Visual Crossing API Credentials
const apiKey = process.env.API_KEY;

// Hides main content and header search on initial load
hideMainContent();
hideHeaderSearch();

// API functionality 
function getWeather(location) {
    // Display loading message here 

    // Fetching data
}