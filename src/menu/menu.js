import "../menu/menu.css";

function menuMaker() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    menuContainer.textContent = "Menu";

    return menuContainer;
}

export {menuMaker}