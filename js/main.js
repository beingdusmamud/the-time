// Constants and Configurations
const CONFIG = {
  workingTime: {
    start: 9, // 9 AM
    end: 15.75, // 3:45 PM
  },
  refreshInterval: 60000, // 1 minute
  facts: [
    "Ohm's Law states voltage equals current times resistance in electrical circuits.",
    "Capacitors store electrical energy in an electrostatic field between conductors.",
    "Tesla coils can generate high voltage electrical discharges up to several feet long.",
    "Digital circuits use binary logic gates to process information using 1s and 0s.",
    "Power factor correction helps improve efficiency in AC electrical distribution.",
    "The Hall effect occurs when magnetic fields deflect current-carrying conductors.",
    "Kirchhoff's laws describe current and voltage behavior in electrical networks.",
    "Semiconductors form the basis of modern electronics like transistors and diodes.",
    "Electric motors convert electrical energy to mechanical energy using magnetic fields.",
    "Superconductors have zero electrical resistance at very low temperatures.",
    "Maxwell's equations mathematically describe electromagnetic wave behavior.",
    "LED lights convert electrical energy directly into light with high efficiency.",
    "Phase angle describes the timing relationship between voltage and current waves.",
    "Ground fault circuit interrupters protect against electrical shock hazards.",
    "Transformers transfer electrical energy between circuits through magnetic coupling.",
    "Inductors store electrical energy in magnetic fields created by current flow.",
    "Solar cells convert light energy into electrical energy using photovoltaic effect.",
    "Impedance matching maximizes power transfer in electrical transmission lines.",
    "Electric generators convert mechanical energy to electrical using electromagnetic.",
    "Resonant circuits amplify signals at their natural frequency of oscillation.",
    "Thermoelectric devices convert temperature differences into electrical power.",
    "Signal processing filters modify frequency content of electrical waveforms.",
    "Analog circuits process continuously varying electrical signals and quantities.",
    "Power electronics control and convert electrical power between different forms.",
    "Operational amplifiers are versatile building blocks for analog circuits.",
    "Piezoelectric materials generate voltage when mechanical stress is applied.",
    "Microcontrollers are small computers on single integrated circuit chips.",
    "Electric fields exist between conductors with different electrical potentials.",
    "Boolean algebra forms the mathematical basis for digital logic design.",
    "Transmission lines carry electrical power over long distances efficiently.",
    "Electromagnetism unifies electric and magnetic phenomena in single theory.",
    "Logic analyzers display and analyze digital signals in electronic systems.",
    "Voltage regulators maintain constant output voltage despite input changes.",
    "Current mirrors provide precise current copying in integrated circuits.",
    "Switching power supplies convert voltage levels with high efficiency.",
    "Electromagnetic interference can disrupt operation of electronic devices.",
    "Analog-to-digital converters transform analog signals to digital format.",
    "Electric motors use commutators to switch current direction in windings.",
    "Dielectric materials are electrical insulators that can be polarized.",
    "Electrical noise limits the minimum detectable signal in circuits.",
    "Phase-locked loops synchronize oscillator frequency to reference signal.",
    "RC circuits filter signals using resistor and capacitor combinations.",
    "Electric charge is a fundamental property of matter in the universe.",
    "Digital signal processors perform mathematical operations on signals.",
    "Electrical conductivity measures material's ability to conduct current.",
    "Power amplifiers increase signal power levels while maintaining shape.",
    "Magnetic cores concentrate magnetic flux in transformers and inductors.",
    "Electric potential difference drives current flow in circuits.",
    "Signal integrity ensures reliable transmission of electrical signals.",
    "Electrical resonance occurs when inductive and capacitive reactance match.",
  ],
};

// Fact Manager
class FactManager {
  constructor() {
    this.factText = document.getElementById("dailyFact");
    this.refreshButton = document.getElementById("refreshFact");
    this.init();
  }

  init() {
    this.refreshButton.addEventListener("click", () => this.updateFact());
    this.updateFact();
  }

  updateFact() {
    const randomFact =
      CONFIG.facts[Math.floor(Math.random() * CONFIG.facts.length)];
    this.factText.textContent = randomFact;
  }
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  new FactManager();
});

