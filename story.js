const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;
let slideInterval;

/* Show Slide */
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentIndex = index;
}

/* Manual Slide (Dot Click) */
function currentSlide(n) {
    showSlide(n);
    resetAutoSlide();
}

/* Auto Slide */
function startAutoSlide() {
    slideInterval = setInterval(() => {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }, 4000); // 4 seconds
}

/* Reset Auto Slide when manually clicked */
function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

/* Start auto slide when page loads */
startAutoSlide();

/* Continue button transition */
document.getElementById("next-btn").addEventListener("click", () => {
    document.body.style.transition = "1s";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "college.html";
    }, 1000);
});
