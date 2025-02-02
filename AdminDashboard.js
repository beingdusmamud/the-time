let events = [];
let currentView = "table";

function showToast(message, type = "success") {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toastMessage");

  toast.className = `toast toast-${type}`;
  toastMessage.textContent = message;

  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

function addEvent() {
  const date = document.getElementById("eventDate").value;
  const title = document.getElementById("eventTitle").value;
  const status = document.getElementById("eventStatus").value;

  if (!date || !title) {
    showToast("Please enter both date and title", "error");
    return;
  }

  const existingIndex = events.findIndex((e) => e.date === date);
  if (existingIndex >= 0) {
    events[existingIndex] = { date, status, remarks: title };
    showToast("Event updated successfully");
  } else {
    events.push({ date, status, remarks: title });
    showToast("Event added successfully");
  }

  document.getElementById("eventDate").value = "";
  document.getElementById("eventTitle").value = "";
  generatePreview();
}

function clearEvents() {
  events = [];
  generatePreview();
  showToast("All events cleared");
}

function generateDateArray(startDate, endDate) {
  const dates = [];
  let currentDate = new Date(startDate);
  let workingDayCount = 0;

  while (currentDate <= new Date(endDate)) {
    const dateStr = currentDate.toISOString().split("T")[0];
    const dayOfWeek = currentDate.getDay();
    const dateOfMonth = currentDate.getDate();
    const weekNumber = Math.ceil(dateOfMonth / 7);

    const isWeekend =
      dayOfWeek === 0 ||
      (dayOfWeek === 6 && (weekNumber === 2 || weekNumber === 4));
    const customEvent = events.find((e) => e.date === dateStr);
    const isHoliday =
      isWeekend || (customEvent && customEvent.status === "Holiday");

    if (!isHoliday) {
      workingDayCount = (workingDayCount % 6) + 1;
    }

    let remarks = customEvent ? customEvent.remarks : "";
    if (!remarks) {
      if (dayOfWeek === 0) remarks = "Sunday";
      else if (dayOfWeek === 6) {
        if (weekNumber === 2) remarks = "2nd Saturday";
        if (weekNumber === 4) remarks = "4th Saturday";
      }
    }

    dates.push({
      date: dateStr,
      day: currentDate.toLocaleDateString("en-US", { weekday: "long" }),
      workingDay: isHoliday ? "-" : workingDayCount.toString(),
      status: isHoliday ? "Holiday" : "Working",
      remarks: remarks,
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }
  return dates;
}

function generatePreview() {
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  if (!startDate || !endDate) {
    showToast("Please select both start and end dates", "error");
    return;
  }

  if (new Date(startDate) > new Date(endDate)) {
    showToast("Start date cannot be after end date", "error");
    return;
  }

  const dates = generateDateArray(startDate, endDate);
  displayPreview(dates);
}

function displayPreview(dates) {
  // Table View
  let tableHTML = `
        <table class="preview-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Day</th>
                    <th>Working Day</th>
                    <th>Status</th>
                    <th>Remarks</th>
                </tr>
            </thead>
            <tbody>
    `;

  dates.forEach((date) => {
    const row =
      new Date(date.date).getDay() === 0 || date.status === "Holiday"
        ? "holiday-row"
        : "";
    const statusClass =
      date.status === "Holiday" ? "status-holiday" : "status-working";

    tableHTML += `
            <tr class="${row}">
                <td>${formatDate(date.date)}</td>
                <td>${date.day}</td>
                <td>${date.workingDay}</td>
                <td><span class="status-badge ${statusClass}">${
      date.status
    }</span></td>
                <td>${date.remarks}</td>
            </tr>
        `;
  });

  tableHTML += "</tbody></table>";
  document.getElementById("tableView").innerHTML = tableHTML;

  // Code View
  const codeStr = JSON.stringify(dates, null, 2)
    .replace(/[[${}]/g, "")
    .replace(/"([^"]+)":/g, "$1:")
    .replace(/"/g, '"')
    .trim();

  document.getElementById("codeView").textContent = codeStr;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/(\d+)\/(\d+)\/(\d+)/, "$3-$1-$2");
}

function showTable() {
  currentView = "table";
  document.getElementById("tableView").style.display = "block";
  document.getElementById("codeView").style.display = "none";
  updateViewToggleButtons();
}

function showCode() {
  currentView = "code";
  document.getElementById("tableView").style.display = "none";
  document.getElementById("codeView").style.display = "block";
  updateViewToggleButtons();
}

function updateViewToggleButtons() {
  const buttons = document.querySelectorAll(".view-toggle");
  buttons.forEach((button) => {
    button.classList.remove("active");
    if (
      (currentView === "table" && button.textContent === "Table View") ||
      (currentView === "code" && button.textContent === "Code View")
    ) {
      button.classList.add("active");
    }
  });
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const data = JSON.parse(e.target.result);
        if (Array.isArray(data)) {
          events = data;
          generatePreview();
          showToast("File imported successfully");
        } else {
          showToast("Invalid file format", "error");
        }
      } catch (error) {
        showToast("Error reading file", "error");
      }
    };
    reader.readAsText(file);
  }
}

