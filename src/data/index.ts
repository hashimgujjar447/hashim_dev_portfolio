import type {
  Project,
  TechCategory,
  ExperienceItem,
  DashboardMetric,
  CurrentFocus,
  NavItem,
  ContactLink,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  {
    id: "overview",
    label: "Overview",
    icon: "LayoutDashboard",
    href: "#overview",
  },
  {
    id: "projects",
    label: "Projects",
    icon: "FolderKanban",
    href: "#projects",
  },
  {
    id: "system-design",
    label: "System Design",
    icon: "Network",
    href: "#system-design",
  },
  {
    id: "tech-stack",
    label: "Tech Stack",
    icon: "Layers",
    href: "#tech-stack",
  },
  {
    id: "experience",
    label: "Experience",
    icon: "Briefcase",
    href: "#experience",
  },
  { id: "contact", label: "Contact", icon: "Mail", href: "#contact" },
];

export const DASHBOARD_METRICS: DashboardMetric[] = [
  {
    label: "Projects",
    value: "15+",
    icon: "FolderKanban",
    description: "Production & OSS",
  },
  {
    label: "Real-Time",
    value: "WebSocket",
    icon: "Zap",
    description: "Live systems built",
  },
  {
    label: "Stack",
    value: "MERN + Django",
    icon: "Layers",
    description: "Full stack",
  },
  {
    label: "Architecture",
    value: "SaaS",
    icon: "Server",
    description: "Scalable systems",
  },
  {
    label: "Scope",
    value: "Full-Stack",
    icon: "Code2",
    description: "End-to-end",
  },
];

