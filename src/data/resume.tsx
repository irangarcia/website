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
      title: "Senior Frontend Engineer",
      logoUrl: "/trafilea.png",
      start: "August 2024",
      end: "Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in accumsan nulla. Donec lacinia commodo lacus, a semper turpis efficitur non. Nunc accumsan egestas tellus, eget luctus leo. Ut iaculis pellentesque tortor, ac dapibus nulla hendrerit nec. Vivamus vitae dictum turpis. Nunc eget diam porta, porta ante quis, gravida leo. Suspendisse id pretium dolor.",
    },
    {
      company: "Croct",
      title: "Lead Frontend Engineer",
      logoUrl: "/croct.png",
      start: "May 2021",
      end: "August 2024",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in accumsan nulla. Donec lacinia commodo lacus, a semper turpis efficitur non. Nunc accumsan egestas tellus, eget luctus leo. Ut iaculis pellentesque tortor, ac dapibus nulla hendrerit nec. Vivamus vitae dictum turpis. Nunc eget diam porta, porta ante quis, gravida leo. Suspendisse id pretium dolor.",
    },
    {
      company: "Avanti",
      title: "Frontend Engineer",
      logoUrl: "/avanti.png",
      start: "April 2020",
      end: "May 2021",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in accumsan nulla. Donec lacinia commodo lacus, a semper turpis efficitur non. Nunc accumsan egestas tellus, eget luctus leo. Ut iaculis pellentesque tortor, ac dapibus nulla hendrerit nec. Vivamus vitae dictum turpis. Nunc eget diam porta, porta ante quis, gravida leo. Suspendisse id pretium dolor.",
    },
  ],
} as const;
