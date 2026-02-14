document.addEventListener("DOMContentLoaded", function () {

    const noBtn = document.getElementById("no-btn");
    const yesBtn = document.getElementById("yes-btn");
    const finalMessage = document.getElementById("final-message");
    const buttonsContainer = document.querySelector(".buttons");

    /* Messages for NO button */
    const messages = [
        "Are You Sure? 😳",
        "Think Again 👀",
        "Don't Do This 🥺",
        "I'll Wait Forever ❤️",
        "You Know You Want To 😏"
    ];

    let index = 0;

    /* Move NO button safely */
    function moveButton() {

        const buttonWidth = noBtn.offsetWidth;
        const buttonHeight = noBtn.offsetHeight;

        const maxX = window.innerWidth - buttonWidth - 10;
        const maxY = window.innerHeight - buttonHeight - 10;

        const x = Math.max(0, Math.random() * maxX);
        const y = Math.max(0, Math.random() * maxY);

        noBtn.style.position = "fixed";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";

        noBtn.innerText = messages[index % messages.length];
        index++;
    }

    /* Desktop hover */
    noBtn.addEventListener("mouseover", moveButton);

    /* Mobile touch */
    noBtn.addEventListener("touchstart", function (e) {
        e.preventDefault();
        moveButton();
    });

    /* YES button click */
    yesBtn.addEventListener("click", function () {

        buttonsContainer.style.display = "none";
        finalMessage.style.display = "block";

        startConfetti();
    });

    /* Confetti Effect */
    function startConfetti() {

        const canvas = document.getElementById("confetti");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const pieces = [];

        for (let i = 0; i < 180; i++) {
            pieces.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 6 + 4,
                speed: Math.random() * 3 + 2,
                color: `hsl(${Math.random() * 360}, 100%, 70%)`
            });
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            pieces.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });

            update();
            requestAnimationFrame(draw);
        }

        function update() {
            pieces.forEach(p => {
                p.y += p.speed;
                if (p.y > canvas.height) {
                    p.y = 0;
                }
            });
        }

        draw();
    }

});
