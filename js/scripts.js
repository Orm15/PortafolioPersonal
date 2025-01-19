/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Función para manejar el toggle de cada descripción
function toggleDescription(buttonId, descriptionId) {
    const description = document.getElementById(descriptionId);
    const toggleButton = document.getElementById(buttonId);

    toggleButton.addEventListener("click", (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        if (description.classList.contains("collapsible")) {
            description.classList.remove("collapsible");
            toggleButton.textContent = "Leer menos";
        } else {
            description.classList.add("collapsible");
            toggleButton.textContent = "Leer más";
        }
    });
}

// Llamamos la función para cada uno de los elementos
for (let index = 1; index <= 12; index++) {
    toggleDescription("toggleButton"+index, "descriptionP"+index);
    
}
