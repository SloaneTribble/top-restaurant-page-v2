import "../home/home.css";

function homeMaker(){
    const homeContainer = document.createElement("div");

    homeContainer.classList.add("home-container");

    const intro = document.createElement("h2");
    intro.classList.add("intro");
    intro.innerText = "With pride and passion, Bubby's has served hand-whipped dips since 1956.";

    homeContainer.appendChild(intro);

    return homeContainer;
}

export {homeMaker};