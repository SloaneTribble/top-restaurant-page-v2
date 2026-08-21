import {homeMaker} from "../home/home.js";
import {menuMaker} from "../menu/menu.js";

function makePageChanger(buttonName){
    switch (buttonName){
        case "home-button": return homeMaker;

        case "menu-button": return menuMaker;

        default: console.log("No such button");
    }
}

function loadPage(){
    const contentDiv = document.getElementById("content");

    const nav = document.getElementById("nav");

    let navButtons = nav.querySelectorAll("button");
    console.log(navButtons);

    navButtons.forEach((button) => {
        console.log(button);
        button.addEventListener("click", (e) => {
            const buttonId = e.target.id;
            console.log(e.target.id);

            const pageChangeFunction = makePageChanger(buttonId);
            contentDiv.replaceChildren(pageChangeFunction());
        })
    });

    // const homeButton = document.getElementById("home-button");
    // homeButton.addEventListener("click", () => {
    //     if (document.getElementsByClassName("home-container").length > 0){
    //         return;
    //     }
    //     contentDiv.replaceChildren(homeMaker());
    // });

    // const menuButton = document.getElementById("menu-button");
    // menuButton.addEventListener("click", () => {
    //     if (document.getElementsByClassName("menu-container").length > 0){
    //         return;
    //     }
    //     contentDiv.replaceChildren(menuMaker());
    // });

    // const aboutButton = document.getElementById("about-button");
    // const contactButton = document.getElementById("contact-button");

    contentDiv.appendChild(homeMaker());

    return contentDiv;
}

export {loadPage};
