import "../contact/contact.css";

function contactMaker() {
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    contactContainer.textContent = "contact";

    return contactContainer;
}

export {contactMaker}