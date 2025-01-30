// Class Schedule Data
const CLASS_SCHEDULES = {
  1: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "EMMI-1 LAB (Gr1)(CM,LK) <br> LIB (Gr 2)",
      instructor: "Staff",
      room: "Lab",
      type: "lab",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "EM-I",
      instructor: "Panchita Ma'am",
      room: "Room 202",
      type: "theory",
    },
    {
      time: "1:45 PM — 3:45 PM",
      subject: "ENC",
      instructor: "Amit Sir",
      room: "Room 202",
      type: "theory",
    },
    {
      time: "3:45 PM — 4:45 PM",
      subject: "LIB",
      instructor: "Staff",
      room: "-",
      type: "other",
    },
  ],
  2: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "EEDD",
      instructor: "Chinmayee Ma'am",
      room: "Room 202",
      type: "theory",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "EEM",
      instructor: "Amit Sir",
      room: "Room 202",
      type: "theory",
    },
    {
      time: "1:45 PM — 4:45 PM",
      subject: "ECN LAB(Gr 2) (PC,LK) <br> EM-I LAB (Gr 1) (AKD,SI)",
      instructor: "Staff",
      room: "-",
      type: "lab",
    },
  ],
  3: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "EMMI-1 LAB (Gr 2) (AKD,LK) <br> LIB (Gr 1)",
      instructor: "Staff",
      room: "Lab",
      type: "lab",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "DE",
      instructor: "Pritismita Ma'am",
      room: "Room 202",
      type: "theory",
    },
    {
      time: "1:45 PM — 3:45 PM",
      subject: "EM-I",
      instructor: "Panchita Ma'am",
      room: "Room 202",
      type: "theory",
    },
  ],
  4: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "EEDD",
      instructor: "Chinmayee Ma'am",
      room: "Room 202",
      type: "theory",
    },
    {
      time: "12:45 PM — 2:45 PM",
      subject: "EMMI-I",
      instructor: "Chinmayee Ma'am",
      room: "Room 202",
      type: "theory",
    },
    {
      time: "2:45 PM — 3:45 PM",
      subject: "PP-II",
      instructor: "Staff",
      room: "Room 202",
      type: "other",
    },
    {
      time: "3:45 PM — 4:45 PM",
      subject: "Remedial Class",
      instructor: "Staff",
      room: "Room 202",
      type: "other",
    },
  ],
  5: [
    {
      time: "9:00 AM — 10:00 AM",
      subject: "ENC",
      instructor: "Amit Sir",
      room: "Room 202",
      type: "theory",
    },
    {
      time: "10:00 AM — 11:00 AM",
      subject: "DE",
      instructor: "Pritismista Ma'am",
      room: "Room 202",
      type: "theory",
    },
    {
      time: "11:00 AM — 12:00 Noon",
      subject: "EEM",
      instructor: "Amit Sir",
      room: "Room 202",
      type: "theory",
    },
    {
      time: "12:45 PM — 3:45 PM",
      subject: "ECN LAB (Gr1) (PC,LK) <br> EM-I LAB (Gr2) (AKD,SI)",
      instructor: "Staff",
      room: "Lab",
      type: "lab",
    },
    {
      time: "3:45 PM — 4:45 PM",
      subject: "Remedial Class",
      instructor: "Staff",
      room: "Room 202",
      type: "other",
    },
  ],
  6: [
    {
      time: "9:00 AM — 10:00 AM",
      subject: "EM-I",
      instructor: "Panchita Ma'am",
      room: "Room 201",
      type: "theory",
    },
    {
      time: "10:00 AM — 12:00 Noon",
      subject: "EMMI-I",
      instructor: "Chinmayee Ma'am",
      room: "Room 202",
      type: "theory",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "EEM",
      instructor: "Amit Sir",
      room: "Room 202",
      type: "theory",
    },
    {
      time: "1:45 PM — 2:45 PM",
      subject: "DE",
      instructor: "Pritismita Ma'am",
      room: "Room 202",
      type: "theory",
    },
    {
      time: "2:45 PM — 4:45 PM",
      subject: "PP-II",
      instructor: "Staff",
      room: "-",
      type: "other",
    },
  ],
};