// Class Schedule Data
const CLASS_SCHEDULES = {
  1: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "EMMI-1 LAB (Gr 1) (CM, LK) <br> LIBRARY (Gr 2)",
      instructor: "Staff",
      type: "lab",
      room: "Practical",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "EM-I",
      instructor: "Amit Sir",
      type: "theory",
      room: "Lecture",
    },
    {
      time: "1:45 PM — 3:45 PM",
      subject: "ENC",
      instructor: "Amit Sir",
      type: "theory",
      room: "Lecture",
    },
    {
      time: "3:45 PM — 4:45 PM",
      subject: "LIBRARY",
      instructor: "Staff",
      type: "other",
      room: "Library",
    },
  ],
  2: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "EEDD",
      instructor: "Chinmayee Ma'am",
      type: "theory",
      room: "Lecture",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "EEM",
      instructor: "Amit Sir",
      type: "theory",
      room: "Lecture",
    },
    {
      time: "1:45 PM — 4:45 PM",
      subject: "ECN LAB (Gr 2) (AKD, LK) <br> EM-I LAB (Gr 1) (AKD, SI)",
      instructor: "Staff",
      type: "lab",
      room: "Practical",
    },
  ],
  3: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "EEDD",
      instructor: "Chinmayee Ma'am",
      type: "theory",
      room: "Lecture",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "DE",
      instructor: "Chinmayee Ma'am",
      type: "theory",
      room: "Lecture",
    },
    {
      time: "1:45 PM — 3:45 PM",
      subject: "EM-I",
      instructor: "Amit Sir",
      type: "theory",
      room: "Lecture",
    },
  ],
  4: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "EMMI-1 LAB (Gr 2) (CM,LK) <br> LIBRARY (Gr 1)",
      instructor: "Staff",
      type: "lab",
      room: "Practical",
    },
    {
      time: "12:45 PM — 2:45 PM",
      subject: "EMMI-I",
      instructor: "Chinmayee Ma'am",
      type: "theory",
      room: "Lecture",
    },
    {
      time: "2:45 PM — 3:45 PM",
      subject: "PP-II",
      instructor: "Staff",
      type: "other",
      room: "-",
    },
    {
      time: "3:45 PM — 4:45 PM",
      subject: "Remedial Class",
      instructor: "Staff",
      type: "other",
      room: "-",
    },
  ],
  5: [
    {
      time: "9:00 AM — 12:00 Noon",
      subject: "ECN LAB (Gr 1) (AKD, LK) <br> EM-I LAB (Gr 2) (AKD,SI)",
      instructor: "Staff",
      type: "lab",
      room: "Practical",
    },
    {
      time: "12:45 PM — 01:45 AM",
      subject: "ECN",
      instructor: "Amit Sir",
      type: "theory",
      room: "Lecture",
    },
    {
      time: "01:45 PM — 02:45 PM",
      subject: "DE",
      instructor: "Chinmayee Ma'am",
      type: "theory",
      room: "Lecture",
    },
    {
      time: "02:45 PM — 3:45 PM",
      subject: "EEM",
      instructor: "Amit Sir",
      type: "theory",
      room: "lacture",
    },
    {
      time: "3:45 PM — 4:45 PM",
      subject: "Remedial Class",
      instructor: "Staff",
      type: "other",
      room: "-",
    },
  ],
  6: [
    {
      time: "9:00 AM — 10:00 AM",
      subject: "EM-I",
      instructor: "Amit Sir",
      type: "theory",
      room: "Theory",
    },
    {
      time: "10:00 AM — 12:00 Noon",
      subject: "EMMI-I",
      instructor: "Chinmayee Ma'am",
      type: "theory",
      room: "Lecture & Theory",
    },
    {
      time: "12:45 PM — 1:45 PM",
      subject: "EEM",
      instructor: "Amit Sir",
      type: "theory",
      room: "Lecture",
    },
    {
      time: "1:45 PM — 2:45 PM",
      subject: "DE",
      instructor: "Chinmayee Ma'am",
      type: "theory",
      room: "Lecture",
    },
    {
      time: "2:45 PM — 4:45 PM",
      subject: "PP-II",
      instructor: "Staff",
      type: "other",
      room: "-",
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

// Theme Management
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

class AcademicCalendar {
  constructor() {
    this.init();
  }

  init() {
    this.updateDateTime();
    this.updateSchedule();
    this.updateStatusIndicator();
    this.setupEventListeners();
  }

  updateDateTime() {
    const now = new Date();
    const currentDate = this.formatDate(now);
    const todayData = CALENDAR_DATA.find((item) => item.date === currentDate);

    if (todayData) {
      document.getElementById("currentDate").textContent =
        now.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      document.getElementById("currentDay").textContent = todayData.day;

      const badge = document.getElementById("workingDayBadge");
      if (todayData.status === "Holiday") {
        badge.classList.add("holiday-badge");
        badge.innerHTML = `
          <i class="fas fa-calendar-times"></i>
          <span>${todayData.remarks}</span>
        `;
      } else {
        badge.classList.remove("holiday-badge");
        badge.innerHTML = `
          <i class="fas fa-calendar-day"></i>
          <span>Working Day ${todayData.workingDay}</span>
        `;
      }
    }
  }

  formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  updateStatusIndicator() {
    const now = new Date();
    const currentDate = now.toISOString().split("T")[0];
    const todayData = CALENDAR_DATA.find((item) => item.date === currentDate);

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTimeInMinutes = hours * 60 + minutes;

    const indicator = document.getElementById("statusIndicator");

    // Working hours: 9:00 AM (540 minutes) to 4:45 PM (1005 minutes)
    if (
      todayData &&
      todayData.status === "Working" &&
      currentTimeInMinutes >= 540 &&
      currentTimeInMinutes <= 1005
    ) {
      // Working hours - show green
      indicator.style.setProperty("--success", "#28a745");
      indicator.style.backgroundColor = "var(--success)";
      indicator.style.boxShadow = "0 0 10px var(--success)";
    } else {
      // Non-working hours or holiday - show red
      indicator.style.setProperty("#c62828", "#dc3545");
      indicator.style.backgroundColor = "#c62828";
      indicator.style.boxShadow = "0 0 10px #c62828";
    }
  }

  isWithinWorkingHours(currentTimeInMinutes) {
    const startTime = 9 * 60; // 9:00 AM in minutes
    const endTime = 16 * 60 + 45; // 4:45 PM in minutes
    return currentTimeInMinutes >= startTime && currentTimeInMinutes <= endTime;
  }

  updateSchedule() {
    const now = new Date();
    const currentDate = this.formatDate(now);
    const todayData = CALENDAR_DATA.find((item) => item.date === currentDate);

    const scheduleGrid = document.getElementById("scheduleGrid");

    if (!todayData || todayData.status === "Holiday") {
      scheduleGrid.innerHTML = this.generateNoClassesHTML(todayData?.remarks);
      return;
    }

    const schedules = CLASS_SCHEDULES[todayData.workingDay] || [];
    scheduleGrid.innerHTML = schedules
      .map((schedule) => this.generateScheduleCardHTML(schedule))
      .join("");
  }

  generateScheduleCardHTML(schedule) {
    return `
      <div class="schedule-card">
        <div class="schedule-time">
          <i class="far fa-clock"></i>
          <span>${schedule.time}</span>
        </div>
        <div class="schedule-subject">${schedule.subject}</div>
        <p class="schedule-room">${schedule.room}</p>
        <div class="schedule-instructor">
          <div class="instructor-avatar">
            <i class="fas fa-user"></i>
          </div>
          <span>${schedule.instructor}</span>
        </div>
      </div>
    `;
  }

  generateNoClassesHTML(reason) {
    return `
      <div class="no-classes animate__animated animate__fadeIn">
              <i class="fas fa-coffee"></i>
              <h3>No Classes Today</h3>
              <p>${reason}</p>
              <div class="no-classes-holiday"><b>Holiday</b></div>
              <p>Enjoy your break! 😉</p>
          </div>
          
      
    `;
  }

  setupEventListeners() {
    // Update every minute
    setInterval(() => {
      this.updateDateTime();
      this.updateStatusIndicator();
    }, 60000);
  }
}

// Initialize the calendar when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  new AcademicCalendar();
});

// Image slider
class GallerySlider {
  constructor() {
    this.currentSlide = 0;
    this.slides = [
      {
        image: "/assets/chirang-polytechnic.jpg",
        title: "Chirang Polytechnic",
        description:
          "Chirang Polytechnic's main building under a vibrant evening sky.",
      },
      {
        image: "/assets/college-entrance.jpg",
        title: "College Entrance",
        description: "The welcoming gate of Chirang Polytechnic",
      },
      {
        image: "/assets/moment.jpg",
        title: "Moment",
        description: "A heartfelt memory with Mimli Ma'am",
      },
      {
        image: "/assets/end-semester-presentation.jpg",
        title: "End-Sem PPT",
        description: "During the professional practice session.",
      },
      {
        image: "/assets/hands-on-learning.jpg",
        title: "Learning",
        description: "Participating in a lab experiment under guidance.",
      },
      {
        image: "/assets/internship.jpg",
        title: "Internship",
        description: "At N.B NRF Railway.",
      },
    ];

    this.track = document.getElementById("galleryTrack");
    this.dotsContainer = document.getElementById("galleryDots");
    this.init();
  }

