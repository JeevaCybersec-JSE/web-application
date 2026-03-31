// Canvas Setup
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Particles (Dino energy effect)
let particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = "#00f7ff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Create particles
for (let i = 0; i < 120; i++) {
    particles.push(new Particle());
}

// Animate
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

animate();

// Mouse Glow Effect
window.addEventListener("mousemove", (e) => {
    particles.forEach(p => {
        let dx = p.x - e.x;
        let dy = p.y - e.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
            p.x += dx * 0.02;
            p.y += dy * 0.02;
        }
    });
});

// Login Button
function login() {
    alert("Welcome to DinoVerse 🦖🔥");
}

// Resize Fix
window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
