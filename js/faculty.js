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

// Calendar Data
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

// Class Schedule Data
const FOURTH_SEM_CLASSES = {
  1: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "EMMI-1 LAB (Gr1)(CM,LK) <br> LIBRARY (Gr 2)",
      instructor: "Chinmayee Mam and Lutfor Sir",
      room: "4th Sem",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "EM-I",
      instructor: "Amit Sir",
      room: "4th Sem",
    },
    {
      time: "1:45 PM — 3:45 PM",
      subject: "ENC",
      instructor: "Amit Sir",
      room: "4th Sem",
    },
    {
      time: "3:45 PM — 4:45 PM",
      subject: "LIBRARY",
      instructor: "Staff",
      room: "4th Sem",
    },
  ],
  2: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "EEDD",
      instructor: "Chinmayee Mam",
      room: "4th Sem",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "EEM",
      instructor: "Amit Sir",
      room: "4th Sem",
    },
    {
      time: "1:45 PM — 4:45 PM",
      subject: "LECN LAB (Gr 2) (AKD,LK) <br> EM-I LAB (Gr 1) (AKD,SI)",
      instructor: "Amit Sir and Lutfor Sir and Shohidur Sir",
      room: "4th Sem",
    },
  ],
  3: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "EEDD",
      instructor: "Chinmayee Mam",
      room: "4th Sem",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "DE",
      instructor: "Chinmayee Mam",
      room: "4th Sem",
    },
    {
      time: "1:45 PM — 3:45 PM",
      subject: "EM-I",
      instructor: "Amit Sir",
      room: "4th Sem",
    },
  ],
  4: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "EMMI-1 LAB (Gr 2) (CM,LK) <br> LIBRARY (Gr 1)",
      instructor: "Chinmayee Mam and Lutfor Sir",
      room: "4th Sem",
    },
    {
      time: "12:45 PM — 2:45 PM",
      subject: "EMMI-I",
      instructor: "Chinmayee Mam",
      room: "4th Sem",
    },
    {
      time: "2:45 PM — 3:45 PM",
      subject: "PP-II",
      instructor: "Staff",
      room: "4th Sem",
    },
    {
      time: "3:45 PM — 4:45 PM",
      subject: "Remedial Class",
      instructor: "Staff",
      room: "4th Sem",
    },
  ],
  5: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "ECN LAB (Gr1) (AKD,LK) <br> EM-I LAB (Gr2) (AKD,SI)",
      instructor: "Amit Sir and Lutfor Sir and Shohidur Sir",
      room: "4th Sem",
    },
    {
      time: "12:45 PM — 01:45 PM",
      subject: "ECN",
      instructor: "Amit Sir",
      room: "4th Sem",
    },
    {
      time: "1:45 PM — 2:45 PM",
      subject: "DE",
      instructor: "Chinmayee Mam",
      room: "4th Sem",
    },
    {
      time: "2:45 PM — 3:45 PM",
      subject: "EEM",
      instructor: "Amit Sir",
      room: "4th Sem",
    },
    {
      time: "3:45 PM — 4:45 PM",
      subject: "Remedial Class",
      instructor: "Staff",
      room: "4th Sem",
    },
  ],
  6: [
    {
      time: "9:00 AM — 10:00 AM",
      subject: "EM-I",
      instructor: "Amit Sir",
      room: "4th Sem",
    },
    {
      time: "10:00 AM — 12:00 Noon",
      subject: "EMMI-I",
      instructor: "Chinmayee Mam",
      room: "4th Sem",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "EEM",
      instructor: "Amit Sir",
      room: "4th Sem",
    },
    {
      time: "1:45 PM — 2:45 PM",
      subject: "DE",
      instructor: "Chinmayee Mam",
      room: "4th Sem",
    },
    {
      time: "2:45 PM — 4:45 PM",
      subject: "PP-II",
      instructor: "Staff",
      room: "4th Sem",
    },
  ],
};