// Initialize scroll positions for table and code views
document.getElementById("tableView").addEventListener("scroll", function (e) {
  localStorage.setItem("tableScrollTop", e.target.scrollTop);
  localStorage.setItem("tableScrollLeft", e.target.scrollLeft);
});

document.getElementById("codeView").addEventListener("scroll", function (e) {
  localStorage.setItem("codeScrollTop", e.target.scrollTop);
});

// Restore scroll positions
window.addEventListener("load", function () {
  const tableView = document.getElementById("tableView");
  const codeView = document.getElementById("codeView");

  tableView.scrollTop = localStorage.getItem("tableScrollTop") || 0;
  tableView.scrollLeft = localStorage.getItem("tableScrollLeft") || 0;
  codeView.scrollTop = localStorage.getItem("codeScrollTop") || 0;

  // Initialize view
  showTable();
});

// Add keyboard shortcuts
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey || e.metaKey) {
    switch (e.key.toLowerCase()) {
      case "p":
        e.preventDefault();
        generatePreview();
        break;
      case "v":
        e.preventDefault();
        currentView === "table" ? showCode() : showTable();
        break;
    }
  }
});

// Export functionality
function exportData() {
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  if (!startDate || !endDate) {
    showToast("Please generate preview before exporting", "error");
    return;
  }

  const dates = generateDateArray(startDate, endDate);
  const dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(dates, null, 2));
  const downloadAnchorNode = document.createElement("a");
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "calendar_events.json");
  document.body.appendChild(downloadAnchorNode);
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
  showToast("Data exported successfully");
}

// Add this button to the HTML button group if you want export functionality
// <button onclick="exportData()" class="btn btn-secondary">Export Data</button>

function exportToExcel() {
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  if (!startDate || !endDate) {
    showToast("Please generate preview first", "error");
    return;
  }

  const dates = generateDateArray(startDate, endDate);

  // Transform data for Excel
  const excelData = dates.map((item) => ({
    Date: item.date,
    Day: item.day,
    "Working Day": item.workingDay,
    Status: item.status,
    Remarks: item.remarks,
  }));

  // Create worksheet
  const worksheet = XLSX.utils.json_to_sheet(excelData);

  // Set column widths
  worksheet["!cols"] = [
    { wch: 12 }, // Date
    { wch: 15 }, // Day
    { wch: 12 }, // Working Day
    { wch: 10 }, // Status
    { wch: 30 }, // Remarks
  ];

  // Create workbook and append worksheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Calendar");

  // Generate Excel file
  const fileName = `calendar_${startDate}_to_${endDate}.xlsx`;
  XLSX.writeFile(workbook, fileName);
}

