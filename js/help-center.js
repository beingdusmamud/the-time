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

// Category Data
const categories = [
  { id: "general", icon: "fa-circle-info", title: "General", count: 5 },
  {
    id: "schedule",
    icon: "fa-calendar-days",
    title: "Schedule",
    count: 8,
  },
  { id: "features", icon: "fa-star", title: "Features", count: 6 },
  { id: "technical", icon: "fa-gear", title: "Technical", count: 4 },
];

// FAQ Data
const faqs = [
  {
    category: "general",
    icon: "fa-circle-info",
    question: "What is the Academic Calendar System?",
    answer:
      "The Academic Calendar System is a comprehensive digital platform designed to streamline educational scheduling. It combines smart algorithms with user-friendly interfaces to provide efficient time management solutions for academic institutions.",
  },
  {
    category: "general",
    icon: "fa-circle-info",
    question: "What is the Academic Calendar System?",
    answer:
      "The Academic Calendar System is a comprehensive digital platform designed to streamline educational scheduling. It combines smart algorithms with user-friendly interfaces to provide efficient time management solutions for academic institutions. The system automatically handles class schedules, holidays, events, and academic term planning.",
  },
  {
    category: "general",
    icon: "fa-circle-info",
    question: "What happens during system maintenance?",
    answer:
      "During scheduled system maintenance, which typically occurs during off-peak hours (2 AM - 4 AM), the system remains accessible in read-only mode. Real-time updates and modifications are temporarily paused, but all existing schedules and information remain visible. Users receive maintenance notifications 48 hours in advance through the dashboard and email alerts.",
  },
  {
    category: "general",
    icon: "fa-circle-info",
    question: "How often is the academic calendar updated?",
    answer:
      "The academic calendar is updated in real-time with immediate synchronization across all devices. Major schedule changes are processed instantly, while routine updates (like holiday declarations or event schedules) are synchronized at midnight. The system maintains a comprehensive audit trail of all updates for administrative reference.",
  },
  {
    category: "general",
    icon: "fa-circle-info",
    question: "Can I access the calendar from multiple devices?",
    answer:
      "Yes, the Academic Calendar System supports seamless multi-device access through responsive web interfaces and dedicated mobile applications. Your schedule and preferences automatically sync across all devices through secure cloud storage. The system supports iOS, Android, and all major web browsers with real-time synchronization.",
  },
  {
    category: "general",
    icon: "fa-circle-info",
    question: "What happens if there's an unexpected holiday declaration?",
    answer:
      "In case of unexpected holiday declarations, the system automatically updates the calendar and sends immediate notifications to all users through multiple channels (app notifications, email, and SMS). The system reschedules affected classes and events according to predefined institutional policies while maintaining academic hour requirements.",
  },
  {
    category: "general",
    icon: "fa-circle-info",
    question: "How does the working day calculation work?",
    answer:
      "Working days are calculated using an advanced algorithm that considers multiple factors: official academic calendar, national and regional holidays, institutional events, and semester requirements. The system automatically excludes weekends, public holidays, and institution-specific non-working days while ensuring the required number of academic hours is met.",
  },
  {
    category: "general",
    icon: "fa-circle-info",
    question: "What happens at the end of an academic term?",
    answer:
      "At the end of an academic term, the system automatically archives current schedules, generates comprehensive term reports, and prepares the calendar for the next term. Users receive notifications about important end-term dates, and administrators get detailed analytics about term completion, attendance patterns, and schedule efficiency.",
  },
  {
    category: "general",
    icon: "fa-circle-info",
    question: "How are different time zones handled?",
    answer:
      "The Academic Calendar System automatically adjusts schedules based on user time zones. For institutions with multiple campuses across different time zones, the system maintains a master schedule while displaying locally adjusted times for each user. Calendar entries include time zone indicators to prevent confusion in scheduling.",
  },
  {
    category: "general",
    icon: "fa-circle-info",
    question: "What backup systems are in place?",
    answer:
      "The system employs a robust three-tier backup strategy: real-time cloud backups, daily incremental backups, and weekly full system backups. All data is encrypted and stored in geographically distributed servers. Users can also export their schedules and calendar data in various formats (PDF, iCal, CSV) for personal backup.",
  },
  {
    category: "general",
    icon: "fa-circle-info",
    question: "How does the system handle special events and functions?",
    answer:
      "Special events and functions are integrated into the calendar with dynamic scheduling capabilities. The system automatically adjusts regular schedules to accommodate special events while ensuring minimal disruption to academic activities. Event conflicts are automatically detected and resolved based on predefined priority rules and institutional policies.",
  },
  {
    category: "schedule",
    icon: "fa-calendar-days",
    question: "How are working days calculated?",
    answer:
      "Working days are calculated using our proprietary algorithm that considers official academic calendars, national holidays, and institution-specific events. The system automatically adjusts for different time zones and regional variations.",
  },
  {
    category: "schedule",
    icon: "fa-calendar-days",
    question: "How are daily class schedules organized?",
    answer:
      "Daily class schedules are organized using an intelligent time-block system. Each day is divided into standardized periods (typically 45-60 minutes) with designated break times. The system automatically accounts for subject priority, teacher availability, and classroom resources while maintaining optimal learning intervals and avoiding subject clashes.",
  },
  {
    category: "schedule",
    icon: "fa-calendar-days",
    question: "What happens when a teacher is absent?",
    answer:
      "When a teacher's absence is reported, the system automatically initiates the substitution protocol. It identifies qualified substitute teachers based on expertise and availability, sends immediate notifications to all affected parties, and updates the schedule in real-time. The system also maintains a record of substitutions for administrative purposes.",
  },
  {
    category: "schedule",
    icon: "fa-calendar-days",
    question: "How are practical/laboratory sessions scheduled?",
    answer:
      "Practical and laboratory sessions are scheduled considering multiple factors: lab availability, equipment requirements, batch sizes, and instructor availability. The system ensures that theory classes are appropriately spaced with practical sessions for optimal learning. Multiple batches are automatically rotated to maximize resource utilization.",
  },
  {
    category: "schedule",
    icon: "fa-calendar-days",
    question: "How does the schedule handle exam periods?",
    answer:
      "During exam periods, the system automatically switches to exam mode, suspending regular classes. It generates optimized exam schedules considering factors like subject complexity, student numbers, and room availability. The system also ensures adequate gaps between exams and maintains conflict-free scheduling for all students.",
  },
  {
    category: "schedule",
    icon: "fa-calendar-days",
    question: "Can the schedule accommodate special time requirements?",
    answer:
      "Yes, the system supports flexible scheduling for special time requirements. Whether it's early morning sports practices, afternoon clubs, or evening special classes, the scheduler incorporates these requirements while maintaining balance with regular academic activities. Custom time slots can be defined with specific recurrence patterns.",
  },
  {
    category: "schedule",
    icon: "fa-calendar-days",
    question: "How are schedule conflicts resolved?",
    answer:
      "Schedule conflicts are resolved through a multi-tier priority system. The algorithm considers factors like subject importance, teacher preferences, room availability, and student group needs. When conflicts arise, the system suggests multiple resolution options and automatically implements the most optimal solution while notifying all affected parties.",
  },
  {
    category: "schedule",
    icon: "fa-calendar-days",
    question: "What is the process for scheduling make-up classes?",
    answer:
      "Make-up classes are scheduled using available time slots that don't conflict with existing schedules. The system identifies optimal slots based on teacher and student availability, room availability, and academic load distribution. Automated notifications are sent to all participants, and attendance tracking is maintained separately.",
  },
  {
    category: "schedule",
    icon: "fa-calendar-days",
    question: "How does the system handle lunch breaks and short breaks?",
    answer:
      "Breaks are strategically scheduled to ensure optimal learning periods. Lunch breaks are typically 30-60 minutes, while short breaks between classes are 5-15 minutes. The system considers factors like cafeteria capacity, student movement time between classrooms, and energy levels throughout the day when scheduling breaks.",
  },
  {
    category: "schedule",
    icon: "fa-calendar-days",
    question: "Can the schedule be exported to other calendar applications?",
    answer:
      "Yes, the schedule can be exported in multiple formats including iCal, Google Calendar, Outlook, and PDF. The system provides both complete calendar exports and filtered exports (by department, class, or individual). Real-time synchronization is available for supported platforms through API integration.",
  },
  {
    category: "schedule",
    icon: "fa-calendar-days",
    question: "How are recurring events handled in the schedule?",
    answer:
      "Recurring events are managed through a sophisticated pattern recognition system. Users can set up daily, weekly, monthly, or custom recurrence patterns. The system automatically handles exceptions like holidays and special events, adjusting recurring schedules accordingly while maintaining consistency.",
  },
  {
    category: "schedule",
    icon: "fa-calendar-days",
    question: "What happens when the schedule needs last-minute changes?",
    answer:
      "Last-minute changes are processed through an urgent update protocol. The system immediately notifies all affected parties through multiple channels (push notifications, SMS, email). Changes are highlighted in the schedule with clear visual indicators, and the system maintains a log of all emergency modifications.",
  },
  {
    category: "schedule",
    icon: "fa-calendar-days",
    question: "How does the schedule adapt to different semester patterns?",
    answer:
      "The system supports various semester patterns including traditional semesters, trimesters, and quarter systems. Each academic period can be configured with custom start/end dates, vacation periods, and examination schedules. The system automatically adjusts teaching hours and course distribution accordingly.",
  },
  {
    category: "schedule",
    icon: "fa-calendar-days",
    question: "Can the schedule accommodate different course lengths?",
    answer:
      "Yes, the system handles courses of varying durations, from single-session workshops to full-semester courses. It can schedule modular courses, intensive programs, and regular semester-length courses simultaneously while maintaining appropriate distribution of teaching hours and academic credits.",
  },
  {
    category: "schedule",
    icon: "fa-calendar-days",
    question: "How are room assignments managed in the schedule?",
    answer:
      "Room assignments are managed through an intelligent resource allocation system. The algorithm considers factors like class size, equipment requirements, proximity to departments, and accessibility needs. The system prevents double-booking and optimizes room utilization across all departments.",
  },
  {
    category: "schedule",
    icon: "fa-calendar-days",
    question: "What options are available for viewing the schedule?",
    answer:
      "The schedule can be viewed in multiple formats including daily, weekly, monthly, and custom date ranges. Users can filter views by department, course, teacher, or room. The system provides both list and calendar views, with options for detailed or summary views, and supports custom view configurations for different user roles.",
  },

  {
    category: "features",
    icon: "fa-star",
    question: "What are the premium features available?",
    answer:
      "Premium features include advanced analytics, custom report generation, API access, priority support, and integration capabilities with other educational management systems.",
  },
  {
    category: "features",
    icon: "fa-star",
    question: "What analytical tools are available in the dashboard?",
    answer:
      "The dashboard features comprehensive analytics including attendance patterns, schedule efficiency metrics, resource utilization graphs, and academic progress indicators. Users can access real-time statistics, generate custom reports, and visualize data through interactive charts. The analytics engine supports drill-down capabilities and can export data in multiple formats (Excel, PDF, CSV).",
  },
  {
    category: "features",
    icon: "fa-star",
    question: "How does the notification system work?",
    answer:
      "The notification system operates on a multi-channel platform supporting push notifications, email alerts, SMS, and in-app messages. Users can customize notification preferences for different event types (schedule changes, deadlines, announcements). The system uses AI to prioritize notifications and prevents notification fatigue through smart bundling.",
  },
  {
    category: "features",
    icon: "fa-star",
    question:
      "What customization options are available for different user roles?",
    answer:
      "The system offers role-based customization for administrators, teachers, students, and staff. Each role has configurable access levels, custom dashboard layouts, and personalized features. Users can customize their view preferences, notification settings, and quick access tools. Administrators can create and modify roles with granular permission controls.",
  },
  {
    category: "features",
    icon: "fa-star",
    question: "How does the mobile app complement the web version?",
    answer:
      "The mobile app provides seamless integration with the web platform, offering features like offline access, quick schedule checks, real-time notifications, and location-based services. It includes unique mobile features such as QR code scanning for room information, augmented reality campus navigation, and biometric authentication for secure access.",
  },
  {
    category: "features",
    icon: "fa-star",
    question: "What reporting capabilities does the system offer?",
    answer:
      "The reporting system includes pre-built templates for common reports (attendance, schedule distribution, resource utilization) and a custom report builder. Users can generate dynamic reports with interactive elements, schedule automated report generation, and share reports with stakeholders. Advanced features include data visualization tools and predictive analytics.",
  },
  {
    category: "features",
    icon: "fa-star",
    question: "How does the resource booking feature work?",
    answer:
      "The resource booking system allows users to reserve rooms, equipment, and facilities through an intuitive interface. It features real-time availability checking, conflict prevention, recurring booking options, and automated approval workflows. The system includes a resource calendar, usage analytics, and maintenance scheduling capabilities.",
  },
  {
    category: "features",
    icon: "fa-star",
    question: "What integration options are available with other systems?",
    answer:
      "The system offers extensive integration capabilities through RESTful APIs, webhooks, and direct connectors. It supports integration with Learning Management Systems (LMS), Student Information Systems (SIS), HR systems, and popular calendar platforms. Custom integrations can be developed using the API documentation and developer tools.",
  },
  {
    category: "features",
    icon: "fa-star",
    question: "How does the automatic scheduling feature work?",
    answer:
      "The automatic scheduling feature uses advanced algorithms to create optimal schedules based on multiple parameters including teacher availability, room capacity, subject requirements, and institutional policies. It can generate conflict-free schedules for entire departments, handle constraints, and suggest alternatives when conflicts arise.",
  },
  {
    category: "features",
    icon: "fa-star",
    question: "What accessibility features are included?",
    answer:
      "The system includes comprehensive accessibility features following WCAG 2.1 guidelines. Features include screen reader compatibility, keyboard navigation, high contrast modes, text-to-speech functionality, and customizable font sizes. The mobile app includes additional accessibility features like voice commands and haptic feedback.",
  },
  {
    category: "features",
    icon: "fa-star",
    question: "How does the event management system work?",
    answer:
      "The event management system handles both academic and non-academic events with features like event registration, attendance tracking, and feedback collection. It includes tools for managing event resources, sending invitations, tracking RSVPs, and generating event reports. The system can handle multiple concurrent events with different access levels.",
  },
  {
    category: "features",
    icon: "fa-star",
    question: "What collaboration tools are available?",
    answer:
      "The system includes built-in collaboration tools such as shared calendars, discussion boards, and document sharing. Users can create working groups, schedule meetings, share resources, and coordinate activities. Real-time collaboration features include instant messaging, comment threads, and collaborative schedule planning.",
  },
  {
    category: "features",
    icon: "fa-star",
    question: "How does the system handle data backup and recovery?",
    answer:
      "The system implements automated backup procedures with real-time data replication, incremental backups, and disaster recovery protocols. Users can access version history, restore previous versions, and export personal data. The system maintains encrypted backups across multiple geographic locations with instant failover capabilities.",
  },
  {
    category: "features",
    icon: "fa-star",
    question: "What customization options are available for the calendar view?",
    answer:
      "Users can customize their calendar view with options for different layouts (day, week, month, agenda), color coding, filtered views, and custom tags. The system supports multiple time zone displays, different calendar formats, and personalized working hours. Custom views can be saved and shared across user groups.",
  },
  {
    category: "features",
    icon: "fa-star",
    question: "How does the attendance tracking feature work?",
    answer:
      "The attendance tracking system supports multiple methods including QR codes, biometric verification, and manual entry. It provides real-time attendance reports, automated notifications for absences, and integration with the grading system. The feature includes analytics for attendance patterns and automated compliance reporting.",
  },
  {
    category: "features",
    icon: "fa-star",
    question: "What security features are implemented in the system?",
    answer:
      "The system implements comprehensive security measures including two-factor authentication, role-based access control, encrypted data transmission, and audit logging. Additional features include IP-based access restrictions, session management, automated security updates, and compliance with data protection regulations like GDPR and FERPA.",
  },
  {
    category: "technical",
    icon: "fa-gear",
    question: "What are the system requirements for optimal performance?",
    answer:
      "The system requires modern browsers (Chrome 70+, Firefox 65+, Safari 12+, Edge 80+) with JavaScript enabled. For optimal performance, recommended specifications include 4GB RAM, stable internet connection (minimum 10Mbps), and 1280x800 minimum screen resolution. Mobile apps require iOS 13+ or Android 8.0+. Server deployments recommend quad-core processors, 16GB RAM, and SSD storage for database operations.",
  },
  {
    category: "technical",
    icon: "fa-gear",
    question: "How does the API integration system work?",
    answer:
      "The system provides RESTful APIs with OAuth 2.0 authentication. APIs support JSON and XML formats, with rate limiting of 1000 requests per hour for standard accounts. Documentation includes Swagger/OpenAPI specifications, sample code in multiple languages (Python, JavaScript, PHP, Java), and webhooks for real-time data synchronization. Custom API endpoints can be created for specific integration needs.",
  },
  {
    category: "technical",
    icon: "fa-gear",
    question: "What database architecture is used for data storage?",
    answer:
      "The system employs a hybrid database architecture with PostgreSQL for relational data and MongoDB for document storage. Real-time data is cached using Redis, while Elasticsearch handles search functionality. The architecture includes database sharding for scalability, master-slave replication for reliability, and automated backup systems with point-in-time recovery capabilities.",
  },
  {
    category: "technical",
    icon: "fa-gear",
    question: "How does the system handle peak load times?",
    answer:
      "Load balancing is managed through AWS Elastic Load Balancer with auto-scaling configurations. The system implements lazy loading, request queuing, and caching strategies. During peak times (registration periods, result announcements), additional server resources are automatically allocated. CDN integration ensures fast content delivery across different geographical locations.",
  },
  {
    category: "technical",
    icon: "fa-gear",
    question: "What encryption methods are used for data security?",
    answer:
      "The system uses AES-256 encryption for data at rest and TLS 1.3 for data in transit. Sensitive information is hashed using bcrypt with salt. Key management is handled through AWS KMS. Additional security measures include end-to-end encryption for messages, encrypted backups, and hardware security module (HSM) integration for cryptographic operations.",
  },
  {
    category: "technical",
    icon: "fa-gear",
    question: "How does the offline synchronization work?",
    answer:
      "Offline functionality is implemented using Service Workers and IndexedDB for local storage. The system uses a queue-based synchronization mechanism with conflict resolution protocols. When connectivity is restored, changes are synchronized using differential updates to minimize data transfer. Progressive Web App (PWA) capabilities ensure seamless offline-online transitions.",
  },
  {
    category: "technical",
    icon: "fa-gear",
    question: "What monitoring and logging systems are in place?",
    answer:
      "The system uses ELK Stack (Elasticsearch, Logstash, Kibana) for log management and monitoring. New Relic provides application performance monitoring, while Prometheus with Grafana handles metrics visualization. Automated alerts are configured for system anomalies, performance issues, and security incidents. Log retention policies comply with regulatory requirements.",
  },
  {
    category: "technical",
    icon: "fa-gear",
    question: "How is data backup and disaster recovery handled?",
    answer:
      "Multi-tier backup strategy includes hourly incremental backups, daily full backups, and weekly archival backups. Disaster recovery uses multi-region replication with automated failover capabilities. Recovery Point Objective (RPO) is 15 minutes, and Recovery Time Objective (RTO) is 1 hour. Regular disaster recovery drills ensure system reliability.",
  },
  {
    category: "technical",
    icon: "fa-gear",
    question: "What authentication methods are supported?",
    answer:
      "The system supports multiple authentication methods including JWT-based authentication, SAML 2.0, and OAuth 2.0. Single Sign-On (SSO) integration is available for major providers (Google, Microsoft, Okta). Two-factor authentication is available through SMS, email, or authenticator apps. Biometric authentication is supported on compatible mobile devices.",
  },
  {
    category: "technical",
    icon: "fa-gear",
    question: "How does the system handle data migration?",
    answer:
      "Data migration tools support imports from various formats (CSV, XML, JSON) with validation and error handling. The system includes ETL pipelines for automated data transformation, mapping tools for field customization, and rollback capabilities. Migration processes are monitored through detailed logs and progress tracking dashboards.",
  },
  {
    category: "technical",
    icon: "fa-gear",
    question: "What is the system's scalability architecture?",
    answer:
      "The microservices architecture enables horizontal scaling with containerization using Docker and orchestration through Kubernetes. Auto-scaling policies adjust resources based on demand. The system supports multi-tenant architecture with isolated data storage. Database sharding and caching strategies ensure performance at scale.",
  },
  {
    category: "technical",
    icon: "fa-gear",
    question: "How are system updates and maintenance managed?",
    answer:
      "Updates follow a blue-green deployment strategy with zero-downtime updates. Maintenance windows are scheduled during low-usage periods with automated failover systems. The system uses feature flags for gradual rollouts and A/B testing. Automated testing and staging environments ensure update reliability.",
  },
  {
    category: "technical",
    icon: "fa-gear",
    question: "What development tools and SDKs are available?",
    answer:
      "Developer tools include RESTful API SDKs for major programming languages, WebSocket libraries for real-time features, and mobile SDKs for iOS/Android development. The developer portal provides API documentation, code samples, testing tools, and sandbox environments. CI/CD pipelines support automated testing and deployment.",
  },
  {
    category: "technical",
    icon: "fa-gear",
    question: "How does the reporting engine work?",
    answer:
      "The reporting engine uses a combination of real-time data processing and pre-aggregated data marts. Reports can be generated in multiple formats (PDF, Excel, CSV) with customizable templates. The system supports scheduled report generation, parameterized reports, and dynamic data visualization through integration with tools like Power BI and Tableau.",
  },
  {
    category: "technical",
    icon: "fa-gear",
    question: "What compliance and audit features are implemented?",
    answer:
      "The system maintains comprehensive audit logs tracking all data modifications, access attempts, and system changes. Compliance features include GDPR tools for data privacy, FERPA compliance for educational records, and customizable retention policies. Regular security audits and penetration testing ensure ongoing compliance with industry standards.",
  },
  // Add more FAQs as needed
];

