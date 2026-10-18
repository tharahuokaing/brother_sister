/**
 * UNIVERSE HUOKAING THARA - Interactive Scripts
 * Script for video overlay playback, UI navigation, and user interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize UI interactions
    initSmoothScrolling();
    initExploreButton();
});

/**
 * Handles playing the video by removing the click overlay.
 * Triggered inline via onclick="playVideo(this)" in the HTML.
 * 
 * @param {HTMLElement} overlayElement - The video overlay clicked by the user
 */
function playVideo(overlayElement) {
    if (!overlayElement) return;

    // Find the parent wrapper and iframe element
    const wrapper = overlayElement.closest('.video-wrapper');
    const iframe = wrapper ? wrapper.querySelector('iframe') : null;

    // Fade out and hide overlay
    overlayElement.style.transition = 'opacity 0.4s ease, visibility 0.4s ease';
    overlayElement.style.opacity = '0';
    overlayElement.style.visibility = 'hidden';

    // Append autoplay parameter if missing to trigger playback inside iframe
    if (iframe) {
        let currentSrc = iframe.getAttribute('src');
        if (currentSrc && !currentSrc.includes('autoplay=1')) {
            const separator = currentSrc.includes('?') ? '&' : '?';
            iframe.setAttribute('src', `${currentSrc}${separator}autoplay=1`);
        }
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
