document.addEventListener("DOMContentLoaded", function () {

    const lines = document.querySelectorAll(".line");
    const nextBtn = document.getElementById("next-btn");

    /* Reveal lines one by one */
    function revealLines() {
        lines.forEach((line, index) => {
            setTimeout(() => {
                line.classList.add("show");
            }, index * 900); // smoother spacing
        });
    }

    revealLines();

    /* Continue Button */
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {

            document.body.style.transition = "opacity 0.8s ease";
            document.body.style.opacity = "0";

            setTimeout(() => {
                window.location.href = "proposal.html";
            }, 800);

        });
    }

});
