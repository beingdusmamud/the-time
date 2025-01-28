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

document.addEventListener("DOMContentLoaded", () => {
  // Mode Selection
  const modeBtns = document.querySelectorAll(".mode-btn");
  const calculators = document.querySelectorAll(".calculator-form");

  modeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      calculators.forEach((calc) => {
        calc.classList.add("hidden");
        if (calc.id === `${btn.dataset.mode}Calculator`) {
          calc.classList.remove("hidden");
        }
      });
    });
  });

  // Weighted Grade Calculator
  window.calculateWeightedGrade = () => {
    let totalGrade = 0;
    let totalWeight = 0;
    let isValid = true;

    document.querySelectorAll(".grade-entry").forEach((entry) => {
      const grade = parseFloat(entry.querySelector(".grade-value").value);
      const weight = parseFloat(entry.querySelector(".weight-value").value);

      if (isNaN(grade) || isNaN(weight)) {
        isValid = false;
        return;
      }

      totalGrade += grade * weight;
      totalWeight += weight;
    });

    if (!isValid || totalWeight === 0) {
      alert("Please enter valid grades and weights");
      return;
    }

    const finalGrade = totalGrade / totalWeight;

    // Update circle progress
    const circle = document.querySelector(".grade-circle .progress");
    const circumference = 339.292;
    const offset = circumference - (finalGrade / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    // Update grade display
    document.querySelector(
      ".grade .percentage"
    ).textContent = `${finalGrade.toFixed(2)}%`;
    document.querySelector(".grade .letter").textContent =
      getLetterGrade(finalGrade);
  };

  // Final Grade Calculator
  window.calculateFinalGrade = () => {
    const current = parseFloat(document.getElementById("currentGrade").value);
    const weight = parseFloat(document.getElementById("finalWeight").value);
    const desired = parseFloat(document.getElementById("desiredGrade").value);

    if (isNaN(current) || isNaN(weight) || isNaN(desired)) {
      alert("Please enter all values");
      return;
    }

    const required = (desired - current * (1 - weight / 100)) / (weight / 100);

    document.querySelector(".final-result").classList.remove("hidden");
    document.querySelector(".required-grade").textContent = `${required.toFixed(
      2
    )}%`;

    const feasibility = document.querySelector(".feasibility");
    if (required > 100) {
      feasibility.textContent = "This grade is not achievable";
      feasibility.style.color = "var(--error)";
    } else if (required < 0) {
      feasibility.textContent = "You have already achieved your desired grade";
      feasibility.style.color = "var(--success)";
    } else {
      feasibility.textContent = "This grade is achievable";
      feasibility.style.color = "var(--success)";
    }
  };

  // GPA Calculator
  window.calculateGPA = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    let isValid = true;

    document.querySelectorAll(".course-entry").forEach((course) => {
      const credits = parseFloat(course.querySelector(".course-credits").value);
      const grade = parseFloat(course.querySelector(".course-grade").value);

      if (isNaN(credits) || isNaN(grade)) {
        isValid = false;
        return;
      }

      totalPoints += credits * grade;
      totalCredits += credits;
    });

    if (!isValid || totalCredits === 0) {
      alert("Please enter valid course information");
      return;
    }

    const gpa = totalPoints / totalCredits;

    document.querySelector(".gpa-result").classList.remove("hidden");
    document.querySelector(".gpa-value").textContent = gpa.toFixed(2);
    document.querySelector(
      ".total-credits"
    ).textContent = `Total Credits: ${totalCredits}`;
  };

  // Helper Functions
  function getLetterGrade(percentage) {
    if (percentage >= 90) return "A";
    if (percentage >= 87) return "A-";
    if (percentage >= 83) return "B+";
    if (percentage >= 80) return "B";
    if (percentage >= 77) return "B-";
    if (percentage >= 73) return "C+";
    if (percentage >= 70) return "C";
    if (percentage >= 67) return "C-";
    if (percentage >= 63) return "D+";
    if (percentage >= 60) return "D";
    return "F";
  }

  // Add/Remove Grade Entries
  document.querySelector(".add-grade-btn").addEventListener("click", () => {
    const template = document.querySelector(".grade-entry").cloneNode(true);
    template.querySelectorAll("input").forEach((input) => (input.value = ""));
    document.querySelector(".grades-list").appendChild(template);
  });

  // Add/Remove Course Entries
  document.querySelector(".add-course-btn").addEventListener("click", () => {
    const template = document.querySelector(".course-entry").cloneNode(true);
    template.querySelectorAll("input").forEach((input) => (input.value = ""));
    template.querySelector("select").value = "";
    document.querySelector(".gpa-grid").appendChild(template);
  });

  // Event Delegation for Remove Buttons
  document.addEventListener("click", (e) => {
    if (e.target.closest(".remove-grade")) {
      const gradesList = document.querySelector(".grades-list");
      if (gradesList.querySelectorAll(".grade-entry").length > 1) {
        e.target.closest(".grade-entry").remove();
      }
    }
    if (e.target.closest(".remove-course")) {
      const coursesList = document.querySelector(".gpa-grid");
      if (coursesList.querySelectorAll(".course-entry").length > 1) {
        e.target.closest(".course-entry").remove();
      }
    }
  });

  // Update Total Weight
  document.querySelector(".grades-list").addEventListener("input", (e) => {
    if (e.target.classList.contains("weight-value")) {
      let total = 0;
      document.querySelectorAll(".weight-value").forEach((input) => {
        total += parseFloat(input.value) || 0;
      });
      document.querySelector(".total-weight span").textContent =
        total.toFixed(1);
    }
  });
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