export const PROJECTS: Project[] = [
  // ─── WORKFLOWHUB BACKEND ───────────────────────────────────────────────────
  {
    id: "workflowhub",
    title: "WorkflowHub",
    subtitle: "Real-Time SaaS Collaboration Platform — Django Backend",
    description:
      "A production-grade SaaS project management system with real-time collaboration, RBAC, nested workspaces, and live activity feeds powered by WebSocket and Django Channels.",
    longDescription:
      "Enterprise-grade SaaS with multi-tenant architecture, real-time collaboration via Django Channels/WebSockets, role-based access control across organizations → workspaces → projects → tasks, threaded comments with like/dislike reactions, soft deletes, and a Redux-powered React frontend. Built on Django 6 with ASGI support.",
    featured: true,
    status: "live",
    architectureTags: [
      "Multi-Tenant",
      "RBAC",
      "Event-Driven",
      "Real-Time",
      "REST + WS",
      "Signals",
      "Soft Delete",
    ],
    techStack: [
      { label: "Django 6", color: "green" },
      { label: "DRF", color: "green" },
      { label: "Channels", color: "orange" },
      { label: "React", color: "blue" },
      { label: "Redux Toolkit", color: "purple" },
      { label: "PostgreSQL", color: "blue" },
      { label: "Redis", color: "red" },
      { label: "WebSocket", color: "yellow" },
      { label: "Celery", color: "orange" },
    ],
    githubUrl: "https://github.com/hashimgujjar447/workflow_hub",
    liveUrl: "#",
    metrics: [
      { label: "Real-time events", value: "< 50ms" },
      { label: "RBAC levels", value: "5 tiers" },
      { label: "Nesting depth", value: "4 levels" },
    ],
    systemDesign: {
      title: "WorkflowHub Real-Time Flow",
      description:
        "User action triggers API → DB → Django Signal → WebSocket → Redux → UI",
      nodes: [
        {
          id: "user",
          label: "User Action",
          sublabel: "UI Interaction",
          type: "input",
          children: ["api"],
        },
        {
          id: "api",
          label: "REST API",
          sublabel: "DRF Endpoint",
          type: "service",
          children: ["db"],
        },
        {
          id: "db",
          label: "PostgreSQL",
          sublabel: "Database Save",
          type: "database",
          children: ["signal"],
        },
        {
          id: "signal",
          label: "Django Signal",
          sublabel: "Post-save hook",
          type: "event",
          children: ["ws"],
        },
        {
          id: "ws",
          label: "WebSocket",
          sublabel: "Django Channels",
          type: "service",
          children: ["redux"],
        },
        {
          id: "redux",
          label: "Redux State",
          sublabel: "RTK Update",
          type: "process",
          children: ["ui"],
        },
        {
          id: "ui",
          label: "UI Re-render",
          sublabel: "React component",
          type: "output",
          children: [],
        },
      ],
    },
  },

  // ─── WORKFLOWHUB FRONTEND ──────────────────────────────────────────────────
  {
    id: "workflowhub-frontend",
    title: "WorkflowHub Frontend",
    subtitle: "Real-Time Task Management UI — Next.js",
    description:
      "Modern, scalable SaaS frontend built with Next.js App Router, Redux Toolkit + RTK Query, Tailwind CSS, and WebSockets. Connects to the Django backend for a fully real-time collaborative experience.",
    longDescription:
      "Permission-based UI rendering with a custom usePermission hook, Kanban-style task board, threaded comments with live like/dislike reactions, auto-refresh JWT token system, and RTK Query for smart server-state caching with tag invalidation and optimistic updates.",
    featured: true,
    status: "live",
    architectureTags: [
      "Next.js App Router",
      "RTK Query",
      "WebSocket",
      "Permission UI",
      "Kanban",
      "JWT Refresh",
    ],
    techStack: [
      { label: "Next.js", color: "default" },
      { label: "Redux Toolkit", color: "purple" },
      { label: "RTK Query", color: "purple" },
      { label: "TypeScript", color: "blue" },
      { label: "Tailwind CSS", color: "blue" },
      { label: "WebSocket", color: "yellow" },
    ],
    githubUrl: "https://github.com/hashimgujjar447/workflow_frontend",
    liveUrl: "#",
    metrics: [
      { label: "WS Events", value: "7 types" },
      { label: "Auth", value: "JWT + Auto-refresh" },
      { label: "Cache", value: "RTK Query" },
    ],
    systemDesign: {
      title: "WorkflowHub Frontend Real-Time Flow",
      description:
        "RTK Query mutation → Backend save → Django Signal → WebSocket event → Redux state update → Instant UI re-render",
      nodes: [
        {
          id: "action",
          label: "User Action",
          sublabel: "Button / Form",
          type: "input",
          children: ["rtk"],
        },
        {
          id: "rtk",
          label: "RTK Query",
          sublabel: "API Call + Cache",
          type: "service",
          children: ["backend"],
        },
        {
          id: "backend",
          label: "Backend Save",
          sublabel: "DRF + PostgreSQL",
          type: "database",
          children: ["signal"],
        },
        {
          id: "signal",
          label: "Django Signal",
          sublabel: "Post-save hook",
          type: "event",
          children: ["wsevent"],
        },
        {
          id: "wsevent",
          label: "WebSocket Event",
          sublabel: "Django Channels",
          type: "service",
          children: ["listener"],
        },
        {
          id: "listener",
          label: "Frontend Listener",
          sublabel: "WS onmessage",
          type: "process",
          children: ["redux"],
        },
        {
          id: "redux",
          label: "Redux State",
          sublabel: "updateQueryData",
          type: "process",
          children: ["ui"],
        },
        {
          id: "ui",
          label: "UI Re-render",
          sublabel: "Instant update",
          type: "output",
          children: [],
        },
      ],
    },
  },

  // ─── WORKFLOWHUB API (Node.js) ─────────────────────────────────────────────
  {
    id: "workflowhub-api",
    title: "WorkflowHub API",
    subtitle: "Node.js + Express Backend",
    description:
      "RESTful API backend built with Node.js and Express featuring JWT authentication, middleware chains, rate limiting, and modular route architecture.",
    status: "live",
    architectureTags: ["REST API", "JWT Auth", "Middleware", "Modular"],
    techStack: [
      { label: "Node.js", color: "green" },
      { label: "Express", color: "default" },
      { label: "MongoDB", color: "green" },
      { label: "JWT", color: "orange" },
      { label: "TypeScript", color: "blue" },
    ],
    githubUrl:
      "https://github.com/hashimgujjar447/workflow_hub_with_node_express",
    metrics: [
      { label: "Endpoints", value: "50+" },
      { label: "Auth", value: "JWT + Refresh" },
    ],
  },

  // ─── LMS BACKEND ──────────────────────────────────────────────────────────
  {
    id: "lms-backend",
    title: "LMS Backend Architecture",
    subtitle: "Learning Management System",
    description:
      "Scalable LMS backend with hierarchical course structure, enrollment management, progress tracking, and content delivery API built on Django REST Framework.",
    status: "in-progress",
    architectureTags: [
      "Hierarchical Data",
      "REST API",
      "Role-Based",
      "Content Delivery",
    ],
    techStack: [
      { label: "Django", color: "green" },
      { label: "DRF", color: "green" },
      { label: "PostgreSQL", color: "blue" },
      { label: "Celery", color: "orange" },
      { label: "Redis", color: "red" },
    ],
    githubUrl: "https://github.com/hashimgujjar447",
    systemDesign: {
      title: "LMS Data Hierarchy",
      description:
        "Nested course content model with enrollment and progress tracking",
      nodes: [
        {
          id: "org",
          label: "Organization",
          sublabel: "Top-level tenant",
          type: "input",
          children: ["course"],
        },
        {
          id: "course",
          label: "Course",
          sublabel: "Content container",
          type: "process",
          children: ["module"],
        },
        {
          id: "module",
          label: "Module",
          sublabel: "Grouped lessons",
          type: "process",
          children: ["lesson"],
        },
        {
          id: "lesson",
          label: "Lesson",
          sublabel: "Content unit",
          type: "process",
          children: ["progress"],
        },
        {
          id: "progress",
          label: "Progress Tracking",
          sublabel: "Per-user state",
          type: "database",
          children: ["cert"],
        },
        {
          id: "cert",
          label: "Certification",
          sublabel: "Completion event",
          type: "output",
          children: [],
        },
      ],
    },
  },

  // ─── BUSINESS NEXUS ───────────────────────────────────────────────────────
  {
    id: "business-nexus",
    title: "Business Nexus",
    subtitle: "B2B Real-Time Collaboration Platform",
    description:
      "Full-stack B2B platform connecting Investors and Entrepreneurs through a secure request workflow, real-time messaging via Socket.IO, live notifications, and collaboration dashboards.",
    longDescription:
      "Role-based platform (Investor / Entrepreneur) with JWT access + refresh tokens, HTTP-only cookies, collaboration request lifecycle (pending → accepted / rejected), Socket.IO real-time chat with MongoDB message persistence, and a live notification system with read/unread state.",
    status: "live",
    architectureTags: [
      "Full-Stack",
      "B2B",
      "Real-Time Chat",
      "Socket.IO",
      "RBAC",
      "Notification System",
      "Cloudinary",
    ],
    techStack: [
      { label: "React", color: "blue" },
      { label: "TypeScript", color: "blue" },
      { label: "Redux Toolkit", color: "purple" },
      { label: "Node.js", color: "green" },
      { label: "Express", color: "default" },
      { label: "MongoDB", color: "green" },
      { label: "Socket.IO", color: "yellow" },
      { label: "Cloudinary", color: "orange" },
      { label: "JWT", color: "orange" },
    ],
    githubUrl: "https://github.com/hashimgujjar447/business-nexus",
    liveUrl: "#",
    metrics: [
      { label: "Roles", value: "2 (Investor / Entrepreneur)" },
      { label: "Socket Events", value: "6+ types" },
      { label: "Auth", value: "JWT + HTTP-only cookies" },
    ],
    systemDesign: {
      title: "Business Nexus Collaboration Flow",
      description:
        "Investor sends proposal → Entrepreneur accepts → Chat + notification channel unlocked via Socket.IO",
      nodes: [
        {
          id: "investor",
          label: "Investor",
          sublabel: "Sends proposal",
          type: "input",
          children: ["request"],
        },
        {
          id: "request",
          label: "Collaboration Request",
          sublabel: "pending status",
          type: "process",
          children: ["entrepreneur"],
        },
        {
          id: "entrepreneur",
          label: "Entrepreneur",
          sublabel: "Accept / Reject",
          type: "process",
          children: ["notif", "chat"],
        },
        {
          id: "notif",
          label: "Live Notification",
          sublabel: "Socket.IO event",
          type: "event",
          children: ["ui"],
        },
        {
          id: "chat",
          label: "Real-Time Chat",
          sublabel: "Socket room unlocked",
          type: "service",
          children: ["ui"],
        },
        {
          id: "ui",
          label: "Dashboard Update",
          sublabel: "Instant sync",
          type: "output",
          children: [],
        },
      ],
    },
  },

  // ─── E-COMMERCE ───────────────────────────────────────────────────────────
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    subtitle: "Full-Stack MERN Shopping System",
    description:
      "Complete e-commerce solution with product catalog, advanced search & filtering, cart management, order processing, Cloudinary image uploads, and an admin dashboard — built with the MERN stack.",
    longDescription:
      "Secure JWT + bcrypt authentication with role-based authorization (user / admin). Product CRUD with Cloudinary image storage, shopping cart with seamless checkout, order management for both users and admins, and a fully responsive Tailwind UI.",
    status: "live",
    architectureTags: [
      "MERN",
      "CRUD",
      "Role-Based Auth",
      "Cloudinary",
      "Admin Panel",
      "Cart System",
    ],
    techStack: [
      { label: "React", color: "blue" },
      { label: "Redux Toolkit", color: "purple" },
      { label: "Tailwind CSS", color: "blue" },
      { label: "Node.js", color: "green" },
      { label: "Express", color: "default" },
      { label: "MongoDB", color: "green" },
      { label: "JWT", color: "orange" },
      { label: "Cloudinary", color: "orange" },
      { label: "Multer", color: "default" },
    ],
    githubUrl: "https://github.com/hashimgujjar447/ecommerce-fullstack-design",
    liveUrl: "#",
    metrics: [
      { label: "Auth", value: "JWT + bcrypt" },
      { label: "Images", value: "Cloudinary" },
      { label: "UI", value: "Mobile-first" },
    ],
    systemDesign: {
      title: "E-Commerce Order Flow",
      description:
        "User browses catalog → adds to cart → checkout → order saved → admin dashboard updated",
      nodes: [
        {
          id: "catalog",
          label: "Product Catalog",
          sublabel: "Search & filter",
          type: "input",
          children: ["cart"],
        },
        {
          id: "cart",
          label: "Shopping Cart",
          sublabel: "Redux state",
          type: "process",
          children: ["checkout"],
        },
        {
          id: "checkout",
          label: "Checkout",
          sublabel: "Order creation",
          type: "process",
          children: ["db"],
        },
        {
          id: "db",
          label: "MongoDB",
          sublabel: "Order persisted",
          type: "database",
          children: ["admin"],
        },
        {
          id: "admin",
          label: "Admin Dashboard",
          sublabel: "Order management",
          type: "output",
          children: [],
        },
      ],
    },
  },

  // ─── ALI AIR CONDITIONING ─────────────────────────────────────────────────
  {
    id: "ali-ac",
    title: "Ali Air Conditioning",
    subtitle: "Bilingual Business Website — Next.js + Admin Panel",
    description:
      "Modern full-stack business website for an AC & refrigeration services company. Features a bilingual (English / Arabic with RTL) public site, Cloudinary image management, contact form with email notifications, and a secure admin CMS with analytics dashboard.",
    longDescription:
      "Built with Next.js 16 App Router, TypeScript, Tailwind CSS v4, and MongoDB. Admin panel supports full CRUD for services and projects in both English and Arabic, JWT HTTP-only cookie auth (7-day session), Recharts analytics, inquiry tracking with status management, and dynamic SEO with sitemap generation.",
    status: "live",
    architectureTags: [
      "Next.js",
      "Bilingual (EN/AR)",
      "RTL Support",
      "Admin CMS",
      "Cloudinary",
      "SEO Optimized",
      "i18n",
    ],
    techStack: [
      { label: "Next.js 16", color: "default" },
      { label: "TypeScript", color: "blue" },
      { label: "Tailwind CSS v4", color: "blue" },
      { label: "Redux Toolkit", color: "purple" },
      { label: "MongoDB", color: "green" },
      { label: "JWT", color: "orange" },
      { label: "Cloudinary", color: "orange" },
      { label: "Recharts", color: "blue" },
      { label: "next-intl", color: "default" },
      { label: "Resend", color: "default" },
    ],
    githubUrl: "https://github.com/hashimgujjar447/alaa-cooling-website",
    liveUrl: "#",
    metrics: [
      { label: "Languages", value: "EN + AR (RTL)" },
      { label: "Auth", value: "JWT HTTP-only cookies" },
      { label: "Images", value: "Cloudinary auto-optimize" },
    ],
    systemDesign: {
      title: "Ali AC — Admin CMS Flow",
      description:
        "Admin logs in → manages bilingual content → Cloudinary stores images → MongoDB persists data → public site renders SEO-optimized pages",
      nodes: [
        {
          id: "admin",
          label: "Admin Login",
          sublabel: "JWT cookie auth",
          type: "input",
          children: ["cms"],
        },
        {
          id: "cms",
          label: "CMS Dashboard",
          sublabel: "Services / Projects / Contacts",
          type: "process",
          children: ["cloudinary", "db"],
        },
        {
          id: "cloudinary",
          label: "Cloudinary",
          sublabel: "Image upload & optimize",
          type: "service",
          children: ["db"],
        },
        {
          id: "db",
          label: "MongoDB",
          sublabel: "Bilingual content saved",
          type: "database",
          children: ["public"],
        },
        {
          id: "public",
          label: "Public Site",
          sublabel: "EN / AR + SEO",
          type: "output",
          children: [],
        },
      ],
    },
  },

  // ─── TODO APP ─────────────────────────────────────────────────────────────
  {
    id: "todo-app",
    title: "Todo App",
    subtitle: "React + Redux Task Manager",
    description:
      "Clean, fully functional todo application with task creation, completion toggling, filtering (all / active / completed), and persistent state management using Redux Toolkit.",
    status: "live",
    architectureTags: ["CRUD", "Redux", "Local State", "Filtering"],
    techStack: [
      { label: "React", color: "blue" },
      { label: "Redux Toolkit", color: "purple" },
      { label: "Tailwind CSS", color: "blue" },
    ],
    githubUrl: "https://github.com/hashimgujjar447/ReactTodo",
    metrics: [
      { label: "State", value: "Redux Toolkit" },
      { label: "Filters", value: "All / Active / Done" },
    ],
  },

  // ─── NOTE APP ─────────────────────────────────────────────────────────────
  {
    id: "note-app",
    title: "Note App",
    subtitle: "React Notes Manager",
    description:
      "Feature-rich note-taking application with create, edit, delete, and search functionality. Notes persist across sessions with a clean, distraction-free UI.",
    status: "live",
    architectureTags: ["CRUD", "Search", "Persistence", "React State"],
    techStack: [
      { label: "React", color: "blue" },
      { label: "Tailwind CSS", color: "blue" },
      { label: "LocalStorage", color: "default" },
    ],
    githubUrl: "https://github.com/hashimgujjar447",
  },

  // ─── WEATHER APP ──────────────────────────────────────────────────────────
  {
    id: "weather-app",
    title: "Weather App",
    subtitle: "Real-Time Weather Dashboard",
    description:
      "Live weather application consuming a public weather API. Displays current conditions, temperature, humidity, wind speed, and a multi-day forecast with dynamic icons based on weather state.",
    status: "live",
    architectureTags: ["API Integration", "Real-Time Data", "Responsive UI"],
    techStack: [
      { label: "React", color: "blue" },
      { label: "Tailwind CSS", color: "blue" },
      { label: "Weather API", color: "default" },
      { label: "Axios", color: "default" },
    ],
    githubUrl: "https://github.com/hashimgujjar447",
    metrics: [
      { label: "Data", value: "Live API" },
      { label: "Forecast", value: "Multi-day" },
    ],
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    icon: "Monitor",
    technologies: [
      { name: "React", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "Redux Toolkit", level: "expert" },
      { name: "TypeScript", level: "proficient" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "RTK Query", level: "proficient" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "Server",
    technologies: [
      { name: "Django", level: "expert" },
      { name: "Django REST Framework", level: "expert" },
      { name: "Node.js", level: "expert" },
      { name: "Express.js", level: "expert" },
      { name: "Python", level: "expert" },
    ],
  },
  {
    id: "realtime",
    label: "Real-Time",
    icon: "Zap",
    technologies: [
      { name: "WebSockets", level: "expert" },
      { name: "Django Channels", level: "expert" },
      { name: "Socket.IO", level: "proficient" },
      { name: "Redis Pub/Sub", level: "proficient" },
      { name: "Server-Sent Events", level: "proficient" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: "Database",
    technologies: [
      { name: "PostgreSQL", level: "expert" },
      { name: "MongoDB", level: "expert" },
      { name: "Redis", level: "proficient" },
      { name: "Prisma ORM", level: "proficient" },
      { name: "Mongoose ODM", level: "proficient" },
    ],
  },
  {
    id: "devops",
    label: "Tools & DevOps",
    icon: "Settings",
    technologies: [
      { name: "Git / GitHub", level: "expert" },
      { name: "Cloudinary", level: "proficient" },
      { name: "Vercel", level: "proficient" },
      { name: "DigitalOcean", level: "proficient" },
      { name: "Docker", level: "learning" },
      { name: "CI/CD Pipelines", level: "learning" },
    ],
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  // 1. Most recent — Full-Stack Engineer (2026 → Present)
  {
    id: "current",
    title: "Full-Stack Engineer",
    type: "milestone",
    period: "2026 — Present",
    description:
      "Building scalable SaaS products, real-time systems, and full-stack client applications.",
    highlights: [
      "Architected WorkflowHub — multi-tenant real-time SaaS with Django backend & Next.js frontend",
      "Implemented WebSocket + Django Channels for live collaboration",
      "Designed 5-level RBAC system with nested workspaces",
      "Built Ali AC — bilingual (EN/AR) business site with full admin CMS",
      "Developed Business Nexus — B2B real-time collaboration platform with Socket.IO",
    ],
    technologies: [
      "Django",
      "Next.js",
      "WebSockets",
      "PostgreSQL",
      "Redis",
      "Socket.IO",
      "Cloudinary",
    ],
  },

  // 2. Cyber Security — TEVTA (2026 → Present)
  {
    id: "cybersec",
    title: "Cyber Security — TEVTA",
    type: "education",
    period: "2026 — Present",
    description:
      "Enrolled in TEVTA Cyber Security program to complement backend security knowledge.",
    highlights: [
      "Network security fundamentals",
      "Secure coding practices",
      "Ethical hacking basics",
    ],
    technologies: ["Network Security", "Linux", "Ethical Hacking"],
  },

  // 3. Django Backend Engineering (2025 → 2026)
  {
    id: "django",
    title: "Django Backend Engineering",
    type: "milestone",
    period: "2025 — 2026",
    description:
      "Deep-dived into Django ecosystem, DRF, and backend system design patterns.",
    highlights: [
      "Built LMS backend with hierarchical data models",
      "Mastered Django Channels for WebSocket support",
      "Implemented complex RBAC and permission systems",
    ],
    technologies: ["Django", "DRF", "PostgreSQL", "Celery", "Redis"],
  },

  // 4. Developer Internships (2025 — 2025)
  {
    id: "internships",
    title: "Developer Internships",
    type: "milestone",
    period: "2025",
    description:
      "Worked across multiple companies gaining real-world full-stack experience.",
    highlights: [
      "10 Pearls Shine Pakistan — Built Todo app with MERN stack, user auth, and API logging",
      "SMB Digital Zone — Full-stack features, API optimization, and Agile collaboration",
      "Developers Hub Corporation — Auth systems, dashboards, REST APIs, and React + Tailwind UI",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Git",
      "Tailwind CSS",
    ],
  },

  // 5. MERN Stack Development (2023 → 2024)
  {
    id: "mern",
    title: "MERN Stack Development",
    type: "milestone",
    period: "2023 — 2024",
    description:
      "Developed full-stack MERN applications including e-commerce, B2B platforms, and utility apps.",
    highlights: [
      "Built complete e-commerce platform with Cloudinary image management",
      "Developed Business Nexus B2B networking platform",
      "Mastered Redux Toolkit for state management",
      "Built Todo, Note, and Weather utility applications",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Socket.IO",
    ],
  },

  // 6. BS Computer Science (2023 → Present)
  {
    id: "bscs",
    title: "BS Computer Science — University of Education Lahore",
    type: "education",
    period: "2023 — Present",
    description:
      "Pursuing a Bachelor of Science in Computer Science alongside active professional development.",
    highlights: [
      "Core CS fundamentals — data structures, algorithms, OOP",
      "Applying academic knowledge to real-world projects",
    ],
    technologies: ["C++", "Python", "Data Structures", "Algorithms"],
  },
];

export const CURRENT_FOCUS: CurrentFocus[] = [
  {
    id: "saas",
    title: "Real-Time SaaS Systems",
    description:
      "Expanding WorkflowHub with drag & drop Kanban, file attachments, and notification system.",
    status: "active",
    progress: 75,
  },
  {
    id: "lms",
    title: "LMS Backend Architecture",
    description:
      "Building scalable learning management system with advanced content delivery.",
    status: "active",
    progress: 45,
  },
  {
    id: "cybersec",
    title: "Cyber Security (TEVTA)",
    description:
      "Studying network security and secure backend development practices.",
    status: "active",
    progress: 60,
  },
  {
    id: "sysdesign",
    title: "System Design Mastery",
    description:
      "Deep study of distributed systems, caching strategies, and database optimization.",
    status: "learning",
    progress: 40,
  },
  {
    id: "scalability",
    title: "Backend Scalability",
    description:
      "Exploring horizontal scaling, load balancing, and microservices patterns.",
    status: "planning",
    progress: 20,
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "Email",
    value: "hashimgujjar4447@gmail.com",
    href: "mailto:hashimgujjar4447@gmail.com",
    icon: "Mail",
    type: "email",
  },
  {
    label: "GitHub",
    value: "github.com/hashimgujjar447",
    href: "https://github.com/hashimgujjar447",
    icon: "Github",
    type: "github",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muhammad-hashim-45b54b326",
    href: "https://linkedin.com/in/muhammad-hashim-45b54b326/",
    icon: "Linkedin",
    type: "linkedin",
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: "/Muhammad_hashim_full_stack_dev.pdf",
    icon: "FileText",
    type: "resume",
  },
];
