import crmImg from "./assets/projects/crm.png";
import aiSumImg from "./assets/projects/ai-summarizer.png";
import awsLogo from "./assets/logos/aws.png";
import googleLogo from "./assets/logos/google.png";
import nodeLogo from "./assets/logos/node.png";
import pankajLogo from "./assets/logos/psa.png";

// Certifications
export const certifications = [
  {
    title: "AWS Technical Essentials",
    issuer: "AWS",
    date: "2024",
    link: "https://drive.google.com/file/d/1KNn-_kz_hlDceh8hRyu1XWR09NCn4bxc/view?usp=sharing",
    logo: awsLogo,
  },
  {
    title: "Software Development",
    issuer: "Pankaj Sir Academy",
    date: "2024",
    link: "https://drive.google.com/file/d/1NFwDOy76OpryGo46iQlsc6W973Djud2i/view?usp=sharing",
    logo: pankajLogo,
  },
  {
    title: "Namaste Node.js",
    issuer: "Namaste Dev",
    date: "2025",
    link: "https://drive.google.com/file/d/1O0yZlc78Wi-FQDrHj2S-GPoQ6O5qWZI1/view?usp=sharing",
    logo: nodeLogo,
  },
  {
    title: "Cyber Security Fundamentals",
    issuer: "Google",
    date: "2024",
    link: "https://drive.google.com/file/d/1yDB1Almr-VnxeyrJBtaentnWpu-wKFtP/view?usp=sharing",
    logo: googleLogo,
  },
];
// Education
export const education = [
  {
    degree: "B.Tech, Computer Science",
    institute: "Gandhi Institute For Technology (BPUT)",
    year: "June 2022",
    grade: "SGPA: 8.9",
  },
  {
    degree: "Higher Secondary",
    institute: "Jupiter +2 Science College (CHSE)",
    year: "April 2018",
    grade: "81%",
  },
  {
    degree: "Secondary",
    institute: "Saraswati Sishu Vidya Mandir (BSE)",
    year: "April 2016",
    grade: "89%",
  },
];

// Experience
export const experiences = [
  {
    title: "Automated Fare Collection System (AFCS)",
    date: "Jan 2025 – Present",
    brief: "Built secure REST APIs for DTC, implemented AES encryption, and optimized transactional workflows, improving data accuracy by 95% and throughput by 40%.",
    details: [
      "Developed and exposed secure REST APIs to external government clients for real-time fare collection, ensuring strict adherence to data formats and reducing unnecessary data duplication and key mismatches by 95%.",
      "Implemented AES encryption and decryption using PBKDF2WithHmacSHA1 and Base64 to secure API communication and protect sensitive passenger and financial data.",
      "Prevented SQL injection through rigorous input validation and parameterized queries, enhancing system security and compliance with regulations.",
      "Consumed multiple client APIs and designed optimized batch insertion workflows in MySQL, improving system throughput and reducing write latency.",
      "Designed resilient, non-blocking asynchronous operations with automatic retry logic and transactional integrity, ensuring zero data loss and data consistency.",
      "Collaborated with cross-functional teams using Agile Scrum, implemented CI/CD pipelines, and maintained unit and integration tests to improve deployment reliability.",
      "Result: Reduced system errors by 95%, improved transaction processing speed by 40%, and enabled real-time fare reporting across multiple depots."
    ],
  },
  {
    title: "Intelligent Transport Management System (ITMS)",
    date: "Oct 2023 – Jan 2025",
    brief: "Centralized Spring Boot microservices for STUs, automated role-based permissions, and improved operational efficiency by 20%.",
    details: [
      "Developed a centralized Spring Boot microservices application for State Transport Units (STUs), improving operational efficiency by 20% and streamlining multi-system management.",
      "Created a dynamic role and permission API by scanning application controllers, automating role-based access control across 50+ modules, reducing manual configuration time by 80%.",
      "Leveraged REST controllers and AJAX for dynamic data updates, eliminating full page reloads, reducing processing time by 50%, and improving user experience for transport operators.",
      "Managed authentication and authorization using custom annotations for role-based module access, reducing unauthorized access attempts by 90%.",
      "Integrated Prometheus monitoring to track latency, throughput, active user sessions, and custom business metrics, enhancing system observability and reliability.",
      "Implemented performance optimizations including connection pooling, asynchronous processing, and caching strategies, leading to faster load times and reduced server resource consumption.",
      "Result: Enabled STUs to handle 20% more operational tasks per day, reduced manual errors in access control, and improved reliability of mission-critical transport systems."
    ],
  },
  {
    title: "Intelligent Depot Management System (IDMS)",
    date: "Jan 2023 – Sept 2023",
    brief: "Built dual desktop & web applications for BMTC depots, boosting offline efficiency by 90% and streamlining organization-wide operations.",
    details: [
      "Developed a dual-application system: a Java Desktop Application for offline depot-level operations (15% efficiency boost) and a Web Application for organization-wide access (20% efficiency gain).",
      "Enhanced offline-first functionality, reducing internet dependency by 90% while maintaining data integrity and synchronization.",
      "Migrated data storage from JSON files to MongoDB, optimizing database structure, enabling faster queries, and reducing complexity in large-scale data handling.",
      "Implemented robust reporting and audit features, allowing depots to generate real-time operational reports and improving decision-making efficiency.",
      "Collaborated with cross-functional teams using Agile Kanban methodology, prioritized features for offline/online operations, and conducted rigorous testing across multiple environments.",
      "Result: Increased depot operational efficiency by 15–20%, reduced manual data handling errors, and enabled real-time monitoring of assets and personnel across all depots."
    ],
  },
];