function downloadGeneratedCode() {
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  if (!startDate || !endDate) {
    showToast("Please generate preview first", "error");
    return;
  }

  const dates = generateDateArray(startDate, endDate);
  const formattedCode = dates
    .map(
      (date) => `  {
    date: "${date.date}",
    day: "${date.day}",
    workingDay: "${date.workingDay}",
    status: "${date.status}",
    remarks: "${date.remarks}",
  }`
    )
    .join(",\n\n");

  // Create file content
  const content = `[\n${formattedCode}\n]`;

  // Create download link
  const blob = new Blob([content], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "calendar_data.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function copyGeneratedCode() {
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  if (!startDate || !endDate) {
    showToast("Please generate preview first", "error");
    return;
  }

  const dates = generateDateArray(startDate, endDate);
  const formattedCode = dates
    .map(
      (date) => `  {
    date: "${date.date}",
    day: "${date.day}",
    workingDay: "${date.workingDay}",
    status: "${date.status}",
    remarks: "${date.remarks}",
  }`
    )
    .join(",\n\n");

  const textArea = document.createElement("textarea");
  textArea.value = formattedCode;
  document.body.appendChild(textArea);
  textArea.select();

  try {
    document.execCommand("copy");
    showToast("Code copied to clipboard!");
  } catch (err) {
    showToast("Failed to copy code", "error");
  }

  document.body.removeChild(textArea);
}

// Initialize schedule data structure
let scheduleData = {
  FOURTH: {},
  SIXTH: {},
};

function formatTime(timeStr) {
  const time = new Date(`2000-01-01T${timeStr}`);
  return time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

function addClassSchedule() {
  const semester = document.getElementById("semesterSelect").value;
  const day = document.getElementById("workingDay").value;
  const subject = document.getElementById("subject").value;
  const timeFrom = document.getElementById("timeFrom").value;
  const timeTo = document.getElementById("timeTo").value;
  const instructor = document.getElementById("instructor").value || "Staff";

  if (!semester || !day || !subject || !timeFrom || !timeTo) {
    showToast("Please fill all required fields", "error");
    return;
  }

  if (!scheduleData[semester][day]) {
    scheduleData[semester][day] = [];
  }

  const timeSlot = {
    time: `${formatTime(timeFrom)} — ${formatTime(timeTo)}`,
    subject: subject,
    instructor: instructor,
    room: `${semester === "FOURTH" ? "4th" : "6th"} Sem`,
  };

  scheduleData[semester][day].push(timeSlot);
  generateSchedulePreview();
  showToast("Schedule added successfully");
}

function generateSchedulePreview() {
  const semester = document.getElementById("semesterSelect").value;
  if (!semester) {
    showToast("Please select a semester", "error");
    return;
  }

  updateScheduleTableView(semester);
  updateScheduleCodeView(semester);
}

function updateScheduleTableView(semester) {
  let tableHTML = `
      <table class="preview-table">
          <thead>
              <tr>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Subject</th>
                  <th>Instructor</th>
                  <th>Room</th>
              </tr>
          </thead>
          <tbody>
  `;

  Object.entries(scheduleData[semester]).forEach(([day, slots]) => {
    slots.forEach((slot) => {
      tableHTML += `
              <tr>
                  <td>Day ${day}</td>
                  <td>${slot.time}</td>
                  <td>${slot.subject}</td>
                  <td>${slot.instructor}</td>
                  <td>${slot.room}</td>
              </tr>
          `;
    });
  });

  tableHTML += "</tbody></table>";
  document.getElementById("scheduleTableView").innerHTML = tableHTML;
}

function updateScheduleCodeView(semester) {
  const codeStr = `// Class Schedule Data\n\nconst ${semester}_SEM_CLASSES = ${JSON.stringify(
    scheduleData[semester],
    null,
    2
  )}`;
  document.getElementById("scheduleCodeView").textContent = codeStr;
}

function exportScheduleToExcel() {
  const semester = document.getElementById("semesterSelect").value;
  if (!semester) {
    showToast("Please select a semester", "error");
    return;
  }

  const ws = XLSX.utils.json_to_sheet(flattenScheduleData(semester));
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, `${semester}_Schedule`);
  XLSX.writeFile(wb, `${semester}_schedule.xlsx`);
}

function flattenScheduleData(semester) {
  const flatData = [];
  Object.entries(scheduleData[semester]).forEach(([day, slots]) => {
    slots.forEach((slot) => {
      flatData.push({
        Day: `Day ${day}`,
        Time: slot.time,
        Subject: slot.subject,
        Instructor: slot.instructor,
        Room: slot.room,
      });
    });
  });
  return flatData;
}

function copyScheduleCode() {
  const semester = document.getElementById("semesterSelect").value;
  if (!semester) {
    showToast("Please select a semester", "error");
    return;
  }

  const codeStr = `// Class Schedule Data\n\nconst ${semester}_SEM_CLASSES = ${JSON.stringify(
    scheduleData[semester],
    null,
    2
  )}`;
  navigator.clipboard
    .writeText(codeStr)
    .then(() => showToast("Code copied to clipboard"))
    .catch(() => showToast("Failed to copy code", "error"));
}

function clearSchedule() {
  const semester = document.getElementById("semesterSelect").value;
  if (!semester) {
    showToast("Please select a semester", "error");
    return;
  }

  scheduleData[semester] = {};
  generateSchedulePreview();
  showToast("Schedule cleared");
}

function showScheduleTable() {
  document.getElementById("scheduleTableView").style.display = "block";
  document.getElementById("scheduleCodeView").style.display = "none";
  updateViewToggleButtons();
}

function showScheduleCode() {
  document.getElementById("scheduleTableView").style.display = "none";
  document.getElementById("scheduleCodeView").style.display = "block";
  updateViewToggleButtons();
}

// Authentication Check
function checkAuth() {
  const isAuthenticated = sessionStorage.getItem("authenticated");
  if (!isAuthenticated) {
    document.getElementById("errorPage").style.display = "flex";
    document.body.style.overflow = "hidden";
    return false;
  }
  document.getElementById("errorPage").style.display = "none";
  document.body.style.overflow = "auto";
  return true;
}

// Logout Handler
function handleLogout() {
  sessionStorage.removeItem("authenticated");
  window.location.href = "/"; // Redirect to home page
}

function updateGreeting() {
  const hour = new Date().getHours();
  const greetingText = document.getElementById("greetingTime");
  const greetingIcon = document.getElementById("greetingIcon");

  if (hour >= 5 && hour < 12) {
    greetingText.textContent = "Good Morning";
    greetingIcon.className = "fa-solid fa-star"; // Using star icon
  } else if (hour >= 12 && hour < 17) {
    greetingText.textContent = "Good Afternoon";
    greetingIcon.className = "fa-solid fa-star"; // Using star icon
  } else {
    greetingText.textContent = "Good Evening";
    greetingIcon.className = "fa-solid fa-star"; // Using star icon
  }
}

// Make sure to call the function
updateGreeting();

// Update time and date
function updateDateTime() {
  const timeElement = document.getElementById("currentTime");
  const dateElement = document.getElementById("currentDate");
  const now = new Date();

  timeElement.textContent = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  dateElement.textContent = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Initialize and set up intervals
document.addEventListener("DOMContentLoaded", () => {
  updateGreeting();
  updateDateTime();

  // Replace placeholder with actual user profile image
  // document.getElementById('userProfile').src = 'path/to/user-profile.jpg';

  setInterval(updateDateTime, 1000);
  setInterval(updateGreeting, 60000);
});

function closeError() {
  const errorAlert = document.getElementById("errorAlert");
  errorAlert.style.animation = "slideUp 0.5s ease-out forwards";
  setTimeout(() => {
    errorAlert.style.display = "none";
  }, 500);
}

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

window.onload = function () {
  // Change URL without reloading the page
  let newURL = "/control-pannel";
  window.history.pushState({}, "", newURL);
};
