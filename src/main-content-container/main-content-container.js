import { homeMaker } from "../home/home.js";
import { menuMaker } from "../menu/menu.js";
import { aboutMaker } from "../about/about.js";
import { contactMaker } from "../contact/contact.js";

function makePageChanger(buttonName){
    switch (buttonName){
        case "home-button": return homeMaker;

        case "menu-button": return menuMaker;

        case "about-button": return aboutMaker;

        case "contact-button": return contactMaker;

        default: console.error("No such button");
    }
}


function checkForContainer(sectionName){
    const containerName = `${sectionName}-container`;
    return document.getElementsByClassName(containerName).length > 0;
}

function loadPage(){
    const contentDiv = document.getElementById("content");

    const nav = document.getElementById("nav");

    let navButtons = nav.querySelectorAll("button");

    navButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            const buttonId = e.target.id;

            const sectionName = buttonId.split("-")[0];

            // if container is already present, do nothing 
            if(checkForContainer(sectionName)){
                return;
            }

            const pageChangeFunction = makePageChanger(buttonId);
            contentDiv.replaceChildren(pageChangeFunction());
        })
    });


    contentDiv.appendChild(homeMaker());

    return contentDiv;
}

export {loadPage};
