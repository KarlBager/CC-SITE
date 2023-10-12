function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    const initialX = Math.random() * window.innerWidth;
    const initialY = window.innerHeight + 50; // Start just below the viewport
    const animationDuration = 10 + Math.random() * 10 + 's'; // Randomize animation duration

    bubble.style.left = `${initialX}px`;
    bubble.style.top = `${initialY}px`;
    bubble.style.animationDuration = animationDuration;

    document.getElementById('bubble-container').appendChild(bubble);

    bubble.addEventListener('animationiteration', () => {
        bubble.style.left = `${Math.random() * window.innerWidth}px`;
        bubble.style.top = `${window.innerHeight + 50}px`;
    });

    setTimeout(() => {
        bubble.remove();
    }, parseFloat(animationDuration) * 1000 + 1000); // Adjust bubble lifetime
}

setInterval(createBubble, 3000); // Adjust the interval for spawning bubbles (in milliseconds)