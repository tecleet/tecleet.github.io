// This code creates the "fade-in on scroll" animation

document.addEventListener("DOMContentLoaded", () => {
    // 1. Select all elements we want to animate
    const hiddenElements = document.querySelectorAll('.hidden');

    // 2. Create an "observer"
    // The observer will watch elements and tell us when they
    // enter the screen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // entry.isIntersecting is true if the element is on screen
            if (entry.isIntersecting) {
                // Add the 'show' class to make it visible
                entry.target.classList.add('show');
            } else {
                // Optional: Remove it if it goes off-screen again
                // entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // 3. Tell the observer to watch each of our hidden elements
    hiddenElements.forEach((el) => observer.observe(el));
});
