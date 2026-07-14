// Dynamic footer content
document.addEventListener("DOMContentLoaded", () => {
  // Current year
  const currentYearSpan = document.getElementById("current-year");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Last modified
  const lastModifiedSpan = document.getElementById("last-modified");
  if (lastModifiedSpan) {
    const lastMod = document.lastModified;
    lastModifiedSpan.textContent = lastMod;
  }

  // Hamburger menu
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      const isVisible = navMenu.style.display === "flex";

      if (isVisible) {
        navMenu.style.display = "none";
        hamburger.textContent = "☰";
      } else {
        navMenu.style.display = "flex";
        hamburger.textContent = "✕";
      }
    });

    // Close menu when clicking a link (mobile)
    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 768) {
          navMenu.style.display = "none";
          hamburger.textContent = "☰";
        }
      });
    });

    // Close menu when resizing to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        navMenu.style.display = "flex";
        hamburger.textContent = "☰";
      }
    });
  }
});
