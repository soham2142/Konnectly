/* ================= PRICING TOGGLE ================= */

const toggleBtn = document.getElementById("toggle-btn");
const prices = document.querySelectorAll(".price");

let isYearly = false;

toggleBtn.addEventListener("click", () => {
  isYearly = !isYearly;

  if (isYearly) {
    prices[0].innerText = "$0";
    prices[1].innerText = "$190";
    prices[2].innerText = "$490";

    toggleBtn.style.background = "#4f46e5";
    toggleBtn.style.setProperty("--toggle-pos", "translateX(24px)");
    toggleBtn.classList.add("active");
  } else {
    prices[0].innerText = "$0";
    prices[1].innerText = "$19";
    prices[2].innerText = "$49";

    toggleBtn.style.background = "#d1d5db";
    toggleBtn.classList.remove("active");
  }
});

/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* ================= SIMPLE CTA ALERT ================= */

const ctaButtons = document.querySelectorAll(".btn-primary");

ctaButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    alert("🚀 Demo only! Backend coming soon.");
  });
});

/* ================= MOBILE NAV TOGGLE ================= */

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* ================= DARK MODE ================= */

const themeToggle = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  }
});