// Calendar Data
const CALENDAR_DATA = [
  {
    date: "2025-01-20",
    day: "Monday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-01-21",
    day: "Tuesday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-01-22",
    day: "Wednesday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-01-23",
    day: "Thursday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Netaji Birthday",
  },
  {
    date: "2025-01-24",
    day: "Friday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-01-25",
    day: "Saturday",
    workingDay: "-",
    status: "Holiday",
    remarks: "4th Saturday",
  },
  {
    date: "2025-01-26",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Republic Day",
  },
  {
    date: "2025-01-27",
    day: "Monday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-01-28",
    day: "Tuesday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Gwthar Bathou San",
  },
  {
    date: "2025-01-29",
    day: "Wednesday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-01-30",
    day: "Thursday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-01-31",
    day: "Friday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Me-Dam-Me-Phi",
  },
  {
    date: "2025-02-01",
    day: "Saturday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-02",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-02-03",
    day: "Monday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-04",
    day: "Tuesday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-05",
    day: "Wednesday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-06",
    day: "Thursday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-07",
    day: "Friday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-08",
    day: "Saturday",
    workingDay: "-",
    status: "Holiday",
    remarks: "2nd Saturday",
  },
  {
    date: "2025-02-09",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-02-10",
    day: "Monday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-11",
    day: "Tuesday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-12",
    day: "Wednesday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Bir Chilaray Divas",
  },
  {
    date: "2025-02-13",
    day: "Thursday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-14",
    day: "Friday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-15",
    day: "Saturday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-16",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-02-17",
    day: "Monday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-18",
    day: "Tuesday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-19",
    day: "Wednesday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-20",
    day: "Thursday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-21",
    day: "Friday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-22",
    day: "Saturday",
    workingDay: "-",
    status: "Holiday",
    remarks: "4th Saturday",
  },
  {
    date: "2025-02-23",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-02-24",
    day: "Monday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-25",
    day: "Tuesday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-26",
    day: "Wednesday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-27",
    day: "Thursday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-02-28",
    day: "Friday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-01",
    day: "Saturday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-02",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-03-03",
    day: "Monday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-04",
    day: "Tuesday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-05",
    day: "Wednesday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-06",
    day: "Thursday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-07",
    day: "Friday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-08",
    day: "Saturday",
    workingDay: "-",
    status: "Holiday",
    remarks: "2nd Saturday",
  },
  {
    date: "2025-03-09",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-03-10",
    day: "Monday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-11",
    day: "Tuesday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-12",
    day: "Wednesday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-13",
    day: "Thursday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-14",
    day: "Friday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Dol Jatra",
  },
  {
    date: "2025-03-15",
    day: "Saturday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-16",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-03-17",
    day: "Monday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-18",
    day: "Tuesday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-19",
    day: "Wednesday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-20",
    day: "Thursday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-21",
    day: "Friday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-22",
    day: "Saturday",
    workingDay: "-",
    status: "Holiday",
    remarks: "4th Saturday",
  },
  {
    date: "2025-03-23",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-03-24",
    day: "Monday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-25",
    day: "Tuesday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-26",
    day: "Wednesday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-27",
    day: "Thursday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-28",
    day: "Friday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-29",
    day: "Saturday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-03-30",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-03-31",
    day: "Monday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Id-Ul-Fitre",
  },
  {
    date: "2025-04-01",
    day: "Tuesday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-02",
    day: "Wednesday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-03",
    day: "Thursday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-04",
    day: "Friday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-05",
    day: "Saturday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-06",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-04-07",
    day: "Monday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-08",
    day: "Tuesday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-09",
    day: "Wednesday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-10",
    day: "Thursday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-11",
    day: "Friday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-12",
    day: "Saturday",
    workingDay: "-",
    status: "Holiday",
    remarks: "2nd Saturday",
  },
  {
    date: "2025-04-13",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-04-14",
    day: "Monday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Bohag Bihu",
  },
  {
    date: "2025-04-15",
    day: "Tuesday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Bohag Bihu",
  },
  {
    date: "2025-04-16",
    day: "Wednesday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Bohag Bihu",
  },
  {
    date: "2025-04-17",
    day: "Thursday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-18",
    day: "Friday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Good Friday",
  },
  {
    date: "2025-04-19",
    day: "Saturday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-20",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-04-21",
    day: "Monday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sati Sadhani Divas",
  },
  {
    date: "2025-04-22",
    day: "Tuesday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-23",
    day: "Wednesday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-24",
    day: "Thursday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-25",
    day: "Friday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-26",
    day: "Saturday",
    workingDay: "-",
    status: "Holiday",
    remarks: "4th Saturday",
  },
  {
    date: "2025-04-27",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-04-28",
    day: "Monday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Tithi of Damodar Dev",
  },
  {
    date: "2025-04-29",
    day: "Tuesday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-04-30",
    day: "Wednesday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-05-01",
    day: "Thursday",
    workingDay: "-",
    status: "Holiday",
    remarks: "May Day",
  },
  {
    date: "2025-05-02",
    day: "Friday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-05-03",
    day: "Saturday",
    workingDay: "4",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-05-04",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
  {
    date: "2025-05-05",
    day: "Monday",
    workingDay: "5",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-05-06",
    day: "Tuesday",
    workingDay: "6",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-05-07",
    day: "Wednesday",
    workingDay: "1",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-05-08",
    day: "Thursday",
    workingDay: "2",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-05-09",
    day: "Friday",
    workingDay: "3",
    status: "Working",
    remarks: "",
  },
  {
    date: "2025-05-10",
    day: "Saturday",
    workingDay: "-",
    status: "Holiday",
    remarks: "2nd Saturday",
  },
  {
    date: "2025-05-11",
    day: "Sunday",
    workingDay: "-",
    status: "Holiday",
    remarks: "Sunday",
  },
];

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

// Calendar Manager
class CalendarManager {
  constructor() {
    this.calendarBody = document.getElementById("calendarBody");
    this.calendarFilter = document.getElementById("calendarFilter");
    this.currentFilter = "all";
    this.init();
  }

  init() {
    this.renderCalendar();
    this.setupFilters();
  }

  renderCalendar(filter = "all") {
    let filteredData = CALENDAR_DATA;
    if (filter !== "all") {
      filteredData = CALENDAR_DATA.filter((entry) =>
        filter === "working"
          ? entry.status === "Working"
          : entry.status === "Holiday"
      );
    }

    this.calendarBody.innerHTML = filteredData
      .map(
        (entry) => `
      <tr class="${entry.status.toLowerCase()}">
          <td>${new Date(entry.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}</td>
          <td>${entry.day}</td>
          <td>${entry.workingDay}</td>
          <td class="${
            entry.status === "Holiday" ? "holiday" : "working-day"
          }">${entry.status}</td>
          <td>${entry.remarks}</td>
      </tr>
  `
      )
      .join("");
  }

  setupFilters() {
    this.calendarFilter.addEventListener("click", (e) => {
      if (e.target.classList.contains("filter-btn")) {
        const filter = e.target.dataset.filter;
        this.currentFilter = filter;

        // Update active state
        this.calendarFilter.querySelectorAll(".filter-btn").forEach((btn) => {
          btn.classList.remove("active");
        });
        e.target.classList.add("active");

        // Apply filter
        this.renderCalendar(filter);
      }
    });
  }
}

// Routine Manager
class RoutineManager {
  constructor() {
    this.routineBody = document.getElementById("routineBody");
    this.routineFilter = document.getElementById("routineFilter");
    this.currentFilter = "all";
    this.init();
  }

  init() {
    this.renderRoutine();
    this.setupFilters();
  }

  renderRoutine(filter = "all") {
    let html = "";

    // Iterate through each working day
    Object.entries(CLASS_SCHEDULES).forEach(([day, schedules]) => {
      // Filter schedules based on selected filter
      let filteredSchedules = schedules;
      if (filter !== "all") {
        filteredSchedules = schedules.filter(
          (schedule) => schedule.type === filter
        );
      }

      // If there are schedules after filtering, render them
      if (filteredSchedules.length > 0) {
        filteredSchedules.forEach((schedule, index) => {
          html += `
                  <tr>
                      <td>${index === 0 ? `Working Day ${day}` : ""}</td>
                      <td>${schedule.time}</td>
                      <td>${schedule.subject}</td>
                      <td>${schedule.instructor}</td>
                  </tr>
              `;
        });
      }
    });

    this.routineBody.innerHTML = html;
  }

  setupFilters() {
    this.routineFilter.addEventListener("click", (e) => {
      if (e.target.classList.contains("filter-btn")) {
        const filter = e.target.dataset.filter;
        this.currentFilter = filter;

        // Update active state
        this.routineFilter.querySelectorAll(".filter-btn").forEach((btn) => {
          btn.classList.remove("active");
        });
        e.target.classList.add("active");

        // Apply filter
        this.renderRoutine(filter);
      }
    });
  }
}

// Summary Manager
class SummaryManager {
  constructor() {
    this.workingDaysCount = document.getElementById("workingDaysCount");
    this.holidaysCount = document.getElementById("holidaysCount");
    this.subjectHours = document.getElementById("subjectHours");
    this.init();
  }

  init() {
    this.updateWorkingDaysAndHolidays();
    this.calculateSubjectHours();
  }

  updateWorkingDaysAndHolidays() {
    const workingDays = CALENDAR_DATA.filter(
      (day) => day.status === "Working"
    ).length;
    const holidays = CALENDAR_DATA.filter(
      (day) => day.status === "Holiday"
    ).length;

    this.workingDaysCount.textContent = workingDays;
    this.holidaysCount.textContent = holidays;
  }

  calculateSubjectHours() {
    const subjectHours = {};

    // Process each working day
    Object.values(CLASS_SCHEDULES).forEach((daySchedule) => {
      daySchedule.forEach((session) => {
        const subject = this.normalizeSubjectName(session.subject);
        const hours = this.calculateHours(session.time);

        if (!subjectHours[subject]) {
          subjectHours[subject] = 0;
        }
        subjectHours[subject] += hours;
      });
    });

    // Sort subjects by hours (descending)
    const sortedSubjects = Object.entries(subjectHours).sort(
      ([, a], [, b]) => b - a
    );

    // Display results
    this.subjectHours.innerHTML = sortedSubjects
      .map(
        ([subject, hours]) => `
              <div class="subject-hour-item">
                  <span class="subject-name">${subject}</span>
                  <span class="subject-time">${hours.toFixed(1)} hrs/week</span>
              </div>
          `
      )
      .join("");
  }

  normalizeSubjectName(subject) {
    // Handle split subjects (lab groups)
    if (subject.includes("/")) {
      subject = subject.split("/")[0];
    }
    // Remove group information and instructor details
    return subject.split("(")[0].trim();
  }

  calculateHours(timeString) {
    const [start, end] = timeString.split("—").map((t) => t.trim());

    // Convert time to 24-hour format
    const getHours = (timeStr) => {
      const [time, period] = timeStr.split(" ");
      let [hours, minutes] = time.split(":").map(Number);

      if (period === "PM" && hours !== 12) hours += 12;
      if (period === "AM" && hours === 12) hours = 0;

      return hours + (minutes || 0) / 60;
    };

    const startHour = getHours(start);
    const endHour = getHours(end);

    return endHour - startHour;
  }
}

//Header navbar start
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

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  new ThemeManager();
  new CalendarManager();
  new RoutineManager();
  new SummaryManager();
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