const SIXTH_SEM_CLASSES = {
  1: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "EECC Lab Grp 1 (AKD,SI) <br> Grp 2 lib",
      instructor: "Amit Sir and Shohidur Sir",
      room: "6th Sem",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "IME",
      instructor: "X",
      room: "6th Sem",
    },
    {
      time: "1:45 PM — 2:45 PM",
      subject: "IM",
      instructor: "Chinmayee Mam",
      room: "6th Sem",
    },
    {
      time: "2:45 PM — 4:45 PM",
      subject: "PROJECT/SEMINAR",
      instructor: "Staff",
      room: "6th Sem",
    },
  ],
  2: [
    {
      time: "9:00 AM — 10:00 AM",
      subject: "GEN VIVA",
      instructor: "Staff",
      room: "6th Sem",
    },
    {
      time: "10:00 AM — 12:00 Noon",
      subject: "ACDU",
      instructor: "Amit Sir",
      room: "6th Sem",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "SGP",
      instructor: "Chinmayee Mam",
      room: "6th Sem",
    },
    {
      time: "1:45 PM — 2:45 PM",
      subject: "IM",
      instructor: "Chinmayee Mam",
      room: "6th Sem",
    },
    {
      time: "2:45 PM — 3:45 PM",
      subject: "PP-IV",
      instructor: "Staff",
      room: "6th Sem",
    },
    {
      time: "3:45 PM — 4:45 PM",
      subject: "Remedial Class",
      instructor: "Staff",
      room: "6th Sem",
    },
  ],
  3: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "EECC Lab Grp 2 (AKD,SI) <br> Grp 1 lib",
      instructor: "Amit Sir and Shohidur Sir",
      room: "6th Sem",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "EECC",
      instructor: "Amit Sir",
      room: "6th Sem",
    },
    {
      time: "1:45 PM — 2:45 PM",
      subject: "SGP",
      instructor: "Chinmayee Mam",
      room: "6th Sem",
    },
    {
      time: "2:45 PM — 3:45 PM",
      subject: "PP-IV",
      instructor: "Staff",
      room: "6th Sem",
    },
  ],
  4: [
    {
      time: "9:00 AM — 10:00 AM",
      subject: "IME",
      instructor: "X",
      room: "6th Sem",
    },
    {
      time: "10:00 AM — 12:00 Noon",
      subject: "ACDU",
      instructor: "Amit Sir",
      room: "6th Sem",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "EECC",
      instructor: "Amit Sir",
      room: "6th Sem",
    },
    {
      time: "1:45 PM — 4:45 PM",
      subject: "PROJECT/SEMINAR",
      instructor: "Staff",
      room: "6th Sem",
    },
  ],
  5: [
    {
      time: "9:00 AM — 11:00 AM",
      subject: "IM",
      instructor: "Chinmayee Mam",
      room: "6th Sem",
    },
    {
      time: "11:00 AM — 12:00 Noon",
      subject: "IME",
      instructor: "X",
      room: "6th Sem",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "SGP",
      instructor: "Chinmayee Mam",
      room: "6th Sem",
    },
    {
      time: "1:45 PM — 2:45 PM",
      subject: "GEN VIVA",
      instructor: "Staff",
      room: "6th Sem",
    },
    {
      time: "2:45 PM — 4:45 PM",
      subject: "PROJECT/SEMINAR",
      instructor: "Staff",
      room: "6th Sem",
    },
  ],
  6: [
    {
      time: "9:00 AM — 10:00 AM",
      subject: "IME",
      instructor: "X",
      room: "6th Sem",
    },
    {
      time: "10:00 AM — 12:00 Noon",
      subject: "EECC",
      instructor: "Amit Sir",
      room: "6th Sem",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "SGP",
      instructor: "Chinmayee Mam",
      room: "6th Sem",
    },
    {
      time: "1:45 PM — 2:45 PM",
      subject: "PP-IV",
      instructor: "Staff",
      room: "6th Sem",
    },
    {
      time: "2:45 PM — 4:45 PM",
      subject: "PROJECT",
      instructor: "Staff",
      room: "6th Sem",
    },
  ],
};

// Get greeting based on time of day
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 17) return "Good Afternoon";
  return "Good Evening";
}

