import { initBtn, hideInitModal, hideMainContent, hideHeaderSearch } from "./querySelectors.js";

// Handling Visual Crossing API Credentials
const apiKey = process.env.apiKey;

console.log(apiKey);

// Hides main content and header search on initial load
hideMainContent();
hideHeaderSearch();

// API functionality 
// function getWeather(location) {
//     // Display loading message here 

//     // Fetching data
//     fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=uk&include=days%2Chours&key=${apiKey}&contentType=json`, {
//         "method": "GET",
//         "mode": "cors",
//     })

//     // Parse to JSON
//     .then(function(response) {
//         return response.json();
//     })

//     // Return data to front end 
//     .then(function(response) {
//         console.log(response);
//     })
// }

// // Initial modal search
// initBtn().addEventListener("click", () => {
//     alert("Hello, World!");
// })