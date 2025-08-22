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