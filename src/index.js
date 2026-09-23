/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */

// HTML Files
import './index.html';

// Stylesheets
import './css/main.scss';

// Scripts
import './js/main.js';


//position indicatr
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".bar a");

window.addEventListener("scroll", function() {

    let current = "";

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        current = sections[4].id;
    } else {
        sections.forEach(function(section) {
            if (window.scrollY > section.offsetTop - 90) {
                current = section.id;
            }
        });
    }

    links.forEach(function(link) {
    link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});




//position indicator


//bar resize

 const nav = document.querySelector(".bar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 67) {
    //funny number
        nav.classList.add("small");
    } else {
        nav.classList.remove("small");
    }
});


//carosel

const pages = document.querySelectorAll(".page");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

let current = 0;

pages[current].classList.add("active");

next.onclick = function() {
    pages[current].classList.remove("active");
    current = current + 1;

    if (current >= pages.length) {
        current = 0;
    }
    pages[current].classList.add("active");
};



previous.onclick = function() {
    pages[current].classList.remove("active");
    current = current - 1;
 if (current < 0) {
        current = 2;
    }
    pages[current].classList.add("active");
};



//modal


const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");
const modalText = document.getElementById("modal-text");
const images = document.querySelectorAll(".mod");

images.forEach(function(image) {
    image.onclick = function() {
        modalText.textContent = image.dataset.cat;

        modal.classList.remove("fade-out");
        modal.classList.add("show");
    };
});


closeModal.onclick = function() {
    modal.classList.add("fade-out");
 setTimeout(function() { modal.classList.remove("show"); }, 3200);
//3.2 sec cuz the fade needs to be visable.
};
