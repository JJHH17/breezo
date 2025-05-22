import { initBtn, hideInitModal, hideMainContent, hideHeaderSearch } from "./querySelectors.js";

// Hides main content and header search on initial load
hideMainContent();
hideHeaderSearch();

// File responsible for main app functionality, includes utilization of the Visual Crossing API.
initBtn().addEventListener("click", () => {
    
})
