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
  const semestersContainer = document.getElementById("semestersContainer");
  const addSemesterBtn = document.getElementById("addSemesterBtn");
  const resetBtn = document.getElementById("resetBtn");
  const calculateBtn = document.getElementById("calculateBtn");
  const resultsSection = document.querySelector(".results-section");
  let semesterCount = 1;

  // Add Semester
  addSemesterBtn.addEventListener("click", () => {
    semesterCount++;
    const semesterTemplate = document
      .querySelector(".semester-card")
      .cloneNode(true);
    semesterTemplate.dataset.semester = semesterCount;
    semesterTemplate.querySelector(
      "h3"
    ).textContent = `Semester ${semesterCount}`;

    // Clear values
    semesterTemplate
      .querySelectorAll("input")
      .forEach((input) => (input.value = ""));
    semesterTemplate
      .querySelectorAll("select")
      .forEach((select) => (select.value = ""));

    // Reset summary
    semesterTemplate.querySelector(".semester-gpa").textContent = "0.00";
    semesterTemplate.querySelector(".semester-credits").textContent = "0";

    semestersContainer.appendChild(semesterTemplate);
    initializeSemesterEvents(semesterTemplate);
  });

  // Reset All
  resetBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to reset all data?")) {
      semesterCount = 1;
      semestersContainer.innerHTML = "";
      const defaultSemester = document
        .querySelector(".semester-card")
        .cloneNode(true);
      semestersContainer.appendChild(defaultSemester);
      initializeSemesterEvents(defaultSemester);
      resultsSection.style.display = "none";
    }
  });

  // Calculate CGPA
  calculateBtn.addEventListener("click", () => {
    let totalPoints = 0;
    let totalCredits = 0;
    let isValid = true;

    document.querySelectorAll(".semester-card").forEach((semester) => {
      semester.querySelectorAll(".course-entry").forEach((course) => {
        const credits = parseFloat(
          course.querySelector(".course-credits").value
        );
        const grade = parseFloat(course.querySelector(".course-grade").value);

        if (isNaN(credits) || isNaN(grade)) {
          isValid = false;
          return;
        }

        totalPoints += credits * grade;
        totalCredits += credits;
      });
    });

    if (!isValid) {
      alert("Please fill in all course details correctly.");
      return;
    }

    const cgpa = totalPoints / totalCredits;

    // Update UI
    resultsSection.style.display = "block";
    document.getElementById("cgpaValue").textContent = cgpa.toFixed(2);
    document.getElementById("totalCredits").textContent = totalCredits;

    // Update performance text
    const performance = document.getElementById("performance");
    if (cgpa >= 9) performance.textContent = "Outstanding";
    else if (cgpa >= 8) performance.textContent = "Excellent";
    else if (cgpa >= 7) performance.textContent = "Very Good";
    else if (cgpa >= 6) performance.textContent = "Good";
    else if (cgpa >= 5) performance.textContent = "Average";
    else performance.textContent = "Need Improvement";

    // Animate CGPA circle
    const circle = document.querySelector(".cgpa-circle .progress");
    const circumference = 339.292;
    const offset = circumference - (cgpa / 10) * circumference;
    circle.style.strokeDashoffset = offset;

    // Scroll to results
    resultsSection.scrollIntoView({ behavior: "smooth" });
  });

  // Initialize events for a semester
  function initializeSemesterEvents(semesterCard) {
    // Add Course
    semesterCard
      .querySelector(".add-course-btn")
      .addEventListener("click", () => {
        const courseTemplate = semesterCard
          .querySelector(".course-entry")
          .cloneNode(true);
        courseTemplate
          .querySelectorAll("input")
          .forEach((input) => (input.value = ""));
        courseTemplate.querySelector("select").value = "";
        semesterCard
          .querySelector(".courses-container")
          .appendChild(courseTemplate);
      });

    // Remove Course
    semesterCard.addEventListener("click", (e) => {
      if (e.target.closest(".remove-course-btn")) {
        const coursesContainer =
          semesterCard.querySelector(".courses-container");
        if (coursesContainer.children.length > 1) {
          e.target.closest(".course-entry").remove();
        }
      }
    });

    // Remove Semester
    semesterCard
      .querySelector(".remove-semester-btn")
      .addEventListener("click", () => {
        if (document.querySelectorAll(".semester-card").length > 1) {
          semesterCard.remove();
        }
      });
  }

  // Initialize first semester
  initializeSemesterEvents(document.querySelector(".semester-card"));
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
