import menuItems from './menuData.js';

export function createMenuPage() {
    // Create a DocumentFragment to hold the elements
    const fragment = document.createDocumentFragment();


    const menuSection = document.createElement('section');
    menuSection.id = "menu-section";

    const div1 = document.createElement('div');
    div1.id = "menu-items";

    const h2 = document.createElement('h2');
    h2.textContent = "Bakery Items";

    const p = document.createElement('p');
    p.textContent = "Explore Our Range Of Organic Goodness"

    div1.appendChild(h2);
    div1.appendChild(p);

    menuSection.appendChild(div1);


    const div2 = document.createElement('div');
    div2.id = "menu";

    // Loop through menu items data and create div elements
    for (const item of menuItems) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;

        const itemName = document.createElement('h3');
        itemName.textContent = item.name;

        const itemDescription = document.createElement('p');
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement('h4');
        itemPrice.textContent = item.price;

        itemDiv.appendChild(img);
        itemDiv.appendChild(itemName);
        itemDiv.appendChild(itemDescription);
        itemDiv.appendChild(itemPrice);

        div2.appendChild(itemDiv);
        menuSection.appendChild(div2);
    }



    // Append contact section to the fragment
    fragment.appendChild(menuSection);

    return fragment;

}