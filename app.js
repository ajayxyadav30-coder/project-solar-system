// Select elements
const items = document.querySelectorAll('.crousel .list .item');
const thumbnails = document.querySelectorAll('.thumbnail .item');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let total = items.length;
let active = 0;
let isAnimating = false;

function setActive(index) {
    if (isAnimating || index === active) return;
    isAnimating = true;

    const current = items[active];
    const nextItem = items[index];

    // Add animation classes
    current.classList.remove('active');
    current.classList.add('fade-out');
    nextItem.classList.add('fade-in');

    // Sync thumbnails
    thumbnails[active].classList.remove('active');
    thumbnails[index].classList.add('active');

    // Wait for animation
    setTimeout(() => {
        current.classList.remove('fade-out');
        nextItem.classList.remove('fade-in');
        nextItem.classList.add('active');
        active = index;
        isAnimating = false;
    }, 1500); // slower for smooth cinematic feel
}

next.onclick = () => setActive((active + 1) % total);
prev.onclick = () => setActive((active - 1 + total) % total);
thumbnails.forEach((thumb, i) => thumb.onclick = () => setActive(i));

// Auto slide
setInterval(() => setActive((active + 1) % total), 10000);