// Projects
export const projects = [
  {
    title: "CRMAPP",
    description: "CRM software to manage customer relationships efficiently.",
    image: crmImg,
    techStack: ["Java", "Spring Boot", "MySQL"],
    link: "https://github.com/srustisp/crmapp",
  },
  {
    title: "AI Text Summarizer (Chrome Extension)",
    description: "Developed a Chrome extension that uses AI to summarize text on web pages efficiently, helping users quickly extract key points and save time while reading articles or documents.",
    techStack: ["JavaScript", "Chrome Extension API", "HTML", "CSS", "OpenAI API"],
    link: "https://github.com/srusti2001/ai-text-summarizer",
    image: aiSumImg,
  }
];

// Skills
export const skills = [
  { category: "Programming Languages", items: ["Java", "JavaScript"] },
  { category: "Frameworks", items: ["Spring Boot", "Hibernate", "Node.js", "React"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { category: "Tools & Others", items: ["GitHub", "GitLab", "Postman", "AWS", "Vercel", "Thymeleaf"] },
  {
    category: "Methodologies & Practices",
    items: [
      "Agile (Scrum & Kanban)",
      "Sprint Planning",
      "Stand-ups",
      "Retrospectives",
      "CI/CD (GitHub Actions)",
      "Test-Driven Development",
    ],
  },
];

export const aboutData = {
  text: "I am a passionate Software Engineer with 3+ years of experience in Java, Spring Boot, and full-stack development. I love building scalable web applications and microservices, solving complex problems, and learning new technologies. My experience spans from backend API development to frontend UI design, with a focus on performance, security, and reliability."
};

export const personal = {
  hobbies: [
    {
      title: "Reading Books",
      detail: "Exploring diverse genres to expand knowledge and imagination.",
      icon: "FaBook"
    },
    {
      title: "Tech Exploration",
      detail: "Experimenting with AI, open-source tools, and cutting-edge frameworks.",
      icon: "FaLaptopCode"
    },
    {
      title: "Traveling & Exploring",
      detail: "Discovering new cultures, landscapes, and experiences.",
      icon: "FaPlane"
    },
    {
      title: "Journaling",
      detail: "Writing daily journals to reflect, plan, and enhance productivity.",
      icon: "FaPenFancy"
    }
  ],
  funFact: "I enjoy combining creativity and technology to learn and build exciting projects!"
};
