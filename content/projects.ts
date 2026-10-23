import type { Project } from "@/lib/types";

/**
 * Projects and case studies, sourced from Aaradhana's resume and application
 * materials. Nothing here claims a result, metric, repository or screenshot
 * that hasn't been supplied. Gaps are todos.
 */
export const projects: Project[] = [
  {
    slug: "koili",
    title: "Koili",
    summary: "An AI receptionist for small businesses, available 24/7 to answer calls, book appointments and qualify leads.",
    category: "Ventures",
    status: "Live beta",
    context: "Co-founded venture",
    role: "Co-founder",
    period: "2026 – Present",
    tech: [],
    links: [],
    featured: true,
    caseStudy: {
      overview: [
        "Koili is an AI receptionist for small businesses, available around the clock to answer calls, book appointments, qualify leads and update the CRM.",
        "It's in live beta today.",
      ],
      problem: [
        "For a small business, a missed call is often a missed customer, and hiring a full-time receptionist to cover every hour isn't realistic for most of them.",
      ],
      users: [{ todo: "Name the kinds of businesses using the beta today and the markets you're targeting." }],
      role: [{ todo: "Add your specific contribution: product direction, design, operations, client onboarding?" }],
      contribution: {
        mine: [{ todo: "List the parts of Koili you designed or led yourself." }],
        others: [{ todo: "List co-founders and collaborators, and what they own." }],
      },
      implementation: [{ todo: "Describe how a call reaches Koili and how bookings and CRM updates get made." }],
      decisions: [{ todo: "Pick two or three real decisions and explain the trade-off." }],
      testing: [{ todo: "Explain how calls are reviewed and tested in the beta." }],
      results: [{ todo: "Add numbers you can verify, such as calls handled or bookings made, with the time period they cover." }],
      limitations: [{ todo: "Be candid about what Koili doesn't do well yet and what's next." }],
      screenshots: [],
    },
  },
  {
    slug: "ray-rentals",
    title: "Ray Rentals",
    summary: "Nepal's first mini electric scooter, built as both hardware and software for first- and last-mile urban mobility.",
    category: "Ventures",
    status: "Completed",
    context: "Co-founded venture",
    role: "Co-founder",
    period: "2021 – 2022",
    tech: [],
    links: [],
    featured: true,
    caseStudy: {
      overview: [
        "Ray Rentals developed Nepal's first mini electric scooter, covering both the hardware and the software.",
        "The venture was pitched at IdeaStudio, College Idea Hunt and National Idea Hunt, and the team secured a Golden Ticket at Nabil SSE.",
      ],
      problem: [
        "Short, everyday trips in Kathmandu that are awkward to make on foot or by car — the first and last mile of a journey.",
      ],
      users: [{ todo: "Who were the intended riders, and where was the scooter meant to be used or parked?" }],
      role: [
        "Co-founder, working on both the hardware and software of the scooter and on the venture itself.",
      ],
      contribution: {
        mine: [{ todo: "List what you personally designed, built or led on the hardware, software and business sides." }],
        others: [{ todo: "Credit co-founders and collaborators, and what they owned." }],
      },
      implementation: [{ todo: "Describe the scooter's build: the hardware components and the software controlling it." }],
      decisions: [{ todo: "A design or product decision worth explaining, and why." }],
      testing: [{ todo: "How the prototype was tested before pitching it." }],
      results: [
        "Pitched at IdeaStudio, College Idea Hunt and National Idea Hunt.",
        "Secured a Golden Ticket at Nabil SSE.",
      ],
      limitations: [{ todo: "What was hard, and what would you change now?" }],
      screenshots: [],
    },
  },
  {
    slug: "array-codes",
    title: "Array Codes",
    summary: "Website development, app creation and social media management for small and medium-sized businesses.",
    category: "Digital Growth",
    status: "Ongoing",
    context: "Co-founded venture",
    role: "Co-founder",
    period: "2023 – Present",
    tech: [],
    links: [],
    featured: true,
    caseStudy: {
      overview: [
        "Array Codes provides digital solutions — website development, app creation and social media management — for small and medium-sized businesses in Kupandol, Lalitpur.",
        "Delivered over 50 projects, enhancing online presence and streamlining operations for clients.",
      ],
      problem: [{ todo: "What did these businesses typically need: a first website, an app, a cleaner social presence?" }],
      users: ["Small and medium-sized businesses."],
      role: [{ todo: "Your specific role across these projects: strategy, design, development, client management?" }],
      contribution: {
        mine: [{ todo: "What you personally built or led." }],
        others: [{ todo: "Credit co-founders and team members involved." }],
      },
      implementation: [{ todo: "Typical platforms and stack used across client projects." }],
      decisions: [{ todo: "A decision worth explaining from one of these projects." }],
      testing: [{ todo: "How projects were checked before handing them to clients." }],
      results: ["50+ projects delivered."],
      limitations: [{ todo: "Optional." }],
      screenshots: [],
    },
  },
  {
    slug: "amplify-digital",
    title: "Amplify Digital",
    summary: "A 360° digital marketing and IT agency helping SMEs grow through SEO, paid media, funnels, CRM systems and automation.",
    category: "Digital Growth",
    status: "Ongoing",
    context: "Co-founded venture",
    role: "Co-Founder & CEO",
    period: "2022 – Present",
    tech: [],
    links: [{ label: "amplify.com.np", href: "https://amplify.com.np" }],
    featured: true,
    caseStudy: {
      overview: [
        "Amplify Digital is a 360° digital marketing and IT agency serving small and medium-sized businesses in Nepal, built to help them grow through technology, marketing and data-driven solutions.",
        "Served 20+ clients and, through full-funnel marketing strategies, helped increase client sales by over 30%.",
      ],
      problem: [
        "Many small businesses in Nepal rely on walk-ins and word of mouth and lack the digital presence, tooling and marketing systems to grow beyond that.",
      ],
      users: ["Small and medium-sized businesses in Nepal."],
      role: [
        "Co-founder and CEO: business strategy, client relationships, team operations, and development of scalable products and services.",
      ],
      contribution: {
        mine: [{ todo: "What you personally lead day to day: strategy, specific client accounts, hiring, product decisions?" }],
        others: [{ todo: "Credit co-founders and team members involved." }],
      },
      implementation: [{ todo: "How the agency is structured: service lines, team, and how work moves from brief to delivery." }],
      decisions: [{ todo: "A business or strategic decision worth explaining, and why." }],
      testing: [{ todo: "How client work and campaigns are reviewed before and after launch." }],
      results: ["Served 100+ businesses in total.", "Increased client sales by over 30% through full-funnel marketing strategies."],
      limitations: [{ todo: "Optional." }],
      screenshots: [],
    },
  },
  {
    slug: "coderush-web-apps",
    title: "Web apps at CodeRush",
    summary: "Four web applications built with HTML, CSS, JavaScript and React, with API integration and Redux Toolkit for state management.",
    category: "Design & Web",
    status: "Completed",
    context: "Employment",
    role: "Web Development Apprentice",
    period: "Dec 2023 – Sep 2024",
    tech: ["HTML", "CSS", "JavaScript", "React", "Redux Toolkit"],
    links: [],
    featured: true,
    caseStudy: {
      overview: [
        "At CodeRush — Code Like Her, a programme supporting women in software and web development, built four web applications using HTML, CSS, JavaScript and React.",
        "Integrated APIs and learned state management with Redux Toolkit through project-based learning.",
      ],
      problem: [{ todo: "What did each app need to do, and for whom?" }],
      users: [{ todo: "Who were these apps built for?" }],
      role: [
        "Web development apprentice, building and shipping full applications end to end as part of a structured, project-based programme.",
      ],
      contribution: {
        mine: [{ todo: "Name the four apps (or describe them if under NDA) and what you built on each." }],
        others: [{ todo: "Credit mentors or teammates on the programme." }],
      },
      implementation: [{ todo: "How state was managed with Redux Toolkit, and which APIs were integrated." }],
      decisions: [{ todo: "A decision worth explaining from one of the four apps." }],
      testing: [{ todo: "How the apps were tested before review." }],
      results: ["Shipped four web applications over the course of the programme."],
      limitations: [{ todo: "What would you do differently now?" }],
      screenshots: [],
    },
  },
  {
    slug: "steam-design-teaching",
    title: "STEAM & Design teaching at Himalayan Whitehouse",
    summary: "Leading STEAM and Design learning at an IB World School, mentoring students through robotics, prototyping and human-centered innovation.",
    category: "Education & Mentorship",
    status: "Ongoing",
    context: "Employment",
    role: "STEAM Head & Design Teacher",
    period: "Dec 2024 – Present",
    tech: [],
    links: [],
    featured: true,
    caseStudy: {
      overview: [
        "Leads STEAM and Design programmes at Himalayan Whitehouse, an IB World School, mentoring students through robotics, prototyping and human-centered innovation.",
        "Plans projects, guides students through design thinking, and integrates technology and creativity into lessons for MYP and PYP students.",
      ],
      problem: [{ todo: "What gap in the existing curriculum did this role address?" }],
      users: ["MYP and PYP students at Himalayan Whitehouse IB World School."],
      role: ["STEAM Head and Design Teacher: curriculum and project design, mentoring, hands-on and technology-based learning."],
      contribution: {
        mine: [{ todo: "Name specific projects, units or programmes you've designed and led." }],
        others: [{ todo: "Credit other teachers or staff collaborated with." }],
      },
      implementation: [{ todo: "How a typical STEAM or Design unit is structured, from brief to student prototype." }],
      decisions: [{ todo: "A curriculum or pedagogical decision worth explaining." }],
      testing: [{ todo: "How student work and learning outcomes are assessed." }],
      results: [{ todo: "Any measurable outcomes: student projects shipped, programmes launched, cohort sizes." }],
      limitations: [{ todo: "Optional." }],
      screenshots: [],
    },
  },
];

export const visibleProjects = projects.filter((p) => !p.draft);

export function getProject(slug: string): Project | undefined {
  return visibleProjects.find((p) => p.slug === slug);
}

export const categories = ["Ventures", "Digital Growth", "Design & Web", "Education & Mentorship"] as const;
