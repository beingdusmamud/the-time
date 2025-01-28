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

document.addEventListener("DOMContentLoaded", () => {
  const totalInput = document.getElementById("totalClasses");
  const attendedInput = document.getElementById("attendedClasses");
  const calculateBtn = document.getElementById("calculateBtn");
  const resultsSection = document.querySelector(".results-section");
  const currentPercentage = document.getElementById("currentPercentage");
  const classesNeeded = document.getElementById("classesNeeded");
  const classesMiss = document.getElementById("classesMiss");

  // Percentage Button Selection
  document.querySelectorAll(".percentage-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document
        .querySelectorAll(".percentage-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // Calculate Function
  calculateBtn.addEventListener("click", () => {
    const total = parseInt(totalInput.value);
    const attended = parseInt(attendedInput.value);
    const targetPercentage = parseInt(
      document.querySelector(".percentage-btn.active").dataset.percentage
    );

    // Validation
    if (isNaN(total) || total <= 0) {
      showError(totalInput, "Please enter a valid number of total classes");
      return;
    }
    if (isNaN(attended) || attended < 0) {
      showError(
        attendedInput,
        "Please enter a valid number of attended classes"
      );
      return;
    }
    if (attended > total) {
      showError(
        attendedInput,
        "Attended classes cannot be more than total classes"
      );
      return;
    }

    // Clear errors
    clearErrors();

    // Calculate results
    const percentage = (attended / total) * 100;
    const classesRequired = Math.ceil(
      (targetPercentage * total - 100 * attended) / (100 - targetPercentage)
    );
    const canMiss = Math.floor((attended * 100) / targetPercentage - total);

    // Update UI
    resultsSection.style.display = "block";
    currentPercentage.textContent = percentage.toFixed(2);
    classesNeeded.textContent = classesRequired > 0 ? classesRequired : 0;
    classesMiss.textContent = canMiss > 0 ? canMiss : 0;

    // Animate percentage circle
    const circle = document.querySelector(".percentage-circle .progress");
    const circumference = 339.292;
    const offset = circumference - (percentage / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: "smooth" });
  });

  // Error handling functions
  function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
    errorElement.style.display = "block";
    input.style.borderColor = "var(--error)";
  }

  function clearErrors() {
    document.querySelectorAll(".error-message").forEach((error) => {
      error.style.display = "none";
    });
    document.querySelectorAll("input").forEach((input) => {
      input.style.borderColor = "var(--border-color)";
    });
  }
});

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

// FAQ Toggle Functionality
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains("active");

    // Close all other FAQs
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active");
    });

    // Toggle current FAQ
    if (!isActive) {
      faqItem.classList.add("active");
    }
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
