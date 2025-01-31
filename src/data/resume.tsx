import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const data = {
  name: "Iran Garcia",
  url: "https://irangarcia.co",
  description: "Software Engineer",
  summary: "Dedicated to creating user interfaces that not only look great but also feel effortless to use. I focus on making every interaction smooth and ensuring every feature is accessible. From fluid navigation to microinteractions, my goal is to create experiences that feel natural and enjoyable for everyone.",
  work: [
    {
      company: "Trafilea",
      title: "Senior Software Engineer",
      logoUrl: "/trafilea.png",
      start: "2024",
      end: "Now",
      url: "https://trafilea.com",
    },
    {
      company: "Croct",
      title: "Lead Software Engineer",
      logoUrl: "/croct.png",
      start: "2021",
      end: "2024",
      url: "https://croct.com",
    },
    {
      company: "Avanti",
      title: "Software Engineer",
      logoUrl: "/avanti.png",
      start: "2020",
      end: "2021",
      url: "https://penseavanti.com.br/",
    },
  ],
} as const;
