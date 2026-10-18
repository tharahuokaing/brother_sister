/**
 * Opens the target video website URL in a new browser tab.
 * @param {string} url - The external video link destination
 */
function redirectToVideo(url) {
    if (url) {
        window.open(url, '_blank');
    }
}
