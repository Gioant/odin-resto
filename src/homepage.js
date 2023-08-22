

export function createHomePage() {
    // Create a DocumentFragment to hold the elements
    const fragment = document.createDocumentFragment();

    //create hero section
    const heroSect = document.createElement('section');

    heroSect.id = 'hero-section';

    const heroDiv = document.createElement('div');
    heroDiv.id = 'hero-div';

    const spacer = document.createElement('div');
    spacer.id = 'spacer';

    const logoImg = document.createElement('img');
    logoImg.src = "../dist/assets/pics/logo.png";

    const title = document.createElement('h1');
    title.textContent = "Welcome To Bread Paradise, Where Deliciousness awaits!";

    const subHead = document.createElement('p');
    subHead.textContent = "Indulge in our wide selection of organic bread products! baked with love, care and the finest ingredients. Experience the true taste of pure goodness.";


    const menuBtn = document.createElement('a');
    menuBtn.id = "hero-btn";
    menuBtn.href = "#";
    menuBtn.textContent = "View Menu";

    heroDiv.appendChild(logoImg);
    heroDiv.appendChild(title);
    heroDiv.appendChild(subHead);
    heroDiv.appendChild(menuBtn);

    heroSect.appendChild(heroDiv);
    heroSect.appendChild(spacer);

    //creating feature section
    const featSection = document.createElement('section');
    featSection.id = 'feature-section';

    const featureHead = document.createElement('h2');
    featureHead.textContent = "Discover the Organic Goodness of Bread Paradise";
    featureHead.id = 'feature-head';

    //an array of objects 
    const divData = [
        {
            icon: "./assets/icons/best-price.png",
            heading: "Great Value With Competitive Prices",
            subheading: "With the most competitive prices on the market we are able to deliver great value without compromising on taste."
        },

        {
            icon: "./assets/icons/bread-baked.png",
            heading: "Handcrafted Breads Made With Love And Care",
            subheading: "Our skilled bakers carefully handcraft each loaf of bread, ensuring a unique and flavourful experience for our customers."
        },

        {
            icon: "./assets/icons/eco-friendly-icon.png",
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

    // Append sections to the fragment
    fragment.appendChild(heroSect);
    fragment.appendChild(featureHead);
    fragment.appendChild(featSection);

    return fragment;
}