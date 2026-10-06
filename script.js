const scene = document.getElementById("scene");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

document.querySelectorAll(".eyes").forEach((eyesEl) => {
    for (let i = 0; i < 2; i++) {
        const eye = document.createElement("div");
        eye.className = "eye";
        const pupil = document.createElement("div");
        pupil.className = "pupil";
        eye.appendChild(pupil);
        eyesEl.appendChild(eye);
    }
    const mouth = document.createElement("div");
    mouth.className = "sad-mouth";
    eyesEl.appendChild(mouth);
});

const pupils = document.querySelectorAll(".pupil");
const MAX_PUPIL = 3;

function movePupils(x, y) {
    pupils.forEach((p) => {
        p.style.transform = `translate(${x}px, ${y}px)`;
    });
}

window.addEventListener("mousemove", (e) => {
    if (document.body.classList.contains("password-focus")) return;
    const rect = scene.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.max(Math.hypot(dx, dy), 1);
    movePupils((dx / dist) * MAX_PUPIL, (dy / dist) * MAX_PUPIL);
});

emailInput.addEventListener("focus", () => {
    document.body.classList.add("email-focus");
    movePupils(MAX_PUPIL, MAX_PUPIL);
});
emailInput.addEventListener("blur", () => {
    document.body.classList.remove("email-focus");
});

passwordInput.addEventListener("focus", () => {
    document.body.classList.add("password-focus", "hide-eyes");
});
passwordInput.addEventListener("blur", () => {
    document.body.classList.remove("password-focus", "hide-eyes");
});