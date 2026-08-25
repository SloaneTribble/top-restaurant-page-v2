import "../about/about.css";

function aboutMaker() {
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    aboutContainer.textContent = "about";

    return aboutContainer;
}

export {aboutMaker}