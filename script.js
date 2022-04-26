//Selecting Elements


const aboutSection = document.querySelector('.about');
const websitesSection = document.querySelector('.websites');
const footer = document.querySelector('.footer');

const nav = document.querySelector('.header__menu');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('.section')




//Implementing Smooth Scroll

document.querySelector('.nav--links').addEventListener('click', function(e) {
    const event = e.target.classList.contains('nav--link');
    e.preventDefault();

    if(event) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'})

    }
})

// Implementing sticky navbar

//1 Get the height of the nav
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) nav.classList.add('sticky')
        else nav.classList.remove('sticky');
    })
}

const headerOvserver = new IntersectionObserver(stickyNav, {
    root: null,
    thrashold: 0,
    rootMargin: `-${navHeight}px`
} );

headerOvserver.observe(header);

// implementing revealing sections


const revealSection = function(entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;

        entry.target.classList.remove('section--hidden');
        observer.unobserve(entry.target);
    })
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    thrashold: 0.1,
    rootMargin: '-100px'
})

sections.forEach(function(section) {
    sectionObserver.observe(section)
    section.classList.add('section--hidden')
})






