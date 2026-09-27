// Steven Yange Website Version 2.0 JavaScript


// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {


    link.addEventListener("click", function(e){

        e.preventDefault();


        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });


    });


});





// Scroll animation


const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(entries => {


entries.forEach(entry => {


    if(entry.isIntersecting){

        entry.target.style.opacity = "1";

        entry.target.style.transform = "translateY(0)";

    }


});


},{

threshold:0.15

});





sections.forEach(section=>{


    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition="all 0.8s ease";


    observer.observe(section);


});





// Current year in footer


const year = new Date().getFullYear();


console.log(
"Steven Yange Website © " + year
);