// Populate Categories
const categoryGrid = document.querySelector(".category-grid");
categories.forEach((category) => {
  const card = document.createElement("div");
  card.className = "category-card";
  card.dataset.category = category.id;
  card.innerHTML = `
          <i class="category-icon fas ${category.icon}"></i>
          <h3 class="category-title">${category.title}</h3>
          <span class="category-count">${category.count} articles</span>
      `;
  categoryGrid.appendChild(card);
});

// Populate FAQs
const faqList = document.querySelector(".faq-list");
faqs.forEach((faq) => {
  const faqItem = document.createElement("div");
  faqItem.className = "faq-item";
  faqItem.dataset.category = faq.category;
  faqItem.innerHTML = `
          <div class="faq-question">
              <div class="question-content">
                  <i class="question-icon fas ${faq.icon}"></i>
                  <span>${faq.question}</span>
              </div>
              <i class="toggle-icon fas fa-chevron-down"></i>
          </div>
          <div class="faq-answer">
              <div class="faq-answer-content">${faq.answer}</div>
          </div>
      `;
  faqList.appendChild(faqItem);
});

// Event Listeners
document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("click", () => {
    document
      .querySelectorAll(".category-card")
      .forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
    filterFAQs(card.dataset.category);
  });
});

document.querySelectorAll(".faq-item").forEach((item) => {
  item.querySelector(".faq-question").addEventListener("click", () => {
    const currentlyActive = document.querySelector(".faq-item.active");
    if (currentlyActive && currentlyActive !== item) {
      currentlyActive.classList.remove("active");
    }
    item.classList.toggle("active");
  });
});

// Search Functionality
const searchInput = document.querySelector(".search-input");
searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  document.querySelectorAll(".faq-item").forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(searchTerm) ? "block" : "none";
  });
});

// Filter FAQs by Category
function filterFAQs(category) {
  document.querySelectorAll(".faq-item").forEach((item) => {
    if (category === "all" || item.dataset.category === category) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// Popular Tags Click Handler
document.querySelectorAll(".popular-tag").forEach((tag) => {
  tag.addEventListener("click", () => {
    searchInput.value = tag.textContent;
    searchInput.dispatchEvent(new Event("input"));
  });
});

// Feedback Widget Handler
document.querySelector(".feedback-widget").addEventListener("click", () => {
  // Add your feedback form logic here
  alert("Feedback feature coming soon!");
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
