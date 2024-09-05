import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const data = {
  name: "Iran Garcia",
  url: "https://irangarcia.co",
  description: "Software Engineer",
  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in accumsan nulla. Donec lacinia commodo lacus, a semper turpis efficitur non. Nunc accumsan egestas tellus, eget luctus leo. Ut iaculis pellentesque tortor, ac dapibus nulla hendrerit nec. Vivamus vitae dictum turpis.",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
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
        name: "me@irangarcia.co",
        url: "mailto:me@irangarcia.co",
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
