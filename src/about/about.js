import "../about/about.css";

function aboutMaker() {
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const aboutTitle = document.createElement("div");
    aboutTitle.id = "about-title";

    aboutTitle.textContent = "Ours to share -- yours to enjoy"

    aboutContainer.appendChild(aboutTitle);

    
    const aboutText = document.createElement("div");
    aboutText.id = "about-text";
    aboutText.textContent = 'Take a trip through Bubby\'s irreplaceable mind by exploring his artisan-inspired repertoire of incredible dips. Bubby\'s dips, hailed by Ron Johnson as "revelatory", and Dianne Weathers as "a rare achievement", span the full range of culinary possibilities in what can only be described as the ultimate dip pantheon.';
    
    aboutContainer.appendChild(aboutText);
    return aboutContainer;
}

export {aboutMaker}