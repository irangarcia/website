import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const data = {
  name: "Iran Garcia",
  url: "https://irangarcia.co",
  description: "Software Engineer",
  summary: "Dedicated to creating user interfaces that are both stunning and straightforward, I focus on making every interaction smooth and every feature accessible. Whether it's fluid navigation or microinteractions, my goal is to ensure the best possible experience for every user.",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    section: "Have a question, suggestion or want to connect? Send me a message on LinkedIn or via email. I look forward to hearing from you.",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/irangarcia",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/garcia-iran",
        icon: Icons.linkedin,
        navbar: true,
      },
      Email: {
        name: "irangarciaj@gmail.com",
        url: "mailto:irangarciaj@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Trafilea",
      title: "Senior Software Engineer",
      logoUrl: "/trafilea.png",
      start: "August 2024",
      end: "Present",
      description: "In progress.",
    },
    {
      company: "Croct",
      title: "Lead Software Engineer",
      logoUrl: "/croct.png",
      start: "May 2021",
      end: "August 2024",
      description: "Developed a design system with 20+ reusable components using TypeScript, Emotion, and Storybook. Managed a team. Structured, architected, and built high-performance web platforms with React and Next.js. Optimized CI/CD with GitHub Actions, implemented extensive test coverage, and enhanced a11y.",
    },
    {
      company: "Avanti",
      title: "Software Engineer",
      logoUrl: "/avanti.png",
      start: "April 2020",
      end: "May 2021",
      description: "Revamped an e-commerce category page for a leading lingerie brand in Brazil, boosting conversion rates. Developed free shipping bar using real time information with React and GraphQL. Enhanced the onboarding for B2B customers with a personalized sign-up form using React, GraphQL, and TypeScript.",
    },
  ],
} as const;
