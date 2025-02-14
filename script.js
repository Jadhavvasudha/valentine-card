document.addEventListener('DOMContentLoaded', () => {  // Ensure DOM is fully loaded

    const restartButton = document.getElementById('restart');
    const love = document.querySelector('.love');
    const message = document.querySelector('.message');

    if (!restartButton || !love || !message) {
        console.error("Required elements not found in the DOM.");
        return; // Exit if elements are missing
    }

    restartButton.addEventListener('click', () => {
        // Remove existing animations
        love.style.animation = 'none';
        message.style.animation = 'none';

        // Trigger reflow to reset the animation state
        void love.offsetWidth;
        void message.offsetWidth;

        // Re-apply the animations
        love.style.animation = 'fall 2s linear forwards';
        message.style.animation = 'appear 2s forwards 2s';
    });
});