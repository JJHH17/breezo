// File responsible for selecting front end elements

// Selects the initial search input
export function initInput() {
    const initialInput = document.querySelector("#initInput");
    return initInput;
}

// Selects initial search button
export function initBtn() {
    const initialButton = document.querySelector("#initBtn");
    return initialButton;
}

// Selecting the initial search modal
function initSearchModal() {
    const initModal = document.querySelector("#initSearch");
    return initModal;
}

// Hiding the initial modal
export function hideInitModal() {
    const modal = initSearchModal();
    modal.style.display = "none";
}

// Displaying the initial modal
export function displayInitModal() {
    const modal = initSearchModal();
    modal.style.display = "block";
}

// Hides header search modal
export function hideHeaderSearch() {
    const headerModal = document.querySelector("#headerSearch");
    headerModal.style.display = "none";
}

// Selects header input
export function headerInput() {
    const headerInput = document.querySelector("#headerInput");
    return headerInput;
}

// Selects header 
export function headerBtn() {
    const headerBtn = document.querySelector("#headerBtn");
    return headerBtn;
}

// Hides main content
export function hideMainContent() {
    const mainContent = document.querySelector("#mainContent");
    mainContent.style.display = "none";
}