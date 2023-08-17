
/*
TO DO:
- optimize creating elements by using DRY principles and creating a function that takes string as parameter
- do the same for setting id of an element
*/

export function createHomePage() {
    const body = document.querySelector('body');

    //create main html element
    const main = document.createElement('main');

    //create nav for tabbed menu items
    const nav = document.createElement('nav');

    //create hero section
    const heroSect = document.createElement('section');

    heroSect.id = 'hero-section';

    const heroDiv = document.createElement('div');
    heroDiv.id = 'hero-div';

    const spacer = document.createElement('div');
    spacer.id = 'spacer';

    const logoImg = document.createElement('img');
    logoImg.src = "../src/assets/pics/logo.png";

    const title = document.createElement('h1');
    title.textContent = "Welcome To Bread Paradise, Where Deliciousness awaits!";

    const subHead = document.createElement('p');
    subHead.textContent = "Indulge in our wide selection of organic bread products! baked with love, care and the finest ingredients. Experience the true taste of pure goodness.";


    const menuBtn = document.createElement('a');
    menuBtn.id = "hero-btn";
    menuBtn.href = "#";
    menuBtn.textContent = "View Menu";


    //creating feature section
    const featSection = document.createElement('section');
    featSection.id = 'feature-section';

    //store array of images
    const imagesBenefitsArr = [
        "../src/assets/icons/best-price.png",
        "../src/assets/icons/bread-baked.png",
        "../src/assets/icons/eco-friendly-icon.png"
    ]

    //loop to create div items for 3 features
    for (let i = 0; i < 3; i++){
        const divItem = document.createElement('div');

        divItem.classList.add('benefit');

        //image icons
        const imgIcons = document.createElement("img");
        imgIcons.src = imagesBenefitsArr[i];

        divItem.appendChild(imgIcons);

        featSection.appendChild(divItem);
    }

    //appending elements
    body.appendChild(main);

    main.appendChild(nav);
    main.appendChild(heroSect);

    //hero section
    heroSect.appendChild(heroDiv);
    heroSect.appendChild(spacer);
    heroDiv.appendChild(logoImg);
    heroDiv.appendChild(title);
    heroDiv.appendChild(subHead);
    heroDiv.appendChild(menuBtn);

    //feature section
    main.appendChild(featSection);
}