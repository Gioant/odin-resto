

export function createHomePage() {
    const body = document.querySelector('body');

    //create main html element
    const main = document.createElement('main');
    main.id = "homepage"

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

    const featureHead = document.createElement('h2');
    featureHead.textContent = "Discover the Organic Goodness of Bread Paradise";
    featureHead.id = 'feature-head';

    //an array of objects 
    const divData = [
        {
            icon: "../src/assets/icons/best-price.png",
            heading: "Great Value With Competitive Prices",
            subheading: "With the most competitive prices on the market we are able to deliver great value without compromising on taste."
        },

        {
            icon: "../src/assets/icons/bread-baked.png",
            heading: "Handcrafted Breads Made With Love And Care",
            subheading: "Our skilled bakers carefully handcraft each loaf of bread, ensuring a unique and flavourful experience for our customers."
        },

        {
            icon: "../src/assets/icons/eco-friendly-icon.png",
            heading: "Embrace Sustainable Bread Choices",
            subheading: "We prioritize sustainability by sourcing local ingredients, minimizing waste, and supporting eco-friendly packaging solutions."
        }
    ]

    //loop to create div items for 3 features
    for (const data of divData) {
        const divItem = document.createElement('div');

        divItem.classList.add('benefit');

        //image icons
        const imgIcons = document.createElement("img");
        imgIcons.src = data.icon;


        const heading = document.createElement('h3');
        heading.textContent = data.heading;

        const subheading = document.createElement('p');
        subheading.textContent = data.subheading;

        divItem.appendChild(imgIcons);
        divItem.appendChild(heading);
        divItem.appendChild(subheading);

        featSection.appendChild(divItem);
    }

    const footerDiv = document.createElement('footer');

    const footerParagraph = document.createElement('p');
    footerParagraph.textContent = "Copyright © 2023 Anthony Giolti Funes";

    footerDiv.appendChild(footerParagraph);

    //appending elements
    body.appendChild(main);

    main.appendChild(heroSect);

    //hero section
    heroSect.appendChild(heroDiv);
    heroSect.appendChild(spacer);
    heroDiv.appendChild(logoImg);
    heroDiv.appendChild(title);
    heroDiv.appendChild(subHead);
    heroDiv.appendChild(menuBtn);

    //feature section
    main.appendChild(featureHead);
    main.appendChild(featSection);

    main.appendChild(footerDiv);
}