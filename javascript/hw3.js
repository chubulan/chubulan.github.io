// text fade in //
document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.querySelector('.text-container');
    textContainer.classList.add('active');
});

// text fade out //
$(document).ready(function() {
    $(window).scroll(function() {
        $(".banner-text").css("opacity", 1 - $(window).scrollTop() / 600);
    });
    $(window).scroll(function() {
        $(".bg_image").css("opacity", 1 - $(window).scrollTop()/ 400);
    });
});

// manga fade in //
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    });

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        observer.observe(element);
    });
});


// text turns white & div darkens //
document.addEventListener("DOMContentLoaded", function() {
    const h1Element = document.querySelector('.onerow h1');
    let darkenTimer;

    function darkenSection() {
        const section = h1Element.closest('.onerow');
        section.classList.add('darken');
    }

    function lightenSection() {
        const section = h1Element.closest('.onerow');
        section.classList.remove('darken');
    }

    function handleScroll() {
        clearTimeout(darkenTimer);

        const h1Position = h1Element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (h1Position < windowHeight && h1Position > 0) {
            darkenTimer = setTimeout(darkenSection, 300);
        }
    }

    window.addEventListener('scroll', handleScroll);
});


// sad words fade in //
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 1 }); // Adjust threshold as needed

    const elements = document.querySelectorAll('.sad-container');
    elements.forEach(element => {
        observer.observe(element);
    });
});




