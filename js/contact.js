const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      successMessage.style.display = "block";
      form.reset();
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    } else {
      throw new Error("Form submission failed");
    }
  } catch (error) {
    errorMessage.style.display = "block";
    setTimeout(() => {
      errorMessage.style.display = "none";
    }, 5000);
  }
});

//theme togle start
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
