import "../contact/contact.css";

function contactMaker() {
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const greeting = document.createElement('div');
    greeting.innerText = "We would be very happy to hear from you any time.";

    contactContainer.appendChild(greeting);

    const tel = document.createElement('div');
    tel.innerText = "555 - 323 - 4330";

    contactContainer.appendChild(tel);

    const email = document.createElement('div');
    email.innerText = "bubby@whip.dip";

    contactContainer.appendChild(email);

    const address = document.createElement('div');
    address.innerText = "Bubby's Whipped Dips \n 123 Fake St. \n Springfield, MO 10101";

    contactContainer.appendChild(address);

    const contactChildren = contactContainer.children;
    for (const child of contactChildren) {
        child.classList.add("contact-item");
    }

    return contactContainer;
}

export {contactMaker}