
export function createMenuPage() {
    const body = document.querySelector('body');

    //create main html element
    const main = document.createElement('main');



    const footerDiv = document.createElement('footer');

    const footerParagraph = document.createElement('p');
    footerParagraph.textContent = "Copyright © 2023 Anthony Giolti Funes";

    footerDiv.appendChild(footerParagraph);

    //appending elements
    body.appendChild(main);

    // Append elements to form
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(submitButton);

    contactSection.appendChild(form);
    main.appendChild(contactSection);

    main.appendChild(footerDiv);
}