  init() {
    // Create slides
    this.createSlides();

    // Create dots
    this.createDots();

    // Add event listeners
    document
      .querySelector(".gallery-button.prev")
      .addEventListener("click", () => this.prevSlide());
    document
      .querySelector(".gallery-button.next")
      .addEventListener("click", () => this.nextSlide());

    // Auto advance slides
    this.startAutoAdvance();

    // Pause auto-advance on hover
    const slider = document.getElementById("gallerySlider");
    slider.addEventListener("mouseenter", () => this.pauseAutoAdvance());
    slider.addEventListener("mouseleave", () => this.startAutoAdvance());
  }

  createSlides() {
    this.slides.forEach((slide, index) => {
      const slideElement = document.createElement("div");
      slideElement.className = "gallery-slide";
      slideElement.innerHTML = `
            <img src="${slide.image}" alt="${slide.title}" class="gallery-image">
            <div class="gallery-content">
                <h3>${slide.title}</h3>
                <p>${slide.description}</p>
            </div>
        `;
      this.track.appendChild(slideElement);
    });
  }

  createDots() {
    this.slides.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.className = `gallery-dot${index === 0 ? " active" : ""}`;
      dot.addEventListener("click", () => this.goToSlide(index));
      this.dotsContainer.appendChild(dot);
    });
  }

  updateDots() {
    const dots = this.dotsContainer.children;
    Array.from(dots).forEach((dot, index) => {
      dot.className = `gallery-dot${
        index === this.currentSlide ? " active" : ""
      }`;
    });
  }

  goToSlide(index) {
    this.currentSlide = index;
    this.track.style.transform = `translateX(-${index * 100}%)`;
    this.updateDots();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.goToSlide(this.currentSlide);
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.goToSlide(this.currentSlide);
  }

  startAutoAdvance() {
    this.autoAdvance = setInterval(() => this.nextSlide(), 5000);
  }

  pauseAutoAdvance() {
    clearInterval(this.autoAdvance);
  }
}

// Create the popup style
const style = document.createElement("style");
style.textContent = `
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        display: none;
        z-index: 999;
    }

    .popup-notification {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.95);
        padding: 30px 40px;
        border-radius: 15px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        display: none;
        width: 90%;
        max-width: 500px;
        animation: slideIn 0.6s ease-out;
    }

    .calendar-ended-message {
        text-align: center;
    }

    .calendar-ended-message i {
        font-size: 48px;
        color: #e74c3c;
        margin-bottom: 20px;
    }

    .calendar-ended-message h2 {
        color: #2c3e50;
        font-size: 28px;
        margin-bottom: 15px;
        font-weight: 600;
    }

    .calendar-ended-message p {
        color: #34495e;
        font-size: 16px;
        line-height: 1.6;
        margin-bottom: 10px;
    }

    .period-info {
        background: #f8f9fa;
        padding: 12px;
        border-radius: 8px;
        margin: 15px 0;
        border: 1px solid #e9ecef;
    }

    .contact-btn {
        background: #3498db;
        color: white;
        border: none;
        padding: 12px 25px;
        border-radius: 25px;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-top: 20px;
        font-weight: 500;
    }

    .contact-btn:hover {
        background: #2980b9;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
    }

    @keyframes slideIn {
        0% {
            transform: translate(-50%, -60%);
            opacity: 0;
        }
        100% {
            transform: translate(-50%, -50%);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Create overlay
const overlay = document.createElement("div");
overlay.className = "overlay";
document.body.appendChild(overlay);

// Create popup element
const popup = document.createElement("div");
popup.className = "popup-notification";
popup.innerHTML = `
    <div class="calendar-ended-message">
        <i class="fas fa-calendar-times"></i>
        <h2>Academic Calendar Has Ended</h2>
        <p>No schedules available.</p>
        <p class="period-info">Academic calendar period: January 20, 2025 - May 11, 2025</p>
        <button class="contact-btn" onclick="handleContact()">Contact Us</button>
    </div>
`;
document.body.appendChild(popup);

// Contact button handler
function handleContact() {
  window.location.href = "/pages/contact.html"; // Replace with your contact page URL
}

// Function to show popup and overlay
function showPopup() {
  overlay.style.display = "block";
  popup.style.display = "block";

  setTimeout(() => {
    hidePopup();
  }, 10000); // Show for 10 seconds
}

// Function to hide popup and overlay
function hidePopup() {
  overlay.style.display = "none";
  popup.style.display = "none";

  setTimeout(() => {
    showPopup();
  }, 5000); // Hide for 5 seconds
}

// Function to check date and start popup loop
function startPopupLoop() {
  const targetDate = new Date("2025-05-24T00:00:00");
  const now = new Date();

  if (now >= targetDate) {
    // Initial delay of 3 seconds when user first visits
    setTimeout(() => {
      showPopup();
    }, 3000);
  } else {
    // If it's not time yet, check again in a minute
    setTimeout(startPopupLoop, 60000);
  }
}

// Function to handle escape key press
function handleEscapeKey(event) {
  if (event.key === "Escape") {
    hidePopup();
  }
}

// Add event listeners
document.addEventListener("keydown", handleEscapeKey);
window.addEventListener("load", startPopupLoop);

// Optional: Add click outside to close
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    hidePopup();
  }
});

// Happy 76th Republic Day start
// Styles
const styles = `
@keyframes shimmer {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

@keyframes colorPulse {
    0%, 100% { filter: hue-rotate(0deg) brightness(100%); }
    50% { filter: hue-rotate(45deg) brightness(120%); }
}

@keyframes chakraSpin {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes flagWave {
    0% { transform: perspective(500px) rotateX(0deg) rotateY(0deg); }
    25% { transform: perspective(500px) rotateX(5deg) rotateY(5deg); }
    50% { transform: perspective(500px) rotateX(0deg) rotateY(10deg); }
    75% { transform: perspective(500px) rotateX(-5deg) rotateY(5deg); }
    100% { transform: perspective(500px) rotateX(0deg) rotateY(0deg); }
}

.republic-day-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 100%);
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
}

