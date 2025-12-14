// =============================
// Footer Year
// =============================
(function () {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
})();


// =============================
// Smooth Reveal on Scroll
// =============================
(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();


// =============================
// Contact Form Handler (Formspree Compatible)
// =============================
(function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  if (!form) return;

  form.addEventListener("submit", () => {
    if (status) {
      status.textContent = "Sending...";
      status.style.color = "var(--accent)";
    }

    // Allow Formspree to process the submission normally
    setTimeout(() => {
      if (status) {
        status.textContent = "Message sent successfully!";
        status.style.color = "#22c55e"; // green success color
      }
    }, 600);
  });
})();

// Share button
(function () {
  const shareBtn = document.getElementById("shareBtn");

  if (!shareBtn || !navigator.share) return;

  shareBtn.addEventListener("click", () => {
    navigator.share({
      title: "Mickey Digital Works",
      text: "Check out this web developer portfolio by Chris at Mickey Digital Works.",
      url: window.location.href,
    });
  });
})();

// Share fallback (copy link)
(function () {
  const shareBtn = document.getElementById("shareBtn");

  if (!shareBtn || navigator.share) return;

  shareBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      shareBtn.textContent = "Link Copied!";
      setTimeout(() => {
        shareBtn.textContent = "Share This Site";
      }, 2000);
    } catch (err) {
      alert("Copy this link: " + window.location.href);
    }
  });
})();

// Mobile menu toggle
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}
