let currentIndex = 0;
const toggleBtn = document.querySelector('.toggle-btn');
const navbar = document.querySelector('#navbar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});

function moveSlide(direction) {
    const wrapper = document.getElementById('slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;


    // 1. Update the index
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    // 2. The Fix: Calculate movement based on the number of slides
    // If totalSlides is 3, each move is 33.33% (100 / 3)
    const movePercentage = 100 / totalSlides;
    const offset = currentIndex * -movePercentage;

    // 3. Apply the transform
    wrapper.style.transform = `translateX(${offset}%)`;
    
    // Log to console for debugging
    console.log("Moving to slide:", currentIndex, "Offset:", offset + "%");
}