.celebration-content {
    position: relative;
    text-align: center;
    padding: 3rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 30px;
    box-shadow: 0 0 30px rgba(255, 153, 51, 0.2),
                0 0 60px rgba(19, 136, 8, 0.2);
    backdrop-filter: blur(20px);
    max-width: 900px;
    width: 90%;
    transform-style: preserve-3d;
    animation: float 6s ease-in-out infinite;
}

.celebration-title {
    font-size: 4em;
    margin-bottom: 30px;
    font-family: 'Arial', sans-serif;
    font-weight: 800;
    background: linear-gradient(
        45deg,
        #FF9933 0%,
        #FFFFFF 35%,
        #138808 65%,
        #FF9933 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3s linear infinite;
    text-shadow: 0 0 20px rgba(255,255,255,0.1);
    letter-spacing: 2px;
}

.indian-flag {
    position: relative;
    width: 400px;
    height: 267px;
    margin: 30px auto;
    transform-style: preserve-3d;
    animation: flagWave 10s ease-in-out infinite;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    border-radius: 10px;
    overflow: hidden;
}

.flag-section {
    position: relative;
    height: 33.33%;
    width: 100%;
    transition: all 0.3s ease;
}

.saffron {
    background: linear-gradient(45deg, #FF9933, #FFB366);
}

.white {
    background: linear-gradient(45deg, #FFFFFF, #F0F0F0);
    position: relative;
}

.green {
    background: linear-gradient(45deg, #138808, #1AA80D);
}

.ashoka-chakra {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 66px;
    height: 66px;
    border: 3px solid #000080;
    border-radius: 50%;
    animation: chakraSpin 8s linear infinite;
}

.chakra-spoke {
    position: absolute;
    width: 2.5px;
    height: 30px;
    background: #000080;
    left: 50%;
    top: 50%;
    transform-origin: 0% 0%;
}

.celebration-info {
    color: white;
    max-width: 600px;
    margin: 30px auto;
    padding: 20px;
    background: rgba(255,255,255,0.05);
    border-radius: 15px;
    transform: translateZ(20px);
}

.info-text {
    font-size: 1.2em;
    line-height: 1.6;
    margin: 10px 0;
    color: rgba(255,255,255,0.9);
}

.close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border: none;
    background: rgba(255,255,255,0.1);
    color: white;
    font-size: 24px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
}

.close-button:hover {
    background: rgba(255,255,255,0.2);
    transform: rotate(90deg);
}

.firework {
    position: absolute;
    pointer-events: none;
}

.countdown {
    position: absolute;
    top: 20px;
    left: 20px;
    color: rgba(255,255,255,0.7);
    font-size: 1.2em;
    background: rgba(255,255,255,0.1);
    padding: 10px 20px;
    border-radius: 20px;
    backdrop-filter: blur(5px);
}

.particle-container {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.celebration-emoji {
    font-size: 2em;
    margin: 10px;
    animation: float 3s ease-in-out infinite;
}

@media (max-width: 768px) {
    .celebration-title { font-size: 2.5em; }
    .indian-flag { width: 300px; height: 200px; }
    .celebration-content { padding: 2rem; }
}
`;

class ParticleSystem {
  constructor(container) {
    this.container = container;
    this.particles = [];
  }

  createParticle() {
    const colors = ["#FF9933", "#FFFFFF", "#138808", "#FFC107", "#FF5722"];
    const particle = document.createElement("div");
    const size = Math.random() * 6 + 4;
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 2 + 1;
    const lifetime = Math.random() * 1000 + 1000;

    particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            filter: blur(1px);
            box-shadow: 0 0 ${size}px ${size / 2}px currentColor;
        `;

    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight;

    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;

    const dx = Math.cos(angle) * velocity;
    const dy = Math.sin(angle) * velocity - 2;

    this.container.appendChild(particle);
    this.particles.push({
      element: particle,
      dx,
      dy,
      x: startX,
      y: startY,
      lifetime,
      born: Date.now(),
    });
  }

  update() {
    const now = Date.now();
    this.particles.forEach((particle, index) => {
      particle.x += particle.dx;
      particle.dy += 0.1;
      particle.y += particle.dy;

      particle.element.style.transform = `translate(${particle.dx}px, ${particle.dy}px)`;

      if (now - particle.born > particle.lifetime) {
        particle.element.remove();
        this.particles.splice(index, 1);
      }
    });
  }
}

class RepublicDayCelebration {
  constructor() {
    this.container = null;
    this.particleSystem = null;
    this.timeLeft = 30;
    this.styleSheet = document.createElement("style");
    this.styleSheet.textContent = styles;
    document.head.appendChild(this.styleSheet);
  }

  createChakra() {
    const chakra = document.createElement("div");
    chakra.className = "ashoka-chakra";

    for (let i = 0; i < 24; i++) {
      const spoke = document.createElement("div");
      spoke.className = "chakra-spoke";
      spoke.style.transform = `rotate(${i * 15}deg)`;
      chakra.appendChild(spoke);
    }

    return chakra;
  }

  updateCountdown() {
    const countdown = this.container.querySelector(".countdown");
    countdown.textContent = `${this.timeLeft}s`;
    if (this.timeLeft > 0) {
      this.timeLeft--;
      setTimeout(() => this.updateCountdown(), 1000);
    } else {
      this.close();
    }
  }

  createContainer() {
    this.container = document.createElement("div");
    this.container.className = "republic-day-container";

    const content = document.createElement("div");
    content.className = "celebration-content";

    // Title with dynamic year calculation
    const title = document.createElement("h1");
    title.className = "celebration-title";
    title.textContent = "Happy 76th Republic Day!";

    // Indian Flag
    const flag = document.createElement("div");
    flag.className = "indian-flag";
    ["saffron", "white", "green"].forEach((color) => {
      const section = document.createElement("div");
      section.className = `flag-section ${color}`;
      if (color === "white") section.appendChild(this.createChakra());
      flag.appendChild(section);
    });

    // Information section
    const info = document.createElement("div");
    info.className = "celebration-info";
    info.innerHTML = `
            <p class="info-text">Celebrating the spirit of democracy and the constitution of our great nation.</p>
            <p class="info-text">जय हिंद । जय भारत । 🇮🇳</p>
            <div class="celebration-emoji">🎉 🇮🇳 ✨</div>
        `;

    // Countdown
    const countdown = document.createElement("div");
    countdown.className = "countdown";

    // Close button
    const closeBtn = document.createElement("button");
    closeBtn.className = "close-button";
    closeBtn.innerHTML = "×";
    closeBtn.onclick = () => this.close();

    // Particle container
    const particleContainer = document.createElement("div");
    particleContainer.className = "particle-container";

    content.append(title, flag, info);
    this.container.append(content, closeBtn, countdown, particleContainer);
    document.body.appendChild(this.container);

    this.particleSystem = new ParticleSystem(particleContainer);
    this.updateCountdown();
  }

  start() {
    this.createContainer();

    // Start particle animation
    const animate = () => {
      if (this.container && this.particleSystem) {
        this.particleSystem.createParticle();
        this.particleSystem.update();
        requestAnimationFrame(animate);
      }
    };
    animate();

    // Auto-close after 30 seconds
    setTimeout(() => this.close(), 30000);
  }

  close() {
    if (this.container) {
      this.container.style.animation = "fadeOut 0.5s";
      setTimeout(() => {
        this.container.remove();
        this.styleSheet.remove();
      }, 500);
    }
  }
}

function isRepublicDay() {
  const now = new Date();
  const startDate = new Date("2025-01-26T00:00:00");
  const endDate = new Date("2025-01-27T00:00:00");

  // For testing: Uncomment the next line to test the effect immediately
  // return true;

  return now >= startDate && now < endDate;
}

// Initialize celebration
window.addEventListener("load", () => {
  if (isRepublicDay()) {
    new RepublicDayCelebration().start();
  }
});
// Happy 76th Republic Day end

//  EID start
// Styles
const eidStyles = `
@keyframes crescentGlow {
    0%, 100% { filter: drop-shadow(0 0 15px rgba(255, 215, 0, 0.8)); }
    50% { filter: drop-shadow(0 0 30px rgba(255, 215, 0, 0.9)); }
}

@keyframes starTwinkle {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.8); }
}

@keyframes floatAnimation {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

.eid-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #1a1a3a 0%, #0f0f2f 100%);
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
}

.eid-content {
    position: relative;
    text-align: center;
    padding: 3rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 30px;
    box-shadow: 0 0 50px rgba(255, 215, 0, 0.2);
    backdrop-filter: blur(10px);
    max-width: 800px;
    width: 90%;
    animation: floatAnimation 6s ease-in-out infinite;
}

.eid-title {
    font-size: 3.5em;
    margin-bottom: 20px;
    font-family: 'Arial', sans-serif;
    color: #FFD700;
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
}

.eid-arabic {
    font-size: 2.5em;
    margin: 20px 0;
    font-family: 'Traditional Arabic', serif;
    color: #FFFFFF;
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}

.crescent-container {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 30px auto;
    animation: crescentGlow 3s infinite;
}

.crescent {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #FFD700;
    box-shadow: 15px 15px 0 0 #0f0f2f;
    transform: rotate(-45deg);
}

.star {
    position: absolute;
    background: #FFD700;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.eid-message {
    color: #FFFFFF;
    font-size: 1.2em;
    line-height: 1.6;
    margin: 20px 0;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    border: none;
    background: rgba(255, 215, 0, 0.2);
    color: #FFD700;
    font-size: 24px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
}

.close-button:hover {
    background: rgba(255, 215, 0, 0.3);
    transform: rotate(90deg);
}

.countdown {
    position: absolute;
    top: 20px;
    left: 20px;
    color: #FFD700;
    font-size: 1.2em;
    background: rgba(255, 215, 0, 0.1);
    padding: 10px 20px;
    border-radius: 20px;
}

@media (max-width: 768px) {
    .eid-title { font-size: 2.5em; }
    .eid-arabic { font-size: 2em; }
    .crescent-container { width: 150px; height: 150px; }
    .crescent { width: 100px; height: 100px; }
}
`;

class EidCelebration {
  constructor() {
    this.container = null;
    this.timeLeft = 30;
    this.styleSheet = document.createElement("style");
    this.styleSheet.textContent = eidStyles;
    document.head.appendChild(this.styleSheet);
  }

  createStars() {
    const starsContainer = document.createElement("div");
    starsContainer.style.position = "absolute";
    starsContainer.style.width = "100%";
    starsContainer.style.height = "100%";

    for (let i = 0; i < 50; i++) {
      const star = document.createElement("div");
      star.className = "star";
      const size = Math.random() * 15 + 5;
      star.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: starTwinkle ${Math.random() * 2 + 1}s infinite;
            `;
      starsContainer.appendChild(star);
    }

    return starsContainer;
  }

  updateCountdown() {
    const countdown = this.container.querySelector(".countdown");
    countdown.textContent = `Celebrating for: ${this.timeLeft}s`;
    if (this.timeLeft > 0) {
      this.timeLeft--;
      setTimeout(() => this.updateCountdown(), 1000);
    } else {
      this.close();
    }
  }

  createContainer() {
    this.container = document.createElement("div");
    this.container.className = "eid-container";

    const content = document.createElement("div");
    content.className = "eid-content";

    const title = document.createElement("h1");
    title.className = "eid-title";
    title.textContent = "Eid Mubarak";

    const arabic = document.createElement("div");
    arabic.className = "eid-arabic";
    arabic.textContent = "عيد الفطر مبارك";

    const crescentContainer = document.createElement("div");
    crescentContainer.className = "crescent-container";
    const crescent = document.createElement("div");
    crescent.className = "crescent";
    crescentContainer.appendChild(crescent);

    const message = document.createElement("p");
    message.className = "eid-message";
    message.innerHTML =
      "May this special day bring peace, happiness, and prosperity to everyone.<br>تقبل الله منا ومنكم";

    const countdown = document.createElement("div");
    countdown.className = "countdown";

    const closeBtn = document.createElement("button");
    closeBtn.className = "close-button";
    closeBtn.innerHTML = "×";
    closeBtn.onclick = () => this.close();

    content.append(title, arabic, crescentContainer, message);
    this.container.append(this.createStars(), content, closeBtn, countdown);
    document.body.appendChild(this.container);

    this.updateCountdown();
  }

  start() {
    this.createContainer();
    setTimeout(() => this.close(), 30000);
  }

  close() {
    if (this.container) {
      this.container.style.animation = "fadeOut 0.5s";
      setTimeout(() => {
        this.container.remove();
        this.styleSheet.remove();
      }, 500);
    }
  }
}

function isEidDay() {
  const now = new Date();
  const eidDate = new Date("2025-03-31T00:00:00");

  return now.toDateString() === eidDate.toDateString();

  // For testing: Uncomment the next line to test the effect immediately
  // return true;
}

// Initialize celebration
window.addEventListener("load", () => {
  if (isEidDay()) {
    new EidCelebration().start();
  }
});

//  EID end

//  Bihu start
// First, ensure you have these images in your project directory
// /images/bihu/dhul.png
// /images/bihu/kopou.png
// /images/bihu/jaapi.png
// /images/bihu/gamosa.png
// /images/bihu/background.png
// /images/bihu/pattern.png
const bihuStyles = `
@keyframes shimmerEffect {
    0% { background-position: -1000px 0; }
    100% { background-position: 1000px 0; }
}

@keyframes floatAnimation {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-15px) rotate(2deg); }
    75% { transform: translateY(15px) rotate(-2deg); }
}

@keyframes elementFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
}

@keyframes patternSlide {
    0% { background-position: 0 0; }
    100% { background-position: 50px 50px; }
}

@keyframes glowPulse {
    0%, 100% { filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.5)); }
    50% { filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.8)); }
}

