"use strict";

// Boutons de nav
    const navTriggerBtn = document.querySelector('#nav_trigger_btn');
    const navMenu = document.querySelector('#nav_menu');

    navTriggerBtn.addEventListener('click', ()=> {
        navMenu.classList.toggle('nav-is-open');
    });

// Sliders
    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // breakpoints
        slidesPerView: 3,
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            960: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        }
    });

// scroll reveal

    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 3000,
        delay: 600,
        // reset: true,
    });

    // Hero
    sr.reveal('.hero__text', {origin: 'top'} );

    // steps 
    sr.reveal('.steps__step', {distance: '100px', interval: 100} );

    // About
    sr.reveal('.about__img', {origin: 'right'} );
    sr.reveal('.about__text', {origin: 'left', delay: 800} );

    // Testimonial
    sr.reveal('.testimonial__bg', {delay: 800} );
    sr.reveal('.testimonial__title');
    sr.reveal('.testimonial__slider', {delay: 1000});

    // Brands
    sr.reveal('.brands__img', {
        delay: 600, 
        distance: '100px', 
        interval: 100
    });

    // Projects
    sr.reveal('.work__title');
    sr.reveal('.work__subtitle', {delay: 800} );
    sr.reveal('.work__grid', {delay: 1000} );

    // Stats
    sr.reveal('.stats');

    sr.reveal('.stats__item', {
        distance: '100px',
        interval: 100,
    });

    // news
    sr.reveal('.news__title');
    sr.reveal('.news__subtitle', {delay: 800} );

    sr.reveal('.news__item', {
        distance: '100px',
        interval: 100,
        delay: 1000,
    });

    // contact
    sr.reveal('.contact__container');
    sr.reveal('.contact__text', {delay: 800});

    // footer
    sr.reveal('.footer__item', {
        distance: '100px',
        interval: 100,
    });

    sr.reveal('.footer__copyright');

    