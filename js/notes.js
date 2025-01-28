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

// Notes Page Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Filter functionality
  const filterBtns = document.querySelectorAll(".filter-btn");
  const noteCards = document.querySelectorAll(".note-card");
  const searchInput = document.getElementById("searchInput");
  const previewModal = document.getElementById("previewModal");
  const previewImage = document.getElementById("previewImage");
  const previewPdf = document.getElementById("previewPdf");
  const closeModal = document.querySelector(".close-modal");

  // Filter buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      const category = btn.dataset.category;

      noteCards.forEach((card) => {
        if (category === "all" || card.dataset.category === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Search functionality
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();

    noteCards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const description = card
        .querySelector(".note-description")
        .textContent.toLowerCase();

      if (title.includes(searchTerm) || description.includes(searchTerm)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  // Preview functionality
  document.querySelectorAll(".preview-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const previewUrl = btn.dataset.preview;
      const isVideo = previewUrl.match(/\.(mp4|webm)$/i);
      const isPdf = previewUrl.match(/\.pdf$/i);

      previewImage.style.display = "none";
      previewPdf.style.display = "none";

      if (isPdf) {
        previewPdf.src = previewUrl;
        previewPdf.style.display = "block";
      } else {
        previewImage.src = previewUrl;
        previewImage.style.display = "block";
      }

      previewModal.classList.add("active");
    });
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    previewModal.classList.remove("active");
    previewImage.src = "";
    previewPdf.src = "";
  });

  // Close modal on outside click
  previewModal.addEventListener("click", (e) => {
    if (e.target === previewModal) {
      previewModal.classList.remove("active");
      previewImage.src = "";
      previewPdf.src = "";
    }
  });
});

AOS.init({
  duration: 800,
  once: true,
  offset: 100,
});

// Preview functionality
const previewModal = document.querySelector(".preview-modal");
const closePreviewBtn = document.querySelector(".close-preview");
const noteCards = document.querySelectorAll(".note-card");

function openPreview(card) {
  const thumbnail = card.querySelector(".note-thumbnail").src;
  const category = card.querySelector(".note-category").textContent;
  const title = card.querySelector(".note-title").textContent;
  const description = card
    .querySelector(".note-description")
    .textContent.replace("Read More", "")
    .trim();

  // Update preview modal content
  previewModal.querySelector(".preview-image").src = thumbnail;
  previewModal.querySelector(".preview-category").textContent = category;
  previewModal.querySelector(".preview-title").textContent = title;
  previewModal.querySelector(".preview-description").textContent = description;

  // Show modal
  previewModal.classList.add("active");
}

// Event listeners for preview buttons and read more links
noteCards.forEach((card) => {
  const previewBtn = card.querySelector(".preview-btn");
  const readMoreBtn = card.querySelector(".read-more");

  previewBtn.addEventListener("click", () => openPreview(card));
  readMoreBtn.addEventListener("click", () => openPreview(card));
});

// Close preview modal
closePreviewBtn.addEventListener("click", () => {
  previewModal.classList.remove("active");
});

previewModal.addEventListener("click", (e) => {
  if (e.target === previewModal) {
    previewModal.classList.remove("active");
  }
});

// Search and filter functionality
// Replace the existing JavaScript code for search and filter with this:

// Search and filter functionality
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const notesGrid = document.querySelector(".notes-grid");

// Create no results message element
const noResultsMessage = document.createElement("div");
noResultsMessage.style.cssText = `
text-align: center;
grid-column: 1 / -1;
padding: 3rem;
background: var(--primary-bg);
border-radius: 12px;
box-shadow: var(--card-shadow);
margin: 2rem 0;
`;
noResultsMessage.innerHTML = `
<i class="fas fa-search" style="font-size: 3rem; color: var(--accent-color); margin-bottom: 1rem;"></i>
<h3 style="font-family: 'Playfair Display', serif; margin-bottom: 1rem; color: var(--primary-text);">No Notes Found</h3>
<p style="color: var(--secondary-text);">We're constantly adding new notes. Stay tuned for updates!</p>
`;

function filterNotes() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value.toLowerCase().trim();
  let hasVisibleNotes = false;

  // Remove existing no results message if present
  const existingMessage = notesGrid.querySelector(
    'div[style*="text-align: center"]'
  );
  if (existingMessage) {
    existingMessage.remove();
  }

  noteCards.forEach((card) => {
    const title = card.querySelector(".note-title").textContent.toLowerCase();
    const description = card
      .querySelector(".note-description")
      .textContent.toLowerCase();
    const category = card
      .querySelector(".note-category")
      .textContent.toLowerCase();

    const matchesSearch =
      searchTerm === "" ||
      title.includes(searchTerm) ||
      description.includes(searchTerm);

    const matchesCategory =
      selectedCategory === "" || category.includes(selectedCategory);

    if (matchesSearch && matchesCategory) {
      card.style.display = "block";
      hasVisibleNotes = true;
    } else {
      card.style.display = "none";
    }
  });

  // Show no results message if no notes are visible
  if (!hasVisibleNotes) {
    notesGrid.appendChild(noResultsMessage);
    // Add fade-in animation
    noResultsMessage.style.animation = "fadeIn 0.5s ease-in-out";
  }
}

// Add keyup event for immediate search response
searchInput.addEventListener("keyup", filterNotes);
categoryFilter.addEventListener("change", filterNotes);