.bihu-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #1a472a 0%, #2d5a27 100%);
    background-image: url('/images/bihu/background.png');
    background-blend-mode: overlay;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
    overflow: hidden;
}

.pattern-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/bihu/pattern.png');
    opacity: 0.1;
    animation: patternSlide 20s linear infinite;
}

.bihu-content {
    position: relative;
    text-align: center;
    padding: 3rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    box-shadow: 
        0 0 50px rgba(255, 223, 0, 0.2),
        inset 0 0 30px rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    max-width: 1000px;
    width: 90%;
    z-index: 1;
    overflow: hidden;
}

.bihu-title {
    font-size: 4em;
    margin-bottom: 20px;
    font-family: 'Arial', sans-serif;
    background: linear-gradient(45deg, #FFD700, #FFA500, #FFD700);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmerEffect 3s linear infinite;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.bihu-subtitle {
    font-size: 2.5em;
    color: #FFFFFF;
    margin: 15px 0;
    font-family: 'Noto Sans Bengali', sans-serif;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.cultural-elements {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    margin: 40px 0;
    padding: 20px;
}

.cultural-element {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: elementFloat 6s infinite ease-in-out;
}

.cultural-element img {
    width: 150px;
    height: 150px;
    object-fit: contain;
    animation: glowPulse 3s infinite;
    transition: transform 0.3s ease;
}

.cultural-element:hover img {
    transform: scale(1.1);
}

.element-label {
    margin-top: 15px;
    color: #FFD700;
    font-size: 1.2em;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.bihu-message {
    color: #FFFFFF;
    font-size: 1.3em;
    line-height: 1.8;
    margin: 30px 0;
    padding: 20px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    border: none;
    background: rgba(255, 255, 255, 0.15);
    color: white;
    font-size: 24px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
}

.close-button:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: rotate(90deg);
}

.countdown {
    position: absolute;
    top: 20px;
    left: 20px;
    color: white;
   
    font-size: 1.2em;
    background: rgba(255, 255, 255, 0.15);
    padding: 12px 25px;
    border-radius: 25px;
    backdrop-filter: blur(5px);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 992px) {
    .cultural-elements {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 576px) {
    .bihu-title { font-size: 2.5em; }
    .bihu-subtitle { font-size: 1.8em; }
    .cultural-elements { grid-template-columns: 1fr; }
    .cultural-element img { width: 120px; height: 120px; }
}
`;

class BihuCelebration {
  constructor() {
    this.container = null;
    this.timeLeft = 30;
    this.imagesLoaded = 0;
    this.totalImages = 4;
    this.culturalElements = [
      { name: "Dhul", assameseName: "ঢোল", image: "/images/bihu/dhul.png" },
      {
        name: "Kopou Phool",
        assameseName: "কপৌ ফুল",
        image: "/images/bihu/kopou.png",
      },
      { name: "Jaapi", assameseName: "জাপি", image: "/images/bihu/jaapi.png" },
      {
        name: "Gamosa",
        assameseName: "গামোচা",
        image: "/images/bihu/gamosa.png",
      },
    ];
    this.setupStyles();
  }

  setupStyles() {
    this.styleSheet = document.createElement("style");
    this.styleSheet.textContent = bihuStyles;
    document.head.appendChild(this.styleSheet);
  }

  preloadImages() {
    return new Promise((resolve) => {
      this.culturalElements.forEach((element) => {
        const img = new Image();
        img.onload = () => {
          this.imagesLoaded++;
          if (this.imagesLoaded === this.totalImages) {
            resolve();
          }
        };
        img.src = element.image;
      });
    });
  }

  updateCountdown() {
    const countdown = this.container.querySelector(".countdown");
    countdown.textContent = `Celebrating Bihu: ${this.timeLeft}s`;
    if (this.timeLeft > 0) {
      this.timeLeft--;
      setTimeout(() => this.updateCountdown(), 1000);
    } else {
      this.close();
    }
  }

  createCulturalElements() {
    const container = document.createElement("div");
    container.className = "cultural-elements";

    this.culturalElements.forEach((element, index) => {
      const div = document.createElement("div");
      div.className = "cultural-element";
      div.style.animationDelay = `${index * 0.2}s`;

      const img = document.createElement("img");
      img.src = element.image;
      img.alt = element.name;
      img.loading = "eager";

      const label = document.createElement("div");
      label.className = "element-label";
      label.innerHTML = `${element.name}<br>${element.assameseName}`;

      div.append(img, label);
      container.appendChild(div);
    });

    return container;
  }

  async createContainer() {
    await this.preloadImages();

    this.container = document.createElement("div");
    this.container.className = "bihu-container";

    const patternOverlay = document.createElement("div");
    patternOverlay.className = "pattern-overlay";

    const content = document.createElement("div");
    content.className = "bihu-content";

    const title = document.createElement("h1");
    title.className = "bihu-title";
    title.textContent = "Rangali Bihu 2025";

    const subtitle = document.createElement("div");
    subtitle.className = "bihu-subtitle";
    subtitle.textContent = "বহাগ বিহু ২০২৫";

    const culturalElements = this.createCulturalElements();

    const message = document.createElement("div");
    message.className = "bihu-message";
    message.innerHTML = `
            Celebrating the harvest festival of Assam!<br>
            আপোনালোক সকলোকে বহাগ বিহুৰ আন্তৰিক ওলগ আৰু শুভেচ্ছা জনালোঁ<br>
            May this Bihu bring joy, prosperity, and happiness to all!
        `;

    const countdown = document.createElement("div");
    countdown.className = "countdown";

    const closeBtn = document.createElement("button");
    closeBtn.className = "close-button";
    closeBtn.innerHTML = "×";
    closeBtn.onclick = () => this.close();

    content.append(title, subtitle, culturalElements, message);
    this.container.append(patternOverlay, content, closeBtn, countdown);
    document.body.appendChild(this.container);

    this.updateCountdown();
  }

  async start() {
    await this.createContainer();
    setTimeout(() => this.close(), 30000);
  }

  close() {
    if (this.container) {
      this.container.style.animation = "fadeOut 0.5s ease-out";
      setTimeout(() => {
        this.container.remove();
        this.styleSheet.remove();
      }, 500);
    }
  }
}

function isBihuDay() {
  const now = new Date();
  const startDate = new Date("2025-04-14T00:00:00");
  const endDate = new Date("2025-04-16T23:59:59");
  return now >= startDate && now <= endDate;

  // For testing: Uncomment the next line to test the effect immediately
  // return true;
}

// Initialize celebration
window.addEventListener("load", () => {
  if (isBihuDay()) {
    new BihuCelebration().start();
  }
});

//  Bihu end

// Disable text selection
document.addEventListener("selectstart", function (e) {
  e.preventDefault();
  return false;
});

// Disable copy
document.addEventListener("copy", function (e) {
  e.preventDefault();
  return false;
});

// Disable right-click context menu
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  return false;
});

// Disable keyboard shortcuts for copy (Ctrl+C)
document.addEventListener("keydown", function (e) {
  if (
    e.ctrlKey &&
    (e.keyCode === 67 || // C key
      e.keyCode === 86 || // V key
      e.keyCode === 85 || // U key
      e.keyCode === 117)
  ) {
    // F6 key
    e.preventDefault();
    return false;
  }
});
// disabled xopy text end

// Initialize Gallery Slidera
document.addEventListener("DOMContentLoaded", () => {
  new GallerySlider();
  new ThemeManager();
});

// header start
const mobileMenu = document.getElementById("mobileMenu");
const mainNav = document.getElementById("mainNav");

mobileMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  mobileMenu.classList.toggle("active");
  mainNav.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mainNav.contains(e.target) && !mobileMenu.contains(e.target)) {
    mainNav.classList.remove("active");
    mobileMenu.classList.remove("active");
  }
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

// Optional
window.addEventListener("resize", () => {
  if (window.innerWidth > 768 && mainNav.classList.contains("active")) {
    mainNav.classList.remove("active");
    mobileMenu.classList.remove("active");
  }
});
//header end

// Cookie Consent System
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function showCookieConsent() {
  if (!getCookie("cookieConsent")) {
    document.getElementById("cookieConsent").classList.add("show");
  }
}

function toggleCookieSettings() {
  document.getElementById("cookieSettings").classList.toggle("show");
}

function acceptAllCookies() {
  setCookie("cookieConsent", "all", 365);
  setCookie("analyticsCookies", "true", 365);
  setCookie("functionalCookies", "true", 365);
  document.getElementById("cookieConsent").classList.remove("show");
}

function acceptNecessaryCookies() {
  setCookie("cookieConsent", "necessary", 365);
  setCookie("analyticsCookies", "false", 365);
  setCookie("functionalCookies", "false", 365);
  document.getElementById("cookieConsent").classList.remove("show");
}

function saveCookiePreferences() {
  const analytics = document.getElementById("analyticsCookies").checked;
  const functional = document.getElementById("functionalCookies").checked;

  setCookie("cookieConsent", "custom", 365);
  setCookie("analyticsCookies", analytics, 365);
  setCookie("functionalCookies", functional, 365);

  document.getElementById("cookieSettings").classList.remove("show");
  document.getElementById("cookieConsent").classList.remove("show");
}

// Load saved preferences
function loadCookiePreferences() {
  const analytics = getCookie("analyticsCookies") === "true";
  const functional = getCookie("functionalCookies") === "true";

  document.getElementById("analyticsCookies").checked = analytics;
  document.getElementById("functionalCookies").checked = functional;
}

// Initialize
window.addEventListener("load", () => {
  showCookieConsent();
  loadCookiePreferences();
});

//DOB
// Birthday data
const birthdayData = [
  { name: "Iswar Sigma", dob: "2007-02-24" },
  { name: "Haqikul", dob: "2007-02-03" },
  { name: "Nirban", dob: "2006-03-02" },
  { name: "Sourabh", dob: "2005-12-22" },
  { name: "Moinul", dob: "2005-09-25" },
  { name: "Mrinmoy", dob: "2005-09-03" },
  { name: "Sanjima", dob: "2005-07-27" },
  { name: "Gautam", dob: "2005-05-29" },
  { name: "Syed Bhai", dob: "2004-05-25" },
  { name: "Masuma", dob: "2005-04-24" },
  { name: "Sobikul", dob: "2005-04-23" },
  { name: "Moon Bhai", dob: "2005-04-21" },
  { name: "Anup", dob: "2005-03-18" },
  { name: "Muskan", dob: "2005-03-30" },
  { name: "Nur Alom", dob: "2004-12-22" },
  { name: "Manjit Narzary", dob: "2004-11-04" },
  { name: "Ripon", dob: "2004-10-15" },
  { name: "Mahek", dob: "2004-10-03" },
  { name: "Abhijit Bhai", dob: "2004-08-01" },
  { name: "Padumani", dob: "2004-06-01" },
  { name: "Kaustav", dob: "2004-04-24" },
  { name: "Dipjyoti Bhai", dob: "2004-04-02" },
  { name: "Karan", dob: "2004-03-29" },
  { name: "Laxman", dob: "2004-03-21" },
  { name: "Manob", dob: "2004-02-09" },
  { name: "Lipika", dob: "2003-03-22" },
  { name: "Dibyajyoti", dob: "2003-01-28" },
  { name: "Helena", dob: "2002-07-11" },
];

const birthdayAnimation = {
  // Store intervals globally to clear them properly
  intervals: {},

  init() {
    this.addStyles();
    const birthdayPerson = this.checkBirthday();
    if (birthdayPerson) {
      this.showCelebration(birthdayPerson);
    }
  },

  styles: `
  /* Import Google Fonts */
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Dancing+Script:wght@700&family=Pacifico&family=Quicksand:wght@500;700&display=swap');

        /* Font Variables */
        :root {
            --title-font: 'Pacifico', cursive;
            --name-font: 'Dancing Script', cursive;
            --message-font: 'Quicksand', sans-serif;
            --base-font: 'Poppins', sans-serif;
        }

      .birthday-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(5px);
          z-index: 999999;
          opacity: 1;
      }

      .birthday-popup {
          font-family: var(--base-font);
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: linear-gradient(145deg, #ffffff, #f3f3f3);
          padding: 3rem;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          z-index: 1000000;
          text-align: center;
          max-width: 90vw;
          width: 500px;
          animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          margin-top: 50px;
      }

      .birthday-content {
          position: relative;
          z-index: 2;
      }

      .birthday-title {
            font-family: var(--title-font);
            color: #FF4081;
            font-size: 3.2rem;
            font-weight: 700;
            margin: 0;
            text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
            background: linear-gradient(45deg, #FF4081, #FFA000);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: titleFloat 3s ease-in-out infinite;
            letter-spacing: 1px;
        }

      .birthday-name {
            font-family: var(--name-font);
            font-size: 3rem;
            color: #333;
            margin: 1.2rem 0;
            font-weight: 700;
            text-transform: capitalize;
            letter-spacing: 1px;
            animation: nameGlow 2s ease-in-out infinite;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }

      .birthday-message {
            font-family: var(--message-font);
            font-size: 1.5rem;
            color: #555;
            line-height: 1.7;
            margin: 1.5rem 0;
            font-weight: 500;
            letter-spacing: 0.5px;
        }

      .birthday-emoji {
          font-size: 4rem;
          margin: 1rem 0;
          display: inline-block;
          animation: emojiJump 1s infinite;
          text-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }

      .close-button {
          font-family: var(--base-font);
          position: absolute;
          top: 15px;
          right: 15px;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          border: none;
          background: #FF4081;
          color: white;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          z-index: 1000001;
      }

      .close-button:hover {
          background: #f50057;
          transform: scale(1.1);
      }

      .confetti {
          position: fixed;
          z-index: 999999;
          pointer-events: none;
      }

      .sparkle {
          position: fixed;
          pointer-events: none;
          z-index: 999998;
          animation: sparkleAnimation 1s linear forwards;
      }

      @keyframes popIn {
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
      }

      @keyframes emojiJump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
      }

      @keyframes titleFloat {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
      }

      @keyframes nameGlow {
          0%, 100% { text-shadow: 0 0 10px rgba(255, 64, 129, 0.5); }
          50% { text-shadow: 0 0 20px rgba(255, 64, 129, 0.8); }
      }

      @keyframes sparkleAnimation {
          0% { transform: scale(0) rotate(0deg); opacity: 1; }
          100% { transform: scale(1) rotate(180deg); opacity: 0; }
      }

      @media (max-width: 768px) {
          .birthday-popup {
              width: 85vw;
              padding: 2rem;
              margin: 0;
          }
          .birthday-title { font-size: 2.8rem; }
          .birthday-name { font-size: 2.5rem; }
          .birthday-message { font-size: 1.3rem; }
          .birthday-emoji { font-size: 3rem; }
      }

      @media (max-width: 480px) {
          .birthday-popup {
              padding: 1.5rem;
          }
          .birthday-title { font-size: 2rem; }
          .birthday-name { font-size: 1.6rem; }
          .birthday-message { font-size: 1rem; }
      }
  `,

  addStyles() {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = this.styles;
    document.head.appendChild(styleSheet);

    // Add fall animation
    const fallAnimation = document.createElement("style");
    fallAnimation.textContent = `
          @keyframes fall {
              0% {
                  transform: translateY(0) rotate(0deg);
                  opacity: 1;
              }
              100% {
                  transform: translateY(100vh) rotate(720deg);
                  opacity: 0;
              }
          }
      `;
    document.head.appendChild(fallAnimation);
  },

  checkBirthday() {
    const today = new Date();
    return birthdayData.find((person) => {
      const dob = new Date(person.dob);
      return (
        dob.getDate() === today.getDate() && dob.getMonth() === today.getMonth()
      );
    });
  },

  createConfetti() {
    const colors = ["#FF4081", "#FFC107", "#2196F3", "#4CAF50", "#9C27B0"];
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 10 + 5;
    const startPos = Math.random() * window.innerWidth;

    Object.assign(confetti.style, {
      left: startPos + "px",
      top: "-20px",
      width: size + "px",
      height: size + "px",
      background: color,
      borderRadius: "50%",
      position: "fixed",
      transform: `rotate(${Math.random() * 360}deg)`,
      animation: `fall ${Math.random() * 3 + 2}s linear forwards`,
    });

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 5000);
  },

  createSparkle(x, y) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.cssText = `
          left: ${x}px;
          top: ${y}px;
          width: 4px;
          height: 4px;
          background: gold;
          border-radius: 50%;
      `;
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  },

  cleanup() {
    // Clear all intervals
    Object.values(this.intervals).forEach((interval) =>
      clearInterval(interval)
    );
    this.intervals = {};

    // Remove all elements
    const elements = document.querySelectorAll(
      ".birthday-overlay, .birthday-popup, .confetti, .sparkle"
    );
    elements.forEach((element) => element.remove());
  },

  showCelebration(person) {
    // Create container and add content
    const container = document.createElement("div");
    container.innerHTML = `
          <div class="birthday-overlay"></div>
          <div class="birthday-popup">
              <button class="close-button" id="birthdayCloseButton">×</button>
              <div class="birthday-content">
                  <div class="birthday-emoji">🎉</div>
                  <h1 class="birthday-title">Happy Birthday!</h1>
                  <div class="birthday-name">${person.name}</div>
                  <p class="birthday-message">
                      Wishing you an amazing day filled with joy, 
                      laughter, and unforgettable moments! 
                      May all your dreams come true! 🌟
                  </p>
                  <div class="birthday-emoji">🎂</div>
                  <div class="birthday-emoji">🎈</div>
              </div>
          </div>
      `;
    document.body.appendChild(container);

    // Start effects
    this.intervals.confetti = setInterval(() => {
      for (let i = 0; i < 3; i++) {
        this.createConfetti();
      }
    }, 200);

    this.intervals.sparkle = setInterval(() => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      this.createSparkle(x, y);
    }, 300);

    // Add close button functionality
    const closeButton = document.getElementById("birthdayCloseButton");
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        this.cleanup();
      });
    }

    // Auto cleanup after 30 seconds
    setTimeout(() => {
      this.cleanup();
    }, 40000);
  },
};

// Start immediately when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => birthdayAnimation.init());
} else {
  birthdayAnimation.init();
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
