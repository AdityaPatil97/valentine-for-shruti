document.addEventListener("DOMContentLoaded", function () {

    const nextBtn = document.getElementById("next-btn");

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {

            document.body.style.transition = "opacity 0.8s ease";
            document.body.style.opacity = "0";

            setTimeout(() => {
                window.location.href = "special.html";
            }, 800);

        });
    }

});
