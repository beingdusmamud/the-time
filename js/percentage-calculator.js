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

document.addEventListener("DOMContentLoaded", () => {
  // Mode Selection
  const modeBtns = document.querySelectorAll(".mode-btn");
  const calculators = document.querySelectorAll(".calculator-form");

  modeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;

      // Update active button
      modeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Show selected calculator
      calculators.forEach((calc) => {
        calc.classList.add("hidden");
        if (calc.id === `${mode}Calculator`) {
          calc.classList.remove("hidden");
        }
      });
    });
  });

  // Simple Percentage Calculator
  window.calculateSimplePercentage = () => {
    const value = parseFloat(document.getElementById("value").value);
    const total = parseFloat(document.getElementById("total").value);

    if (isNaN(value) || isNaN(total)) {
      document.getElementById("simpleResult").textContent =
        "Please enter valid numbers";
      return;
    }

    const result = (value / total) * 100;
    document.getElementById(
      "simpleResult"
    ).textContent = `${value} is ${result.toFixed(2)}% of ${total}`;
  };

  // Marks to Percentage Calculator
  window.calculateMarksPercentage = () => {
    const obtained = parseFloat(document.getElementById("marksObtained").value);
    const total = parseFloat(document.getElementById("totalMarks").value);

    if (isNaN(obtained) || isNaN(total)) {
      document.getElementById("marksResult").textContent =
        "Please enter valid marks";
      return;
    }

    const percentage = (obtained / total) * 100;
    document.getElementById(
      "marksResult"
    ).textContent = `Percentage: ${percentage.toFixed(2)}%`;

    // Show grade information
    const gradeInfo = document.getElementById("gradeInfo");
    const gradeText = document.getElementById("gradeText");
    const gradeProgress = document.querySelector(".grade-progress");

    gradeInfo.classList.remove("hidden");
    gradeProgress.style.width = `${percentage}%`;

    // Determine grade
    let grade;
    if (percentage >= 90) grade = "A (Excellent)";
    else if (percentage >= 80) grade = "B (Very Good)";
    else if (percentage >= 70) grade = "C (Good)";
    else if (percentage >= 60) grade = "D (Pass)";
    else grade = "F (Fail)";

    gradeText.textContent = `Grade: ${grade}`;
  };

  // Percentage Change Calculator
  window.calculatePercentageChange = () => {
    const original = parseFloat(document.getElementById("originalValue").value);
    const newValue = parseFloat(document.getElementById("newValue").value);

    if (isNaN(original) || isNaN(newValue)) {
      document.getElementById("changeResult").textContent =
        "Please enter valid numbers";
      return;
    }

    const change = ((newValue - original) / original) * 100;
    const indicator = document.getElementById("changeIndicator");

    document.getElementById(
      "changeResult"
    ).textContent = `Percentage Change: ${Math.abs(change).toFixed(2)}%`;

    indicator.classList.remove("hidden");
    indicator.querySelector("i").className =
      change >= 0 ? "fas fa-arrow-up" : "fas fa-arrow-down";
    indicator.querySelector("span").textContent =
      change >= 0 ? "Increase" : "Decrease";
    indicator.className = `change-indicator ${
      change >= 0 ? "increase" : "decrease"
    }`;
  };
});

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
