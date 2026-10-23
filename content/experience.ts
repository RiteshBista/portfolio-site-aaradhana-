import type { Role } from "@/lib/types";

/**
 * Work history, taken from Aaradhana's resume.
 * Where the resume gave no detail, a todo marks what to add.
 */
export const roles: Role[] = [
  {
    title: "Co-Founder",
    org: "Koili",
    period: "2026 – Present",
    kind: "business",
    summary: "An AI receptionist available 24/7 for small businesses.",
    points: [
      {
        todo: "Add your specific contribution: product direction, design, operations, client onboarding?",
      },
    ],
  },
  {
    title: "STEAM Head & Design Teacher",
    org: "Himalayan Whitehouse IB World School",
    period: "Dec 2024 – Present",
    location: "Kathmandu, Nepal",
    kind: "education",
    summary:
      "Leads STEAM and Design learning at an IB World School, mentoring students through robotics, prototyping and human-centered innovation projects.",
    points: [
      {
        list: [
          "Plans STEAM and Design projects, guides students through design thinking, and integrates technology and creativity into lessons.",
          "Designed and implemented STEAM projects, supported interdisciplinary learning, and strengthened hands-on, technology-based learning.",
        ],
      },
    ],
  },
  {
    title: "Research Assistant",
    org: "Advanced College of Engineering and Management",
    period: "May 2024 – May 2025",
    location: "Kathmandu, Nepal",
    kind: "research",
    summary:
      "Studied the market potential and environmental benefits of mini electric scooters in Nepal, and explored digital tools to improve SME efficiency and growth.",
    points: [
      {
        list: [
          "Conducted literature reviews, data collection and analysis, and prepared reports supporting faculty research.",
          "Contributed to multiple research projects, including a case study on the mini electric scooter project, and helped secure internal research funding.",
        ],
      },
    ],
  },
  {
    title: "Social Media Manager",
    org: "Digital Mantras",
    period: "May 2024 – Dec 2024",
    kind: "business",
    points: [{ todo: "Add what you managed and for which clients." }],
  },
  {
    title: "React Developer",
    org: "CodeRush — Code Like Her",
    period: "Dec 2023 – Sep 2024",
    location: "Lalitpur, Nepal",
    kind: "engineering",
    summary:
      "An apprenticeship programme supporting women in software and web development.",
    points: [
      {
        list: [
          "Learned and applied HTML, CSS, JavaScript and React while building web applications, integrating APIs, and using Redux Toolkit for state management.",
          "Built four web applications through practical, project-based learning.",
        ],
      },
    ],
  },
  {
    title: "Co-Founder",
    org: "Array Codes",
    period: "2023 – Present",
    location: "Kupandol, Lalitpur, Nepal",
    kind: "business",
    summary:
      "Digital solutions for small and medium-sized businesses: website development, app creation and social media management.",
    points: [
      {
        list: ["Delivered over 50 projects, enhancing online presence and streamlining operations for SMEs."],
      },
    ],
  },
  {
    title: "Co-Founder & CEO",
    org: "Amplify Digital Pvt. Ltd.",
    orgUrl: "https://amplify.com.np",
    period: "2022 – Present",
    location: "Kathmandu, Nepal",
    kind: "business",
    summary:
      "A 360° digital marketing and IT agency helping small and medium-sized businesses in Nepal grow through SEO, paid media, funnels, CRM systems and automation.",
    points: [
      {
        list: [
          "Leads business strategy, client relationships, team operations, and development of scalable products and services.",
          "Built and scaled the agency to serve 100+ businesses; led full-funnel marketing strategies that helped clients increase sales by over 30%.",
        ],
      },
    ],
  },
  {
    title: "Educator",
    org: "Smart Cheli",
    period: "Feb 2022 – Feb 2023",
    location: "Kathmandu, Nepal",
    kind: "education",
    summary:
      "A nonprofit providing educational programmes, mentorship and skill development to empower school students, especially girls, in STEAM.",
    points: [
      {
        list: [
          "Delivered instruction in Python and Scratch, covering syntax, data structures, OOP and interactive projects; contributed to educational book content.",
          "Conducted STEAM education sessions and mentored 50+ students, developing learning activities and curricula for hands-on projects.",
        ],
      },
    ],
  },
  {
    title: "Co-Founder",
    org: "Ray Rentals",
    period: "2021 – 2022",
    location: "Nepal",
    kind: "business",
    summary: "Developed Nepal's first mini electric scooter (hardware and software).",
    points: [
      {
        list: ["Pitched at IdeaStudio, College Idea Hunt and National Idea Hunt; secured a Golden Ticket in Nabil SSE."],
      },
    ],
  },
  {
    title: "Treasurer",
    org: "Advanced Robotics Club",
    period: "2020 – 2024",
    location: "Kathmandu, Nepal",
    kind: "education",
    summary: "Organised workshops, hackathons, coding competitions and Technorion Nepal, a zonal qualifier for Techfest at IIT Bombay.",
    points: [{ todo: "Add scale: number of events, participants or editions organised." }],
  },
  {
    title: "Mentor",
    org: "NRCC & Research and Innovation Unit",
    period: "Dates not specified",
    kind: "education",
    summary: "Guided students in research projects, innovation challenges and entrepreneurial initiatives, alongside Python instruction.",
    points: [{ todo: "Add dates and more detail on the projects mentored." }],
  },
];

export const education = [
  {
    school: "Advanced College of Engineering and Management (Tribhuvan University)",
    degree: "Bachelor of Engineering, Electronics, Communication and Information Engineering — First Division, 70.04%",
    period: "2019 – 2025",
  },
  {
    school: "United Academy",
    degree: "High school",
    period: "2018 – 2019",
  },
];

export const certifications: string[] = [];

export const awards = [
  "Hult Prize — Judge, ACEM local competition (Feb 2026)",
  "Introduction to Figma — Instructor (Jan 2024)",
];

export const languages = ["Nepali", "English", "Hindi"];

/** Skills grouped by how they've been used, so readers can tell production experience from exploration. */
export const skills = [
  {
    group: "Design",
    items: ["Figma", "UI/UX design", "Prototyping", "Design thinking", "Human-centered research"],
  },
  {
    group: "Technology",
    items: ["Python", "Scratch", "HTML", "CSS", "JavaScript", "React", "Redux Toolkit"],
  },
  {
    group: "Business & growth",
    items: ["SEO", "Paid media", "Funnels", "CRM systems", "Marketing automation", "Business strategy"],
  },
  {
    group: "Teaching & mentorship",
    items: ["STEAM education", "Curriculum design", "Workshop facilitation", "Event organisation"],
  },
];