// Add the CSS animation for fade-in effect
const styleSheet = document.createElement("style");
styleSheet.textContent = `
@keyframes fadeIn {
  from {
      opacity: 0;
      transform: translateY(20px);
  }
  to {
      opacity: 1;
      transform: translateY(0);
  }
}
`;
document.head.appendChild(styleSheet);

// Initial filter to handle any pre-filled values
filterNotes();

// Add this to your existing JavaScript
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains("active");

    // Close all FAQs
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active");
    });

    // Open clicked FAQ if it wasn't active
    if (!isActive) {
      faqItem.classList.add("active");
    }
  });
});

//pdf
// Complete download implementation
function generatePDF(card) {
  // Create PDF content container
  const pdfContent = document.createElement("div");
  pdfContent.style.padding = "40px";
  pdfContent.style.maxWidth = "800px";
  pdfContent.style.margin = "0 auto";
  pdfContent.style.position = "relative";

  // Get content from the card
  const thumbnail = card.querySelector(".note-thumbnail").src;
  const category = card.querySelector(".note-category").textContent;
  const title = card.querySelector(".note-title").textContent;
  const description = card
    .querySelector(".note-description")
    .textContent.replace("Read More", "")
    .trim();
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Create PDF HTML structure
  pdfContent.innerHTML = `
  <div style="font-family: 'Montserrat', sans-serif; 
              color: #2c3e50; 
              position: relative; 
              overflow: hidden;">
      
      <!-- Watermark -->
      <div style="position: fixed;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%) rotate(-45deg);
                  font-size: 100px;
                  opacity: 0.07;
                  z-index: 1;
                  white-space: nowrap;
                  color: #000;
                  pointer-events: none;
                  text-align: center;
                  width: 100%;
                  line-height: 1.5;">
          <i class="fas fa-graduation-cap"></i> TimeIt
      </div>

      <!-- Header -->
      <div style="text-align: center; 
                  margin-bottom: 30px;
                  position: relative;
                  z-index: 2;">
          <img src="${thumbnail}" 
               style="max-width: 100%; 
                      height: auto; 
                      border-radius: 12px; 
                      margin-bottom: 24px;
                      box-shadow: 0 4px 12px rgba(0,0,0,0.1);"
               alt="Note thumbnail">
          
          <div style="display: inline-block; 
                      background-color: #b8860b; 
                      color: white; 
                      padding: 8px 20px; 
                      border-radius: 20px; 
                      font-size: 14px; 
                      margin-bottom: 20px;
                      box-shadow: 0 2px 4px rgba(184,134,11,0.2);">
              ${category}
          </div>
          
          <h1 style="font-size: 28px; 
                     color: #2c3e50; 
                     margin-bottom: 24px;
                     font-weight: 600;
                     line-height: 1.3;
                     padding: 0 20px;">
              ${title}
          </h1>
      </div>
      
      <!-- Content -->
      <div style="line-height: 1.8; 
                  font-size: 16px; 
                  color: #495057; 
                  text-align: justify;
                  position: relative;
                  z-index: 2;
                  margin-bottom: 40px;
                  padding: 0 20px;">
          ${description}
      </div>
      
      <!-- Footer -->
      <div style="margin-top: 40px; 
                  border-top: 2px solid #e9ecef; 
                  padding-top: 20px; 
                  text-align: center;
                  position: relative;
                  z-index: 2;">
          <div style="font-size: 12px; 
                     color: #6c757d;
                     margin-bottom: 12px;">
              Downloaded from TimeIt on ${currentDate}
          </div>
          <div style="font-size: 14px; 
                     color: #b8860b;
                     font-weight: 500;">
              <i class="fas fa-graduation-cap"></i> TimeIt - Your Learning Partner
          </div>
      </div>
  </div>
`;

  // PDF generation options
  const opt = {
    margin: [15, 15, 15, 15], // [top, right, bottom, left] in millimeters
    filename: `TimeIt-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.pdf`,
    image: {
      type: "jpeg",
      quality: 0.98,
    },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
      letterRendering: true,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
      compress: true,
      putOnlyUsedFonts: true,
      precision: 16,
    },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  // Create and show loading toast
  const loadingToast = document.createElement("div");
  loadingToast.className = "loading-toast";
  loadingToast.innerHTML = `
  <div class="loading-spinner"></div>
  <span>Preparing your PDF...</span>
`;
  document.body.appendChild(loadingToast);

  // Generate PDF with error handling
  html2pdf()
    .set(opt)
    .from(pdfContent)
    .save()
    .then(() => {
      // Success message
      loadingToast.style.background = "#2e7d32";
      loadingToast.innerHTML = `
          <i class="fas fa-check"></i>
          <span>Your notes are ready!</span>
      `;

      setTimeout(() => {
        loadingToast.style.opacity = "0";
        setTimeout(() => loadingToast.remove(), 300);
      }, 3000);
    })
    .catch((error) => {
      // Error message
      console.error("PDF generation failed:", error);
      loadingToast.style.background = "#c62828";
      loadingToast.innerHTML = `
          <i class="fas fa-times"></i>
          <span>Download failed. Please try again.</span>
      `;

      setTimeout(() => {
        loadingToast.style.opacity = "0";
        setTimeout(() => loadingToast.remove(), 300);
      }, 3000);
    });
}

// Event listener for download buttons
document.querySelectorAll(".note-card").forEach((card) => {
  const downloadBtn = card.querySelector(".download-btn");

  downloadBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    generatePDF(card);
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
