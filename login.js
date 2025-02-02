// Security through obscurity - Basic encryption
const encrypt = (text) => {
  return btoa(text.split("").reverse().join(""));
};

// Stored encrypted credentials
const VALID_CREDENTIALS = {
  username: encrypt("dusmamud"),
  password: encrypt("dus@121200"),
};

// Elements
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");
const loadingAnimation = document.getElementById("loadingAnimation");
const progressBar = document.getElementById("progressBar");

// Loading animation
function showLoading() {
  loadingAnimation.style.display = "flex";
  let progress = 0;
  const interval = setInterval(() => {
    progress += 1;
    progressBar.style.width = `${progress}%`;
    if (progress >= 100) clearInterval(interval);
  }, 50);
}

// Form submission handler
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Validate credentials
  if (
    encrypt(username) === VALID_CREDENTIALS.username &&
    encrypt(password) === VALID_CREDENTIALS.password
  ) {
    errorMessage.style.display = "none";
    showLoading();

    // Secure session storage
    const sessionToken = encrypt(Date.now().toString());
    sessionStorage.setItem("adminSession", sessionToken);

    // Redirect after 5 seconds
    setTimeout(() => {
      window.location.href = "AdminDashboard.html";
    }, 5000);
  } else {
    errorMessage.style.display = "block";
    loginForm.classList.add("animate__animated", "animate__shakeX");
    setTimeout(() => {
      loginForm.classList.remove("animate__animated", "animate__shakeX");
    }, 1000);
  }
});

// Security measures
document.addEventListener("DOMContentLoaded", () => {
  // Clear any existing sessions
  sessionStorage.clear();

  // Prevent going back after logout
  history.pushState(null, null, location.href);
  window.onpopstate = function () {
    history.go(1);
  };
});

// Disable right-click
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Disable F12 and other debug keys
document.addEventListener("keydown", (e) => {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && e.key === "I") ||
    (e.ctrlKey && e.shiftKey && e.key === "J") ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
  }
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

// Check if user is coming from direct URL
if (document.referrer === "") {
  window.location.href = "/"; // Redirect to home page
}
