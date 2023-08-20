import { createPageLinks } from './pages.js';
import { createHomePage } from "./homepage.js";
import { createContactPage } from "./contact.js";
import { createMenuPage } from "./menu.js";

//create tabbed menu
createPageLinks();

// //create initial page and display homepage content
// createHomePage();

// Create main element and append it to the body
const mainContent = document.createElement('main');
document.body.appendChild(mainContent);


// Function to clear and update main content
function updateMainContent(newContent) {
    mainContent.innerHTML = '';
    mainContent.appendChild(newContent);

    // Add footer to mainContent
    mainContent.appendChild(createFooter());
}

//prepare logic for "tab-switching"
const homeTab = document.getElementById('homeTab');
const contactTab = document.getElementById('contactTab');
// const menuTab = document.getElementById('menuTab');



// Event listeners
homeTab.addEventListener('click', () => {
    updateMainContent(createHomePage());
});

contactTab.addEventListener('click', () => {
    updateMainContent(createContactPage());
});

// menuTab.addEventListener('click', () => {
//     updateMainContent(createMenuPageContent());
// });


// menuTab.addEventListener('click', () => {
//     mainContent.innerHTML = '';
//     createMenuPage();
// });

// Function to create and return the footer element
function createFooter() {
    const footerDiv = document.createElement('footer');

    const footerParagraph = document.createElement('p');
    footerParagraph.textContent = "Copyright © 2023 Anthony Giolti Funes";

    footerDiv.appendChild(footerParagraph);

    return footerDiv;
}


//intitially load homepage first
updateMainContent(createHomePage());