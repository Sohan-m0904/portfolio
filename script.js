// ===== Smooth Scroll for Nav Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
  
  // ===== Navbar Shadow on Scroll =====
  window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      nav.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.5)";
    } else {
      nav.style.boxShadow = "none";
    }
  });
  
  // ===== Typing Effect on Hero Text =====
  const heroText = document.querySelector(".subtitle");
  const text = "A Computer Science graduate passionate about building clean and modern software.";
  let index = 0;
  
  function typeEffect() {
    if (index < text.length) {
      heroText.textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 30);
    }
  }
  
  heroText.textContent = "";
  typeEffect();
  
  // ===== Reveal Animations on Scroll =====
  const revealElements = document.querySelectorAll(".project-card, .about, .contact");
  
  function revealOnScroll() {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }
    });
  }
  
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
  
  // ===== Mobile Nav Toggle =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ===== Profile Picture Slideshow =====
const profilePic = document.getElementById("profile-pic");

const images = [
  "images/Pic 1.jpeg",
  "images/Pic 2.jpeg",
  "images/Pic 3.jpeg",
  "images/Pic 4.jpeg"
];

let currentIndex = 0;

function changeProfilePic() {
  currentIndex = (currentIndex + 1) % images.length;
  profilePic.classList.add("fade-out");

  setTimeout(() => {
    profilePic.src = images[currentIndex];
    profilePic.classList.remove("fade-out");
  }, 500);
}

// change image every 4 seconds
setInterval(changeProfilePic, 4000);
// ===== Fade-in Bubbles on Scroll =====
const bubbles = document.querySelectorAll(".bubble");

function revealBubbles() {
  bubbles.forEach(bubble => {
    const rect = bubble.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      bubble.style.opacity = 1;
      bubble.style.transform = "translateY(0)";
    }
  });
}

bubbles.forEach(bubble => {
  bubble.style.opacity = 0;
  bubble.style.transform = "translateY(20px)";
  bubble.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

window.addEventListener("scroll", revealBubbles);
revealBubbles();
