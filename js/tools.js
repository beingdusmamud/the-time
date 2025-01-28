// Theme Manager
class ThemeManager {
  constructor() {
    this.themeToggle = document.getElementById("themeToggle");
    this.init();
  }

  init() {
    this.themeToggle.addEventListener("click", () => this.toggleTheme());
    this.setInitialTheme();
  }

  setInitialTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    this.updateToggleIcon(savedTheme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    this.updateToggleIcon(newTheme);
  }

  updateToggleIcon(theme) {
    const icon = this.themeToggle.querySelector("i");
    icon.className = theme === "light" ? "fas fa-moon" : "fas fa-sun";
  }
}
//theme togle end
//header start
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const nav = document.getElementById("nav");

mobileMenuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
  mobileMenuBtn.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    nav.classList.remove("active");
    mobileMenuBtn.classList.remove("active");
  }
});

// Close mobile menu when window is resized
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    nav.classList.remove("active");
    mobileMenuBtn.classList.remove("active");
  }
});
//Header navbar end
// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  new ThemeManager();
});
//header end
// Scroll to Top start
// Scroll to Top start
document.addEventListener("DOMContentLoaded", function () {
  const scrollTopButton = document.getElementById("scrollTop");
  const footer = document.querySelector("footer");

  function updateButtonPosition() {
    const footerRect = footer.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Check if footer is in viewport
    if (footerRect.top < viewportHeight) {
      const newBottom = viewportHeight - footerRect.top + 20; // 20px additional spacing
      scrollTopButton.style.bottom = `${newBottom}px`;
    } else {
      scrollTopButton.style.bottom = "80px"; // Default position
    }
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollTopButton.classList.add("visible");
      scrollTopButton.style.display = "flex";
      updateButtonPosition(); // Update position when visible
    } else {
      scrollTopButton.classList.remove("visible");
      setTimeout(() => {
        if (!scrollTopButton.classList.contains("visible")) {
          scrollTopButton.style.display = "none";
        }
      }, 300);
    }
  });

  // Update position on resize
  window.addEventListener("resize", function () {
    if (scrollTopButton.classList.contains("visible")) {
      updateButtonPosition();
    }
  });

  scrollTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Scroll to Top end
// Scroll to Top end

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// Animate statistics
function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    obj.textContent = current.toLocaleString();
    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Intersection Observer for statistics
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateValue("userCount", 0, 50000, 2000);
      animateValue("calcCount", 0, 1000000, 2000);
      animateValue("toolCount", 0, 21, 1000);
      animateValue("ratingCount", 0, 4.9, 1500);
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(document.querySelector(".stats-section"));

// Hover effect for tool cards
document.querySelectorAll(".tool-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// Hide .html Start
// Create this as main.js or include in your existing main.js

// Function to remove .html extension and handle routing
function removeHTMLExtension() {
  // Don't execute if no .html in URL
  if (!location.href.includes(".html")) return;

  let path = window.location.pathname;
  let cleanPath = path.replace(/\.html$/, "");

  // Update URL without page reload
  window.history.replaceState(null, "", cleanPath);
}

// Function to handle clicks on internal links
function handleLinks() {
  document.addEventListener("click", function (e) {
    // Find closest anchor tag
    const link = e.target.closest("a");

    // If not a link or external link, ignore
    if (!link || !link.href.includes(window.location.origin)) return;

    // If link ends with .html
    if (link.href.endsWith(".html")) {
      e.preventDefault();

      // Remove .html and navigate
      const cleanUrl = link.href.replace(/\.html$/, "");
      window.history.pushState(null, "", cleanUrl);

      // Handle the actual navigation
      fetch(link.href)
        .then((response) => response.text())
        .then((html) => {
          document.documentElement.innerHTML = html;
          // Reinitialize any necessary scripts
          removeHTMLExtension();
          handleLinks();
        });
    }
  });
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  removeHTMLExtension();
  handleLinks();
});

// Handle browser back/forward buttons
window.addEventListener("popstate", function () {
  location.reload();
});
// Hide .html End
