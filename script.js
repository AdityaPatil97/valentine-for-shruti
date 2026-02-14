const text = [
    "Hey Shruti ❤️",
    "I built something for you...",
    "Because some stories deserve more than memories.",
    "They deserve a universe."
];

let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing-text");

function typeEffect() {
    if (index < text.length) {
        if (charIndex < text[index].length) {
            typingElement.textContent += text[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 60);
        } else {
            setTimeout(() => {
                typingElement.textContent = "";
                charIndex = 0;
                index++;
                typeEffect();
            }, 1500);
        }
    }
}

typeEffect();

document.getElementById("enter-btn").addEventListener("click", () => {
    document.body.style.transition = "1s";
    document.body.style.opacity = "0";
    setTimeout(() => {
        window.location.href = "story.html";
    }, 1000);
});
