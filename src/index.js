import { createPageLinks } from './pages.js';
import { createHomePage } from "./homepage.js";
import { createContact } from "./contact.js";
import { createMenu } from "./menu.js";

//create tabbed menu
createPageLinks();

//create initial page and display homepage content
createHomePage();

//prepare logic for "tab-switching"
const homeTab = document.getElementById('homepage');
const contactTab = document.getElementById('contactTab');
const menuTab = document.getElementById('menuTab');
const mainContent = document.querySelector('main');


//event listeners
homeTab.addEventListener('click', () => {
    mainContent.innerHTML = '';
    createHomePage();
});

contactTab.addEventListener('click', () => {
    mainContent.innerHTML = '';
    createContactPage();
});


menuTab.addEventListener('click', () => {
    mainContent.innerHTML = '';
    createMenuPage();
});

