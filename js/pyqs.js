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

AOS.init({
  duration: 800,
  once: true,
});

// Sample PYQ data
const pyqData = [
  {
    title: "EED Regular",
    subject: "EED",
    year: "2023",
    semester: "3",
    pdfLink: "https://drive.google.com/uc?id=1z1sF4UJpWSbkaOljxisl-X55mhWlh4gq",
  },
  {
    title: "EED Regular",
    subject: "EED",
    year: "2022",
    semester: "3",
    pdfLink: "https://drive.google.com/uc?id=180UP_NxCBBxU8eIi5sV-XYeAHLM42ZMq",
  },
  {
    title: "EED Regular",
    subject: "EED",
    year: "2021",
    semester: "3",
    pdfLink: "https://drive.google.com/uc?id=157-1NGhDPmj_iVAQWNgCEAU6QXjNpMga",
  },
  {
    title: "EED Regular",
    subject: "EED",
    year: "2019",
    semester: "3",
    pdfLink: "https://drive.google.com/uc?id=1erh1HkYsFOy4pPWnaGGhPKvn3qyJizuX",
  },
  {
    title: "PEE Regular",
    subject: "PEE",
    year: "2019",
    semester: "3",
    pdfLink: "https://drive.google.com/uc?id=1JSU5Z7jEdgWJXsgpoVH-Lmel4BdDZjwW",
  },
  {
    title: "PEE Regular",
    subject: "PEE",
    year: "2022",
    semester: "3",
    pdfLink: "https://drive.google.com/uc?id=14cJ2y21PoLmf80QHBhfDfzENFA2e7sqj",
  },

  // Add more PYQ data as needed
];

// Function to create PYQ card
function createPYQCard(pyq) {
  return `
          <div class="pyq-card" data-aos="fade-up">
              <span class="pyq-subject">${pyq.subject}</span>
              <h3 class="pyq-title">${pyq.title}</h3>
              <div class="pyq-info">
                  <span><i class="fas fa-calendar-alt"></i> ${pyq.year}</span>
                  <span><i class="fas fa-list-alt"></i> ${pyq.semester} Sem</span>
              </div>
              <a href="${pyq.pdfLink}" class="download-btn" target="_blank">
                  <i class="fas fa-download"></i> Download PDF
              </a>
          </div>
      `;
}

// Filter functionality
function filterPYQs() {
  const yearFilter = document.getElementById("yearFilter").value;
  const semesterFilter = document.getElementById("semesterFilter").value;
  const subjectFilter = document.getElementById("subjectFilter").value;
  const pyqGrid = document.getElementById("pyqGrid");

  const filteredPYQs = pyqData.filter((pyq) => {
    return (
      (!yearFilter || pyq.year === yearFilter) &&
      (!semesterFilter || pyq.semester === semesterFilter) &&
      (!subjectFilter || pyq.subject === subjectFilter)
    );
  });

  // Sort by year (newest first)
  filteredPYQs.sort((a, b) => b.year - a.year);

  // Display filtered results
  if (filteredPYQs.length === 0) {
    pyqGrid.innerHTML = `
              <div class="no-results">
                  <i class="fas fa-search"></i>
                  <h3>No Previous Year Questions Found</h3>
                  <p>We'll add more papers soon. Stay tuned!</p>
              </div>
          `;
  } else {
    pyqGrid.innerHTML = filteredPYQs.map(createPYQCard).join("");
  }
}

// Add event listeners
document.getElementById("yearFilter").addEventListener("change", filterPYQs);
document
  .getElementById("semesterFilter")
  .addEventListener("change", filterPYQs);
document.getElementById("subjectFilter").addEventListener("change", filterPYQs);

// Initial load
filterPYQs();

// FAQ Toggle Functionality
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    const isActive = faqItem.classList.contains("active");

    // Close all FAQ items
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active");
    });

    // Open clicked item if it wasn't active
    if (!isActive) {
      faqItem.classList.add("active");
    }

    // Add animation
    faqItem.style.animation = "none";
    faqItem.offsetHeight; // Trigger reflow
    faqItem.style.animation = "fadeIn 0.5s ease-in-out";
  });
});

// Add this to your existing styles
document.head.insertAdjacentHTML(
  "beforeend",
  `
<style>
@keyframes fadeIn {
    from {
        opacity: 0.8;
        transform: translateY(-5px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
`
);

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
