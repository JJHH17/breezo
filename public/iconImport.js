// File responsible for importing and presenting weather icons to UI

// function used to get the days icon
export function dayIcon(icon) {
    const dayIcon = document.querySelector("#mainIcon");
    dayIcon.src = `./assets/${icon}.png`; // To be resolved 
    dayIcon.alt = "Weather Icon";
    return dayIcon;
}