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
  duration: 800,
  once: true,
});

// Notice data array
const notices = [
  {
    date: "2025-01-27",
    title: "Retest Examination Results",
    content:
      "Results for the November 2024 Examination are out. Students marked (C) have cleared all subjects; others must retest. For details, please contact the administration office.",
    deadline: "NA",
    link: "https://wa.me/+919101178517",
    isNew: true,
  },

  {
    date: "2025-01-26",
    title: "Class Routine",
    content:
      "This is to inform all students of the 4th and 6th semesters for the academic year 2025-2026 that the class routine has been finalized and is now available for review.",
    deadline: "2025-05-11",
    link: "https://wa.me/+919101178517",
    isNew: true,
  },
  {
    date: "2025-01-21",
    title: "Admission Fees",
    content:
      "All eligible students for the 4th and 6th Semesters at Chirang Polytechnic must pay the admission fees by 11th February 2025. A fine of Rs. 200 will apply from 12th to 15th February for late payments. Fees must be paid offline at the office.",
    deadline: "2025-02-11",
    link: "https://wa.me/+919101178517",
    isNew: false,
  },
  {
    date: "2025-01-21",
    title: "Admission Fees",
    content:
      "This is to inform all eligible students of the 4th and 6th Semesters at Chirang Polytechnic to pay the admission fee of Rs. 1950.00 offline from 22nd January 2025 to 11th February 2025. A late fee of Rs. 200 will apply from 12th to 15th February 2025. No further extensions will be given. Students with a back in the 2nd Semester are debarred from admission.",
    deadline: "2025-02-11",
    link: "https://wa.me/+919101178517",
    isNew: false,
  },
];

// Sort notices by date (most recent first)
notices.sort((a, b) => new Date(b.date) - new Date(a.date));

// Function to format date
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

// Create timeline items
const timelineContainer = document.querySelector(".timeline-container");
notices.forEach((notice, index) => {
  const timelineItem = document.createElement("div");
  timelineItem.className = "timeline-item";
  timelineItem.setAttribute(
    "data-aos",
    index % 2 === 0 ? "fade-left" : "fade-right"
  );

  timelineItem.innerHTML = `
  <div class="timeline-dot"></div>
  <div class="timeline-content">
      ${notice.isNew ? '<span class="new-badge">New</span>' : ""}
      <div class="timeline-date">
          <i class="fas fa-calendar-alt"></i>
          ${formatDate(notice.date)}
      </div>
      <h3 class="notice-title">${notice.title}</h3>
      <p class="notice-text">${notice.content}</p>
      <div class="notice-meta">
          <div class="deadline">
              <i class="fas fa-clock"></i>
              Deadline: ${formatDate(notice.deadline)}
          </div>
          <a href="${notice.link}" class="read-more">
              Read More
              <i class="fas fa-arrow-right"></i>
          </a>
      </div>
  </div>
`;

  timelineContainer.appendChild(timelineItem);
});

// Add acknowledgment button functionality
document
  .querySelector(".acknowledge-btn")
  .addEventListener("click", function () {
    this.innerHTML = '<i class="fas fa-check-double"></i> Acknowledged';
    this.style.background = "#1b5e20";
    this.disabled = true;
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