// Update date and time
function updateDateTime() {
  const now = new Date();

  // Update date
  document.getElementById("currentDate").textContent = now.toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  // Update time
  document.getElementById("currentTime").textContent = now.toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  // Update greeting
  document.getElementById(
    "mainGreeting"
  ).textContent = `${getGreeting()}, Faculty`;
}

// Check working day status
function checkWorkingDay() {
  // For testing, log the current date
  const currentDate = new Date();

  // Format date to match CALENDAR_DATA format (YYYY-MM-DD)
  const formattedDate = `${currentDate.getFullYear()}-${String(
    currentDate.getMonth() + 1
  ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(2, "0")}`;

  console.log("Current formatted date:", formattedDate); // Debug log

  // Find matching calendar entry
  const calendarEntry = CALENDAR_DATA.find(
    (entry) => entry.date === formattedDate
  );

  console.log("Found calendar entry:", calendarEntry); // Debug log

  // Get elements
  const workdayElement = document.getElementById("workdayNumber");
  const holidayNoticeElement = document.getElementById("holidayNotice");

  if (calendarEntry) {
    console.log("Status:", calendarEntry.status); // Debug log

    if (calendarEntry.status === "Holiday") {
      showHolidayNotice(calendarEntry.remarks);
      workdayElement.textContent = "-";
    } else {
      workdayElement.textContent = calendarEntry.workingDay;
      holidayNoticeElement.innerHTML = "";
    }
  } else {
    // No matching entry found
    workdayElement.textContent = "-";
    holidayNoticeElement.innerHTML = "";
    console.log("No calendar entry found for date:", formattedDate); // Debug log
  }
}

// Show holiday notice
function showHolidayNotice(reason) {
  document.getElementById("holidayNotice").innerHTML = `
  <div class="holiday-notice" data-aos="fade-up">
      <i class="fas fa-calendar-xmark"></i>
      <h3>Holiday Today</h3>
      <p>${reason}</p>
  </div>
`;
}

// Initialize dashboard
function initializeDashboard() {
  checkWorkingDay(); // Check working day first
  setInterval(checkWorkingDay, 60000); // Update every minute
}

// Start when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeDashboard);

