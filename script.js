/**
 * UNIVERSE HUOKAING THARA - Interactive Scripts
 * Script for external video redirection, UI navigation, and user interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize UI interactions
    initSmoothScrolling();
    initExploreButton();
});

/**
 * Opens the target video website URL in a new browser tab.
 * Triggered inline via onclick="redirectToVideo(url)" in the HTML.
 * 
 * @param {string} url - The external video link destination
 */
function redirectToVideo(url) {
    if (url) {
        window.open(url, '_blank');
    }
}

/**
 * Sets up smooth scrolling for header navigation links.
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Handles the Explore CTA button to scroll directly to the video section.
 */
function initExploreButton() {
    const exploreBtn = document.getElementById('explore-btn');
    const hotMoviesSection = document.getElementById('hot-movies');

    if (exploreBtn && hotMoviesSection) {
        exploreBtn.addEventListener('click', () => {
            hotMoviesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
}
