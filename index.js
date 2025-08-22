document.addEventListener('DOMContentLoaded', function() {
    // Select all the side bar
    const navHeadings = document.querySelectorAll('.side-nav .heading');

    // For each menu add click listener event
    navHeadings.forEach(heading => {
        heading.addEventListener('click', function() {
            // get the target id of each page
            const targetId = this.getAttribute('data-target');
            const targetPage = document.getElementById(targetId);

            if (targetPage) {
                // if target page exists, scroll smooth
                targetPage.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all sections and side navigation
    const sections = document.querySelectorAll('.page');
    const navHeadings = document.querySelectorAll('.side-nav .heading');

    const observerOptions = {
        root: null, // Based on view point
        // rootMargin: '0px',
        threshold: 0.5 // when view point is 50%
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Get current section ID
                const currentSectionId = entry.target.id;

                // Remove all active class
                navHeadings.forEach(heading => {
                    heading.classList.remove('active');
                    // if (heading.getAttribute('data-id') === currentSectionId) {
                    //     heading.classList.add('active');
                    // }
                });

                // Find current section and add active class
                const activeHeading = document.querySelector(`.side-nav .heading[data-id="${currentSectionId}"]`);
                if (activeHeading) {
                    activeHeading.classList.add('active');
                }
            }
        });
    }, observerOptions);

    // observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});