// Convert time to minutes for comparison
function timeToMinutes(timeStr) {
  const [time, period] = timeStr.split(" ");
  let [hours, minutes] = time.split(":").map(Number);
  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

// Get unique teachers from both semesters
function getUniqueTeachers() {
  const teachers = new Set();

  [FOURTH_SEM_CLASSES, SIXTH_SEM_CLASSES].forEach((semester) => {
    Object.values(semester).forEach((day) => {
      day.forEach((classInfo) => {
        classInfo.instructor.split(" and ").forEach((instructor) => {
          teachers.add(instructor.trim());
        });
      });
    });
  });

  return Array.from(teachers);
}

// Get class status (current, upcoming, or past)
function getClassStatus(timeRange) {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const [startStr, endStr] = timeRange.split("—").map((t) => t.trim());
  const startMinutes = timeToMinutes(startStr);
  const endMinutes = timeToMinutes(endStr);

  if (currentMinutes >= startMinutes && currentMinutes <= endMinutes) {
    return "current";
  } else if (currentMinutes < startMinutes) {
    return "upcoming";
  }
  return "past";
}

function findCurrentOrNextClass(teacher) {
  const now = new Date();
  const formattedDate = `${now.getFullYear()}-${String(
    now.getMonth() + 1
  ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  // Check if today is a holiday
  const todayCalendar = CALENDAR_DATA.find(
    (entry) => entry.date === formattedDate
  );

  // If it's a holiday or no calendar entry found, return null
  if (!todayCalendar || todayCalendar.status === "Holiday") {
    return null;
  }

  const currentWorkingDay = todayCalendar.workingDay;

  let currentClass = null;
  let nextClass = null;

  [FOURTH_SEM_CLASSES, SIXTH_SEM_CLASSES].forEach((semester) => {
    const daySchedule = semester[currentWorkingDay];
    if (!daySchedule) return;

    daySchedule.forEach((classInfo) => {
      if (!classInfo.instructor.includes(teacher)) return;

      const status = getClassStatus(classInfo.time);
      if (status === "current" && !currentClass) {
        currentClass = { ...classInfo, status: "current" };
      } else if (status === "upcoming" && !nextClass) {
        nextClass = { ...classInfo, status: "upcoming" };
      }
    });
  });

  return currentClass || nextClass;
}

// Create teacher card
function createTeacherCard(teacher) {
  const currentClass = findCurrentOrNextClass(teacher);
  const card = document.createElement("div");
  card.className = "teacher-card";
  card.setAttribute("data-aos", "fade-up");

  const scheduleForDay = getTeacherScheduleForDay(teacher);

  card.innerHTML = `
  <div class="teacher-header">
      <div class="teacher-avatar">
          <i class="fas fa-user-tie"></i>
      </div>
      <div class="teacher-info">
          <h3>${teacher}</h3>
          <p>${scheduleForDay.length} classes today</p>
      </div>
  </div>
  
  ${
    currentClass
      ? `
      <div class="current-class">
          <div class="current-class-header">
              <h4>${
                currentClass.status === "current"
                  ? "Current Class"
                  : "Upcoming Class"
              }</h4>
              <span class="status-badge status-${currentClass.status}">
                  ${
                    currentClass.status === "current"
                      ? "In Progress"
                      : "Upcoming"
                  }
              </span>
          </div>
          <div class="schedule-item">
              <div class="schedule-time">
                  <i class="far fa-clock"></i>
                  ${currentClass.time}
              </div>
              <div class="schedule-subject">${currentClass.subject}</div>
              <div class="schedule-details">
                  <div class="schedule-detail">
                      <i class="fas fa-location-dot"></i>
                      ${currentClass.room}
                  </div>
              </div>
          </div>
      </div>
  `
      : ""
  }
  
  <div class="schedule-container">
      <div class="semester-tabs">
          <button class="semester-tab active" onclick="switchSemester(this, '${teacher}', 4)">4th Semester</button>
          <button class="semester-tab" onclick="switchSemester(this, '${teacher}', 6)">6th Semester</button>
      </div>
      <div id="schedule-${teacher.replace(
        /\s+/g,
        "-"
      )}" class="schedule-content">
          ${generateScheduleHTML(teacher, 4)}
      </div>
  </div>
