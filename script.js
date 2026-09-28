// ===================================
// Steven Yange Website Version 3.0
// Premium Portfolio JavaScript
// ===================================



// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});





// Section reveal animation


const sections = document.querySelectorAll("section");


const observer = new IntersectionObserver(entries => {


entries.forEach(entry => {


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{

threshold:0.15

});



sections.forEach(section=>{


section.classList.add("hidden");


observer.observe(section);


});





// Hero animation


window.addEventListener("load",()=>{


const hero = document.querySelector(".hero-overlay");


if(hero){

hero.classList.add("hero-show");

}


});





// Automatic copyright year


const year = new Date().getFullYear();


const footer = document.querySelector("footer p");


if(footer){

footer.innerHTML =
"© " + year + " Steven Yange Official Website";

}/* VERSION 3.0 ANIMATIONS */


.hidden{

opacity:0;

transform:translateY(40px);

transition:all 0.8s ease;

}


.show{

opacity:1;

transform:translateY(0);

}



.hero-overlay{

opacity:0;

transform:translateY(40px);

transition:1s ease;

}



.hero-show{

opacity:1;

transform:translateY(0);

}
