
export function createContactPage() {
    // Create a DocumentFragment to hold the elements
    const fragment = document.createDocumentFragment();


    const contactSection = document.createElement('section');
    contactSection.id = "contact-section";

    const div1 = document.createElement('div');
    div1.id = "top";


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

    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(nameLabel);
    form.appendChild(nameInput);
    form.appendChild(submitButton);

    div1.appendChild(form);
    contactSection.appendChild(div1);

    // Append contact section to the fragment
    fragment.appendChild(contactSection);

    return fragment;
}