`;

  return card;
}

function getTeacherScheduleForDay(teacher) {
  const now = new Date();
  const formattedDate = `${now.getFullYear()}-${String(
    now.getMonth() + 1
  ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

  // Check if today is a holiday
  const todayCalendar = CALENDAR_DATA.find(
    (entry) => entry.date === formattedDate
  );

  // If it's a holiday or no calendar entry found, return empty array
  if (!todayCalendar || todayCalendar.status === "Holiday") {
    return [];
  }

  const currentWorkingDay = todayCalendar.workingDay;
  if (!currentWorkingDay) return [];

  let schedule = [];
  [FOURTH_SEM_CLASSES, SIXTH_SEM_CLASSES].forEach((semester) => {
    const daySchedule = semester[currentWorkingDay];
    if (!daySchedule) return;

    schedule = schedule.concat(
      daySchedule.filter((classInfo) => classInfo.instructor.includes(teacher))
    );
  });

  return schedule.sort(
    (a, b) =>
      timeToMinutes(a.time.split("—")[0]) - timeToMinutes(b.time.split("—")[0])
  );
}

// Generate schedule HTML
function generateScheduleHTML(teacher, semester) {
  const classes = semester === 4 ? FOURTH_SEM_CLASSES : SIXTH_SEM_CLASSES;
  let html = "";

  Object.entries(classes).forEach(([day, schedule]) => {
    const teacherClasses = schedule.filter((classInfo) =>
      classInfo.instructor.includes(teacher)
    );

    if (teacherClasses.length > 0) {
      html += `
          <div class="schedule-day-section">
              <h4 class="day-header">Working Day ${day}</h4>
              ${teacherClasses
                .map((classInfo) => {
                  const status = getClassStatus(classInfo.time);
                  return `
                      <div class="schedule-item ${status}">
                          <div class="schedule-time">
                              <i class="far fa-clock"></i>
                              ${classInfo.time}
                          </div>
                          <div class="schedule-subject">${classInfo.subject}</div>
                          <div class="schedule-details">
                              <div class="schedule-detail">
                                  <i class="fas fa-location-dot"></i>
                                  ${classInfo.room}
                              </div>
                          </div>
                      </div>
                  `;
                })
                .join("")}
          </div>
      `;
    }
  });

  return (
    html || '<p class="no-classes">No classes scheduled for this semester</p>'
  );
}

// Switch semester view
function switchSemester(button, teacher, semester) {
  const tabs = button.parentElement.getElementsByClassName("semester-tab");
  Array.from(tabs).forEach((tab) => tab.classList.remove("active"));
  button.classList.add("active");

  const scheduleContainer = document.getElementById(
    `schedule-${teacher.replace(/\s+/g, "-")}`
  );
  scheduleContainer.innerHTML = generateScheduleHTML(teacher, semester);
}

// Get current working day
function getCurrentWorkingDay() {
  const today = new Date().toISOString().split("T")[0];
  const calendarEntry = CALENDAR_DATA.find(
    (entry) => entry.date === today && entry.status === "Working"
  );
  return calendarEntry?.workingDay;
}

// Update all schedules
function updateSchedules() {
  const teachers = getUniqueTeachers();
  const grid = document.getElementById("teacherGrid");
  grid.innerHTML = "";

  teachers.forEach((teacher) => {
    grid.appendChild(createTeacherCard(teacher));
  });
}

// Enhanced initialization
function initializeDashboard() {
  // Previous initialization code
  updateDateTime();
  setInterval(updateDateTime, 60000);
  checkWorkingDay();

  // Initialize teacher schedules
  updateSchedules();

  // Update schedules every 5 minutes
  setInterval(updateSchedules, 300000);

  // Add periodic checks for status changes
  setInterval(() => {
    checkWorkingDay();
    const teacherCards = document.querySelectorAll(".teacher-card");
    teacherCards.forEach((card) => {
      const teacherName = card.querySelector(".teacher-info h3").textContent;
      const currentClass = findCurrentOrNextClass(teacherName);
      const currentClassSection = card.querySelector(".current-class");

      if (
        currentClass &&
        (!currentClassSection ||
          currentClassSection.querySelector(".schedule-time").textContent !==
            currentClass.time)
      ) {
        // Update current class display if changed
        if (currentClassSection) {
          currentClassSection.remove();
        }
        const newCurrentClass = createCurrentClassSection(currentClass);
        card.insertBefore(
          newCurrentClass,
          card.querySelector(".schedule-container")
        );
      }
    });
  }, 60000);
}

// Create current class section
function createCurrentClassSection(classInfo) {
  const section = document.createElement("div");
  section.className = "current-class";
  section.innerHTML = `
  <div class="current-class-header">
      <h4>${
        classInfo.status === "current" ? "Current Class" : "Upcoming Class"
      }</h4>
      <span class="status-badge status-${classInfo.status}">
          ${classInfo.status === "current" ? "In Progress" : "Upcoming"}
      </span>
  </div>
  <div class="schedule-item">
      <div class="schedule-time">
          <i class="far fa-clock"></i>
          ${classInfo.time}
      </div>
      <div class="schedule-subject">${classInfo.subject}</div>
      <div class="schedule-details">
          <div class="schedule-detail">
              <i class="fas fa-location-dot"></i>
              ${classInfo.room}
          </div>
      </div>
  </div>
`;
  return section;
}

document.addEventListener("DOMContentLoaded", initializeDashboard);

document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    const isActive = item.classList.contains("active");

    // Close all FAQ items
    document.querySelectorAll(".faq-item").forEach((faq) => {
      faq.classList.remove("active");
    });

    // Open clicked item if it wasn't active
    if (!isActive) {
      item.classList.add("active");
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
