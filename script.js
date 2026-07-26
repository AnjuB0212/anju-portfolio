// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({
            behavior:"smooth"
        });

        // Close mobile menu after clicking a link
        document.getElementById("nav-menu")
        .classList.remove("active");

    });

});


// Mobile menu toggle

function toggleMenu(){

    const menu = document.getElementById("nav-menu");

    menu.classList.toggle("active");

}