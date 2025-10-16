document.addEventListener('DOMContentLoaded', function () {

    setupTypedEffect();
    setupSmoothScrolling();
    setupContactForm();

    window.addEventListener('scroll', updateActiveNav);

    updateActiveNav();
});



function setupTypedEffect() {
    // This code checks if the Typed library is loaded before running
    if (typeof Typed !== 'undefined') {
        var typed = new Typed('#element', {
            strings: ['Web Development', 'AI Tools', 'Sports', 'Music', 'Travelling', 'Learning new things🙃'],
            loop: true,
            typeSpeed: 100,
        });
    }
}



function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav .right p a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            // Get the target section ID from the link's "href"
            const targetId = this.getAttribute('href');

            const targetSection = document.querySelector(targetId);

            // Scroll to the found section smoothly
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Smooth scroll to the "About Me" button on the home screen
    const aboutButton = document.querySelector('.AboutMe-button');
    if (aboutButton) {
        aboutButton.addEventListener('click', function (event) {
            event.preventDefault();
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        });
    }
}




function updateActiveNav() {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav ul li a');

    let currentSectionId = 'home';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
    });


    const activeLink = document.querySelector(`nav ul li a[href="#${currentSectionId}"]`);

    // Add the 'active' class to the correct link
    if (activeLink) {
        activeLink.classList.add('active');
    }
}



function setupContactForm() {
    const form = document.querySelector('.contact form');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();  // Prevent the browser from trying to send the form data to a server

            alert('Message received! Thank you for contacting Subham.');

            form.reset();
        });
    }
}
