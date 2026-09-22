// Smooth scrolling effect

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});


// Welcome message in browser console

console.log("Welcome to Steven Yange Official Website");


// Simple fade-in animation

const sections = document.querySelectorAll("section");


window.addEventListener("scroll", () => {

sections.forEach(section => {

let position = section.getBoundingClientRect().top;

let screenHeight = window.innerHeight;


if(position < screenHeight - 100){

section.style.opacity = "1";
section.style.transform = "translateY(0)";

}

});


});


// Initial animation style

sections.forEach(section => {

section.style.opacity="0";
section.style.transform="translateY(40px)";
section.style.transition="1s ease";

});
