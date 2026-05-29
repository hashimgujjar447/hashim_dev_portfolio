export const SITE_CONFIG = {
  name: "Muhammad Hashim",
  title: "Backend-Strong Full-Stack Developer",
  subtitle: "MERN + Django",
  tagline: "Building scalable backend systems and real-time web applications.",
  email: "hashim@example.com",
  github: "https://github.com/muhammadashim",
  linkedin: "https://linkedin.com/in/muhammadashim",
  resumeUrl: "/resume.pdf",
  availableForWork: true,
} as const;

export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.4 } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -12 },
    show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
  },
  staggerContainer: {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  },
} as const;
