
export function createContactPage() {
    const body = document.querySelector('body');

    //create main html element
    const main = document.createElement('main');


    const contactSection = document.createElement('section');
    contactSection.id = "contact-section";

    //create form
    const form = document.createElement('form');

    // Create labels
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";

    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";

    // Create input fields
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.id = "email";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "name";

    // Create a button
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";


    const footerDiv = document.createElement('footer');

    const footerParagraph = document.createElement('p');
    footerParagraph.textContent = "Copyright © 2023 Anthony Giolti Funes";

    footerDiv.appendChild(footerParagraph);

    //appending elements
    body.appendChild(main);



    main.appendChild(footerDiv);
}