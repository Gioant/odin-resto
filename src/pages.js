
export function createPageLinks() {
    const body = document.querySelector('body');

    const nav = document.createElement('nav');

    const homeTab = document.createElement('button');
    homeTab.id = 'homeTab';
    homeTab.textContent = 'Homepage';

    const contactTab = document.createElement('button');
    contactTab.id = 'contactTab';
    contactTab.textContent = 'Contact Us';

    const menuTab = document.createElement('button');
    menuTab.id = 'menuTab';
    menuTab.textContent = 'Menu';

    nav.appendChild(homeTab);
    nav.appendChild(contactTab);
    nav.appendChild(menuTab);


    // Append the navigation to the body
    body.appendChild(nav);
}