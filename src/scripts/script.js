gsap.registerPlugin(ScrollTrigger);

// Helpers
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* --------------------------------
   Mobile menu
-------------------------------- */
const menuBtn = $("#menuBtn");
const navLinks = $("#navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

$$(".nav-links a").forEach((a) => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

/* --------------------------------
   Typing effect
-------------------------------- */
const typingEl = $("#typingText");
const roles = [
  "Engineering Student",
  "Web Developer",
  "Learner",
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typingLoop() {
  const current = roles[roleIndex];

  if (!deleting) {
    typingEl.textContent = current.slice(0, charIndex++);
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(typingLoop, 1000);
      return;
    }
  } else {
    typingEl.textContent = current.slice(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typingLoop, deleting ? 45 : 80);
}

typingLoop();

/* --------------------------------
   Scroll progress
-------------------------------- */
const scrollProgress = $("#scrollProgress");

globalThis.addEventListener("scroll", () => {
  const h = document.documentElement;
  const scrolled =
    (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  scrollProgress.style.width = scrolled + "%";
});

/* --------------------------------
   Back to top
-------------------------------- */
const topBtn = $("#topBtn");

globalThis.addEventListener("scroll", () => {
  if (globalThis.scrollY > 500) topBtn.classList.add("show");
  else topBtn.classList.remove("show");
});

topBtn.addEventListener("click", () => {
  globalThis.scrollTo({ top: 0, behavior: "smooth" });
});

/* --------------------------------
   Smooth scroll for nav links
-------------------------------- */
$$('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

/* --------------------------------
   Custom cursor glow (desktop)
-------------------------------- */
const cursorDot = $("#cursorDot");
const cursorRing = $("#cursorRing");

let mouseX = globalThis.innerWidth / 2;
let mouseY = globalThis.innerHeight / 2;
let ringX = mouseX;
let ringY = mouseY;

globalThis.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursorDot.style.left = mouseX + "px";
  cursorDot.style.top = mouseY + "px";
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.18;
  ringY += (mouseY - ringY) * 0.18;
  cursorRing.style.left = ringX + "px";
  cursorRing.style.top = ringY + "px";
  requestAnimationFrame(animateRing);
}

animateRing();

// Cursor hover state
const hoverables = $$("a, button, .tilt");

hoverables.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursorRing.style.width = "52px";
    cursorRing.style.height = "52px";
    cursorRing.style.borderColor = "rgba(123, 97, 255, 0.95)";
  });

  el.addEventListener("mouseleave", () => {
    cursorRing.style.width = "34px";
    cursorRing.style.height = "34px";
    cursorRing.style.borderColor = "rgba(0, 212, 255, 0.7)";
  });
});

/* --------------------------------
   Three.js hero background
   (lightweight particle sphere)
-------------------------------- */
(function initThree() {
  const canvas = document.getElementById("heroCanvas");
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    60,
    globalThis.innerWidth / globalThis.innerHeight,
    0.1,
    1000,
  );

  camera.position.z = 45;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });

  renderer.setPixelRatio(Math.min(globalThis.devicePixelRatio, 1.8));
  renderer.setSize(globalThis.innerWidth, globalThis.innerHeight);

  // Particle sphere
  const particlesCount = globalThis.innerWidth < 768 ? 900 : 1800;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    const i3 = i * 3;
    const radius = 20 + Math.random() * 8;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i3 + 2] = radius * Math.cos(phi);
  }

  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3),
  );

  const material = new THREE.PointsMaterial({
    size: 0.12,
    color: 0x7dd3fc,
    transparent: true,
    opacity: 0.9,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // Secondary glow mesh
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(10, 36, 36),
    new THREE.MeshBasicMaterial({
      color: 0x7b61ff,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    }),
  );

  scene.add(sphere);

  let targetRotX = 0;
  let targetRotY = 0;

  globalThis.addEventListener("mousemove", (e) => {
    targetRotY =
      (e.clientX / globalThis.innerWidth - 0.5) * 0.35;
    targetRotX =
      (e.clientY / globalThis.innerHeight - 0.5) * 0.2;
  });

  function animate() {
    points.rotation.y += 0.0009;
    points.rotation.x += 0.00035;

    sphere.rotation.y += 0.0012;
    sphere.rotation.x += 0.00065;

    points.rotation.y += (targetRotY - points.rotation.y) * 0.01;
    points.rotation.x += (targetRotX - points.rotation.x) * 0.01;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();

  globalThis.addEventListener("resize", () => {
    camera.aspect = globalThis.innerWidth / globalThis.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(globalThis.innerWidth, globalThis.innerHeight);
  });
})();

/* --------------------------------
   3D tilt cards (projects)
-------------------------------- */
$$(".tilt").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;

    card.style.transform =
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg)";
  });
});

/* --------------------------------
   GSAP animations
-------------------------------- */
gsap.from(".hero-content > *", {
  y: 30,
  opacity: 0,
  duration: 0.9,
  ease: "power3.out",
  stagger: 0.12,
});

$$(".reveal").forEach((el) => {
  gsap.to(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 84%",
      toggleActions: "play none none reverse",
    },
    y: 0,
    opacity: 1,
    duration: 0.9,
    ease: "power3.out",
  });
});

// Skill bars animate on view
$$(".bar span").forEach((bar) => {
  const finalWidth = bar.dataset.width || "70%";

  gsap.to(bar, {
    width: finalWidth,
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: bar,
      start: "top 90%",
    },
  });
});

// Counter animation
$$(".counter").forEach((counter) => {
  const target = parseInt(counter.dataset.target || "0", 10);

  gsap.fromTo(
    counter,
    { innerText: 0 },
    {
      innerText: target,
      duration: 1.8,
      ease: "power1.out",
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: counter,
        start: "top 90%",
      },
    },
  );
});

/* --------------------------------
   Optional sounds
-------------------------------- */
let soundEnabled = false;
const soundToggle = $("#soundToggle");
const hoverSound = $("#hoverSound");
const clickSound = $("#clickSound");

soundToggle.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  soundToggle.textContent = soundEnabled ? "🔊" : "🔈";
});

function playSound(audioEl, volume = 0.18) {
  if (!soundEnabled || !audioEl) return;
  audioEl.volume = volume;
  audioEl.currentTime = 0;
  audioEl.play().catch(() => {});
}

$$(".sfx-hover").forEach((el) => {
  el.addEventListener("mouseenter", () => playSound(hoverSound, 0.12));
});

$$(".sfx-click").forEach((el) => {
  el.addEventListener("click", () => playSound(clickSound, 0.18));
});

/* --------------------------------
   Footer year
-------------------------------- */
$("#year").textContent = new Date().getFullYear();
