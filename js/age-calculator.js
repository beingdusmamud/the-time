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

// DOM Elements
document.addEventListener("DOMContentLoaded", function () {
  // Input Elements
  const birthDay = document.getElementById("birthDay");
  const birthMonth = document.getElementById("birthMonth");
  const birthYear = document.getElementById("birthYear");
  const currentDay = document.getElementById("currentDay");
  const currentMonth = document.getElementById("currentMonth");
  const currentYear = document.getElementById("currentYear");
  const calculateBtn = document.querySelector(".calculate-btn");

  // Result Elements
  const resultSection = document.querySelector(".age-result");
  const yearValue = document.querySelector(".years .card-value");
  const monthValue = document.querySelector(".months .card-value");
  const dayValue = document.querySelector(".days .card-value");
  const exactYearsSpan = document.querySelector(".exact-years");

  // Mode Switching
  const modeBtns = document.querySelectorAll(".mode-btn");
  const calculatorForms = {
    basic: document.getElementById("basicCalculator"),
    detailed: document.getElementById("detailedCalculator"),
    milestone: document.getElementById("milestoneCalculator"),
  };

  // Input Validation Functions
  function validateDay(day, month, year) {
    const daysInMonth = new Date(year, month, 0).getDate();
    return day > 0 && day <= daysInMonth;
  }

  function validateMonth(month) {
    return month > 0 && month <= 12;
  }

  function validateYear(year) {
    const currentYear = new Date().getFullYear();
    return year > 1900 && year <= currentYear;
  }

  // Input Event Listeners
  function addInputValidation(input, validationFn) {
    input.addEventListener("input", function () {
      let value = this.value.replace(/\D/g, "");
      this.value = value;

      if (value && !validationFn(parseInt(value))) {
        this.classList.add("error");
        showError(
          `Invalid ${this.id.replace("birth", "").replace("current", "")}`
        );
      } else {
        this.classList.remove("error");
      }
    });
  }

  // Add validation to day inputs
  [birthDay, currentDay].forEach((input) => {
    addInputValidation(input, (value) => {
      const month = input.id.includes("birth")
        ? birthMonth.value
        : currentMonth.value;
      const year = input.id.includes("birth")
        ? birthYear.value
        : currentYear.value;
      return validateDay(value, month, year);
    });
  });

  // Add validation to month inputs
  [birthMonth, currentMonth].forEach((input) => {
    addInputValidation(input, validateMonth);
  });

  // Add validation to year inputs
  [birthYear, currentYear].forEach((input) => {
    addInputValidation(input, validateYear);
  });

  // Set Today's Date
  function setToday() {
    const today = new Date();
    currentDay.value = today.getDate();
    currentMonth.value = today.getMonth() + 1;
    currentYear.value = today.getFullYear();
  }

  // Initialize Today's Date
  setToday();
  document.querySelector(".today-btn").addEventListener("click", setToday);

  // Mode Switching Logic
  modeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      modeBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      Object.values(calculatorForms).forEach((form) =>
        form.classList.add("hidden")
      );
      calculatorForms[mode].classList.remove("hidden");
    });
  });

  // Calculate Age Function
  function calculateAge() {
    // Get input values
    const bDay = parseInt(birthDay.value);
    const bMonth = parseInt(birthMonth.value);
    const bYear = parseInt(birthYear.value);
    const cDay = parseInt(currentDay.value);
    const cMonth = parseInt(currentMonth.value);
    const cYear = parseInt(currentYear.value);

    // Validate inputs
    if (!validateInputs(bDay, bMonth, bYear, cDay, cMonth, cYear)) {
      return;
    }

    // Create date objects
    const birthDate = new Date(bYear, bMonth - 1, bDay);
    const currentDate = new Date(cYear, cMonth - 1, cDay);

    // Calculate age
    const ageData = calculateAgeDetails(birthDate, currentDate);

    // Display results
    displayResults(ageData);
  }

  // Validate all inputs
  function validateInputs(bDay, bMonth, bYear, cDay, cMonth, cYear) {
    if (!bDay || !bMonth || !bYear || !cDay || !cMonth || !cYear) {
      showError("Please fill in all date fields");
      return false;
    }

    const birthDate = new Date(bYear, bMonth - 1, bDay);
    const currentDate = new Date(cYear, cMonth - 1, cDay);

    if (birthDate > currentDate) {
      showError("Birth date cannot be in the future");
      return false;
    }

    return true;
  }

  // Calculate detailed age information
  function calculateAgeDetails(birthDate, currentDate) {
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    // Adjust for negative days
    if (days < 0) {
      months--;
      const lastMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      );
      days += lastMonth.getDate();
    }

    // Adjust for negative months
    if (months < 0) {
      years--;
      months += 12;
    }

    const totalDays = Math.floor(
      (currentDate - birthDate) / (1000 * 60 * 60 * 24)
    );
    const weeks = Math.floor(totalDays / 7);
    const hours = totalDays * 24;
    const minutes = hours * 60;

    return {
      years,
      months,
      days,
      totalDays,
      weeks,
      hours,
      minutes,
    };
  }
  // Display Results
  function displayResults(ageData) {
    // Show result section
    resultSection.classList.add("show");

    // Basic age display with animation
    animateNumber(yearValue, ageData.years);
    animateNumber(monthValue, ageData.months);
    animateNumber(dayValue, ageData.days);

    // Update exact years with one decimal
    const exactYears = ageData.years + ageData.months / 12 + ageData.days / 365;
    exactYearsSpan.textContent = exactYears.toFixed(1);

    // Update progress circle
    updateProgressCircle(exactYears);

    // Update detailed view
    updateDetailedView(ageData);

    // Update milestones
    updateMilestones(ageData.years);

    // Update additional features
    updateAdditionalFeatures(birthYear.value, birthMonth.value, birthDay.value);
  }

  // Animate number display
  function animateNumber(element, target) {
    const duration = 1000;
    const steps = 60;
    const step = target / steps;
    let current = 0;
    let startTimestamp = null;

    function animation(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = timestamp - startTimestamp;

      current = Math.min(Math.floor((progress / duration) * target), target);
      element.textContent = current;

      if (progress < duration) {
        requestAnimationFrame(animation);
      } else {
        element.textContent = target;
      }
    }

    requestAnimationFrame(animation);
  }

  // Update progress circle
  function updateProgressCircle(exactYears) {
    const circle = document.querySelector(".progress");
    const circumference = 339.292; // 2 * π * r (54)
    const progress = (exactYears / 100) * circumference;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference - progress;
  }

  // Update detailed view
  function updateDetailedView(ageData) {
    // Calculate all time units
    const detailedAges = {
      "Total Years": ageData.years,
      "Total Months": ageData.years * 12 + ageData.months,
      "Total Weeks": Math.floor(ageData.totalDays / 7),
      "Total Days": ageData.totalDays,
      "Total Hours": ageData.totalDays * 24,
      "Total Minutes": ageData.totalDays * 24 * 60,
    };

    // Update each unit card
    const unitCards = document.querySelectorAll(".time-units .unit-card");
    unitCards.forEach((card, index) => {
      const unit = Object.keys(detailedAges)[index];
      const value = detailedAges[unit];
      const valueElement = card.querySelector(".unit-value");
      const labelElement = card.querySelector(".unit-label");

      if (valueElement && labelElement) {
        // Animate the number
        animateDetailedNumber(valueElement, value);
        labelElement.textContent = unit;
      }
    });

    // Update next birthday countdown
    updateNextBirthdayCountdown(ageData);
  }

  // Animate detailed numbers
  function animateDetailedNumber(element, target) {
    const duration = 2000; // 2 seconds animation
    const start = parseInt(element.textContent) || 0;
    const range = target - start;
    const increment = target > start ? 1 : -1;
    const steps = Math.abs(range);
    const stepDuration = duration / steps;

    let current = start;

    function updateNumber() {
      if (current !== target) {
        current += increment;
        element.textContent = formatNumber(current);
        setTimeout(updateNumber, stepDuration);
      }
    }

    updateNumber();
  }

  // Format large numbers with commas
  function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // Update next birthday countdown
  function updateNextBirthdayCountdown() {
    const birthDate = new Date(
      birthYear.value,
      birthMonth.value - 1,
      birthDay.value
    );
    const today = new Date();
    let nextBirthday = new Date(
      today.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate()
    );

    // If birthday has passed this year, calculate for next year
    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    const timeUntil = nextBirthday - today;
    const daysUntil = Math.floor(timeUntil / (1000 * 60 * 60 * 24));
    const hoursUntil = Math.floor(
      (timeUntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesUntil = Math.floor(
      (timeUntil % (1000 * 60 * 60)) / (1000 * 60)
    );

    // Update the countdown display
    const countdownElement = document.querySelector(
      ".next-birthday .countdown"
    );
    if (countdownElement) {
      countdownElement.innerHTML = `
    <span class="days">${daysUntil}</span> days
    <span class="hours">${hoursUntil}</span> hours
    <span class="minutes">${minutesUntil}</span> minutes
`;
    }
  }

  // Life Milestones
  const lifeMilestones = {
    Teenage: 13,
    "Voting Age": 18,
    "Legal Adult": 21,
    "Quarter Century": 25,
    "Three Decades": 30,
    "Mid-Life": 40,
    "Half Century": 50,
    "Retirement Age": 65,
    "Golden Years": 70,
    Century: 100,
  };

  // Update milestones
  function updateMilestones(currentYears) {
    const timelineContainer = document.querySelector(".timeline");
    timelineContainer.innerHTML = "";

    Object.entries(lifeMilestones).forEach(([milestone, age]) => {
      const achieved = currentYears >= age;
      const yearsUntil = age - currentYears;

      const milestoneElement = createMilestoneElement(
        milestone,
        age,
        achieved,
        yearsUntil
      );
      timelineContainer.appendChild(milestoneElement);
    });
  }

  // Create milestone element
  function createMilestoneElement(milestone, age, achieved, yearsUntil) {
    const element = document.createElement("div");
    element.className = `milestone-item ${achieved ? "achieved" : ""}`;
    element.innerHTML = `
      <div class="milestone-content">
          <h4>${milestone}</h4>
          <p>${age} years</p>
          <span class="status">
              ${
                achieved
                  ? '<i class="fas fa-check"></i> Achieved'
                  : `<i class="fas fa-hourglass-half"></i> In ${Math.abs(
                      yearsUntil
                    ).toFixed(1)} years`
              }
          </span>
      </div>
  `;
    return element;
  }

  // Update additional features
  function updateAdditionalFeatures(year, month, day) {
    // Zodiac Sign
    const zodiacSign = calculateZodiacSign(month, day);
    document.querySelector(".zodiac-value").textContent = zodiacSign;

    // Chinese Zodiac
    const chineseZodiac = calculateChineseZodiac(year);
    document.querySelector(".chinese-zodiac-value").textContent = chineseZodiac;

    // Day Born
    const dayBorn = new Date(year, month - 1, day).toLocaleDateString("en-US", {
      weekday: "long",
    });
    document.querySelector(".day-born-value").textContent = dayBorn;

    // Season
    const season = calculateSeason(month);
    document.querySelector(".season-value").textContent = season;

    // Update fun facts
    updateFunFacts(year, month, day);
  }

  // Calculate Zodiac Sign
  function calculateZodiacSign(month, day) {
    const zodiacSigns = {
      Capricorn: [12, 22, 1, 19],
      Aquarius: [1, 20, 2, 18],
      Pisces: [2, 19, 3, 20],
      Aries: [3, 21, 4, 19],
      Taurus: [4, 20, 5, 20],
      Gemini: [5, 21, 6, 20],
      Cancer: [6, 21, 7, 22],
      Leo: [7, 23, 8, 22],
      Virgo: [8, 23, 9, 22],
      Libra: [9, 23, 10, 22],
      Scorpio: [10, 23, 11, 21],
      Sagittarius: [11, 22, 12, 21],
    };

    for (let [sign, [startMonth, startDay, endMonth, endDay]] of Object.entries(
      zodiacSigns
    )) {
      if (
        (month === startMonth && day >= startDay) ||
        (month === endMonth && day <= endDay)
      ) {
        return sign;
      }
    }
    return "Capricorn"; // Default
  }

  // Calculate Chinese Zodiac
  function calculateChineseZodiac(year) {
    const animals = [
      "Rat",
      "Ox",
      "Tiger",
      "Rabbit",
      "Dragon",
      "Snake",
      "Horse",
      "Goat",
      "Monkey",
      "Rooster",
      "Dog",
      "Pig",
    ];
    return animals[(year - 1900) % 12];
  }

  // Calculate Season
  function calculateSeason(month) {
    const seasons = {
      Winter: [12, 1, 2],
      Spring: [3, 4, 5],
      Summer: [6, 7, 8],
      Fall: [9, 10, 11],
    };

    for (let [season, months] of Object.entries(seasons)) {
      if (months.includes(parseInt(month))) {
        return season;
      }
    }
    return "Winter"; // Default
  }

  // Update fun facts
  function updateFunFacts(year, month, day) {
    const factsContainer = document.querySelector(".facts-container");
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    const facts = [
      `You've been alive for approximately ${Math.floor(
        (today - birthDate) / (1000 * 60 * 60)
      )} hours`,
      `You've experienced about ${Math.floor(
        (today - birthDate) / (1000 * 60 * 60 * 24 * 365.25)
      )} leap days`,
      `You were born on ${birthDate.toLocaleDateString("en-US", {
        weekday: "long",
      })}`,
      `You've completed around ${Math.floor(
        (today - birthDate) / (1000 * 60 * 60 * 24 * 7)
      )} weeks of life`,
      `Your next birthday will be in ${calculateDaysUntilNextBirthday(
        birthDate
      )} days`,
    ];

    factsContainer.innerHTML = facts
      .map(
        (fact) => `
      <div class="fact-card">
          <i class="fas fa-star"></i>
          <p>${fact}</p>
      </div>
  `
      )
      .join("");
  }

  // Calculate days until next birthday
  function calculateDaysUntilNextBirthday(birthDate) {
    const today = new Date();
    const nextBirthday = new Date(
      today.getFullYear(),
      birthDate.getMonth(),
      birthDate.getDate()
    );

    if (nextBirthday < today) {
      nextBirthday.setFullYear(today.getFullYear() + 1);
    }

    return Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));
  }

  // Error display
  function showError(message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;

    const calculator = document.querySelector(".calculator-form");
    calculator.insertBefore(errorDiv, calculator.firstChild);

    setTimeout(() => {
      errorDiv.remove();
    }, 3000);
  }

  // Add calculate button event listener
  calculateBtn.addEventListener("click", calculateAge);

  // Share functionality
  document.querySelectorAll(".share-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.classList[1];
      const text = `Check out my age calculation results!`;

      switch (type) {
        case "facebook":
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
          );
          break;
        case "twitter":
          window.open(
            `https://twitter.com/intent/tweet?text=${encodeURIComponent(
              text
            )}&url=${window.location.href}`
          );
          break;
        case "print":
          window.print();
          break;
      }
    });
  });

  // Add Custom Milestone
  // Initialize Custom Milestones
  function initializeCustomMilestones() {
    const addButton = document.querySelector(".add-milestone");
    const descriptionInput = document.querySelector(
      '.milestone-input input[type="text"]'
    );
    const ageInput = document.querySelector(
      '.milestone-input input[type="number"]'
    );

    addButton.addEventListener("click", () => {
      addNewMilestone();
    });

    // Also allow Enter key to add milestone
    [descriptionInput, ageInput].forEach((input) => {
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          addNewMilestone();
        }
      });
    });
  }

  // Add New Milestone
  function addNewMilestone() {
    const descriptionInput = document.querySelector(
      '.milestone-input input[type="text"]'
    );
    const ageInput = document.querySelector(
      '.milestone-input input[type="number"]'
    );

    const description = descriptionInput.value.trim();
    const age = parseInt(ageInput.value);

    // Validation
    if (!description) {
      showError("Please enter a milestone description");
      return;
    }

    if (!age || isNaN(age) || age < 0 || age > 150) {
      showError("Please enter a valid age between 0 and 150");
      return;
    }

    // Add to milestones object
    lifeMilestones[description] = age;

    // Clear inputs
    descriptionInput.value = "";
    ageInput.value = "";

    // Recalculate and update display
    calculateAge();

    // Show success message
    showSuccess("Milestone added successfully!");
  }

  // Show Error Message
  function showError(message) {
    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message";
    errorDiv.textContent = message;

    // Remove any existing error messages
    const existingError = document.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }

    const customMilestone = document.querySelector(".custom-milestone");
    customMilestone.insertBefore(errorDiv, customMilestone.firstChild);

    // Remove error message after 3 seconds
    setTimeout(() => {
      errorDiv.remove();
    }, 3000);
  }

  // Show Success Message
  function showSuccess(message) {
    const successDiv = document.createElement("div");
    successDiv.className = "success-message";
    successDiv.textContent = message;

    const customMilestone = document.querySelector(".custom-milestone");
    customMilestone.insertBefore(successDiv, customMilestone.firstChild);

    setTimeout(() => {
      successDiv.remove();
    }, 3000);
  }

  // Add these styles for error and success messages
  const styles = `
.error-message, .success-message {
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  text-align: center;
  animation: fadeIn 0.3s ease;
}

.error-message {
  background-color: rgba(220, 53, 69, 0.1);
  color: #dc3545;
  border: 1px solid #dc3545;
}

.success-message {
  background-color: rgba(40, 167, 69, 0.1);
  color: #28a745;
  border: 1px solid #28a745;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
`;

  // Add styles to document
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  // Make sure to call initializeCustomMilestones when the page loads
  document.addEventListener("DOMContentLoaded", () => {
    initializeCustomMilestones();
  });

  function downloadResult() {
    // Include the jsPDF library
    if (typeof jsPDF === "undefined") {
      const script = document.createElement("script");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
      script.onload = generatePDF;
      document.head.appendChild(script);
    } else {
      generatePDF();
    }

    function generatePDF() {
      // Create new PDF document
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // Set document properties
      doc.setProperties({
        title: "Age Calculation Results",
        subject: "Age Calculator Results",
        author: "Age Calculator",
        keywords: "age, calculator, results",
        creator: "Age Calculator Tool",
      });

      // Get current date
      const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      // Get calculation results
      const years = document.querySelector(".years .card-value").textContent;
      const months = document.querySelector(".months .card-value").textContent;
      const days = document.querySelector(".days .card-value").textContent;

      // Get birth date
      const birthDay = document.getElementById("birthDay").value;
      const birthMonth = document.getElementById("birthMonth").value;
      const birthYear = document.getElementById("birthYear").value;
      const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
      const formattedBirthDate = birthDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      // Get additional information
      const zodiacSign = document.querySelector(".zodiac-value").textContent;
      const chineseZodiac = document.querySelector(
        ".chinese-zodiac-value"
      ).textContent;
      const dayBorn = document.querySelector(".day-born-value").textContent;
      const season = document.querySelector(".season-value").textContent;

      // PDF Styling
      doc.setFillColor(76, 175, 80); // Green theme
      doc.rect(0, 0, 210, 30, "F");

      // Header
      doc.setFont("helvetica", "bold");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(24);
      doc.text("Age Calculator Results", 105, 20, { align: "center" });

      // Reset text color for body
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(12);

      // Add generation date
      doc.setFont("helvetica", "italic");
      doc.text(`Generated on: ${currentDate}`, 20, 40);

      // Main Results Section
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text("Age Calculation", 20, 55);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.text(`Birth Date: ${formattedBirthDate}`, 20, 65);
      doc.text(
        `Current Age: ${years} years, ${months} months, ${days} days`,
        20,
        75
      );

      // Detailed Statistics
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text("Detailed Statistics", 20, 95);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      const totalDays =
        parseInt(years) * 365 + parseInt(months) * 30 + parseInt(days);
      const totalHours = totalDays * 24;
      const totalWeeks = Math.floor(totalDays / 7);

      doc.text(
        [
          `Total Days Lived: ${totalDays.toLocaleString()} days`,
          `Total Weeks Lived: ${totalWeeks.toLocaleString()} weeks`,
          `Total Hours Lived: ${totalHours.toLocaleString()} hours`,
        ],
        20,
        105
      );

      // Birth Information
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text("Birth Information", 20, 135);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.text(
        [
          `Day Born: ${dayBorn}`,
          `Birth Season: ${season}`,
          `Zodiac Sign: ${zodiacSign}`,
          `Chinese Zodiac: ${chineseZodiac}`,
        ],
        20,
        145
      );

      // Milestones Section
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text("Life Milestones", 20, 175);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      let yPos = 185;

      Object.entries(lifeMilestones).forEach(([milestone, age]) => {
        const achieved = parseInt(years) >= age;
        const status = achieved
          ? "✓ Achieved"
          : `${age - parseInt(years)} years remaining`;
        doc.text(`${milestone} (${age} years): ${status}`, 20, yPos);
        yPos += 10;
      });

      // Add footer
      doc.setFillColor(76, 175, 80);
      doc.rect(0, 277, 210, 20, "F");
      doc.setFont("helvetica", "italic");
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(10);
      doc.text("Generated by Age Calculator Tool", 105, 287, {
        align: "center",
      });

      // Add page numbers
      doc.setPage(1);
      doc.text("Page 1 of 1", 105, 282, { align: "center" });

      try {
        // Generate filename
        const filename = `Age_Calculation_${new Date()
          .toISOString()
          .slice(0, 10)}.pdf`;

        // Save the PDF
        doc.save(filename);
      } catch (error) {
        console.error("Error generating PDF:", error);
        alert("There was an error generating your PDF. Please try again.");
      }
    }
  }
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
