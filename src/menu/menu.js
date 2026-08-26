import "../menu/menu.css";

const menuItem = function(name, description, price){
    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  };
    this.name = name;
    this.description = description;
    this.price = price;
}

const classic = new menuItem("Classic Whip", "Our namesake dip", "14");
const spicy = new menuItem("Spicy", "A spicy twist on an old favorite", "17");
const thin = new menuItem("Thin", "Flavor takes center stage with this heritage selection", "12");
const herbed = new menuItem("Herbed", "A creamy dip featuring the rarest herbs", "15");
const creamy = new menuItem("Creamy", "Classic dip with a boost of cream", "16");

const menuItems = [classic, spicy, thin, herbed, creamy];

const makeMenuItemDiv = function(menuItem){
    const menuItemContainer = document.createElement("div");
    menuItemContainer.classList.add("menu-item");

    for (const [key, value] of Object.entries(menuItem)) {
        const itemPropertyDiv = document.createElement("div");
        itemPropertyDiv.classList.add(`menu-item-${key}`);
        itemPropertyDiv.textContent = value;

        menuItemContainer.appendChild(itemPropertyDiv);
    }

    return menuItemContainer;

}

function menuMaker() {
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");


    const menuTitle = document.createElement("div");
    menuTitle.id = "menu-title";
    menuTitle.textContent = "Menu";
    menuContainer.appendChild(menuTitle);
    

    for (const item of menuItems){
        const menuItem = makeMenuItemDiv(item);
        menuContainer.appendChild(menuItem);
    }


    return menuContainer;
}

export {menuMaker}