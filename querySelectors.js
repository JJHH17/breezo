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