# Muhammad Hashim — Developer Portfolio

A modern, dashboard-style developer portfolio built like a SaaS engineering control center.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (icons)
- **Geist Font**

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles + CSS variables
│   ├── layout.tsx           # Root layout with font setup
│   └── page.tsx             # Main page (composes all sections)
│
├── components/
│   ├── layout/              # App-level layout components
│   │   ├── Sidebar.tsx      # Fixed sidebar navigation
│   │   ├── CommandPalette.tsx  # ⌘K command palette
│   │   └── index.ts
│   │
│   ├── sections/            # Full-page sections
│   │   ├── OverviewSection.tsx   # Hero + metrics
│   │   ├── ProjectsSection.tsx   # Project grid
│   │   ├── ProjectCard.tsx       # Reusable project card
│   │   ├── SystemDesignSection.tsx  # Architecture diagrams
│   │   ├── TechStackSection.tsx  # Tech categories
│   │   ├── ExperienceSection.tsx # Timeline + current focus
│   │   ├── ContactSection.tsx    # Contact links
│   │   └── index.ts
│   │
│   └── ui/                  # Reusable primitives
│       ├── Badge.tsx         # Tech badge chip
│       ├── StatusDot.tsx     # Live/In-Progress/Archived indicator
│       ├── SectionHeader.tsx # Consistent section titles
│       └── index.ts
│
├── hooks/
│   ├── useActiveSection.ts  # Tracks active section on scroll
│   ├── useCommandPalette.ts # ⌘K toggle + keyboard shortcuts
│   ├── useMobileMenu.ts     # Mobile sidebar state
│   └── index.ts
│
├── data/
│   └── index.ts             # All portfolio content (projects, tech, experience)
│
├── types/
│   └── index.ts             # TypeScript interfaces
│
└── lib/
    └── utils.ts             # cn(), color helpers, formatting utils
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customization

### Update Your Info
All content is centralized in `src/data/index.ts`:
- `NAV_ITEMS` — sidebar navigation
- `DASHBOARD_METRICS` — hero metric cards
- `PROJECTS` — project cards with system design flows
- `TECH_CATEGORIES` — technology skill groups
- `EXPERIENCE_ITEMS` — career timeline
- `CURRENT_FOCUS` — what you're building now
- `CONTACT_LINKS` — contact info

### Add a New Section
1. Create `src/components/sections/YourSection.tsx`
2. Export from `src/components/sections/index.ts`
3. Add to `NAV_ITEMS` in `src/data/index.ts`
4. Add `id="your-section"` and import in `src/app/page.tsx`

### Add a New Project
Add to `PROJECTS` array in `src/data/index.ts`:
```ts
{
  id: "my-project",
  title: "My Project",
  subtitle: "What it does",
  description: "...",
  featured: false,
  status: "live",
  architectureTags: ["REST API", "Real-Time"],
  techStack: [
    { label: "Django", color: "green" },
    { label: "React", color: "blue" },
  ],
  githubUrl: "https://github.com/...",
  liveUrl: "https://...",
}
```

## Features

- **Fixed sidebar** with animated active indicator
- **⌘K Command Palette** for quick navigation
- **Scroll spy** — sidebar highlights active section
- **Expandable system design** flows per project
- **Animated progress bars** in experience section
- **Mobile-responsive** with hamburger drawer
- **Framer Motion** — subtle, purposeful animations
- **Dark theme** with Vercel/Linear aesthetic

## Design System

Colors from `src/app/globals.css` CSS variables. Tailwind tokens in `tailwind.config.ts`.

Status colors: `live` = emerald, `in-progress` = amber, `archived` = zinc  
Tech badge colors: `blue`, `green`, `orange`, `purple`, `red`, `yellow`
