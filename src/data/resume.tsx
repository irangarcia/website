import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const data = {
  name: "Iran Garcia",
  url: "https://irangarcia.co",
  description: "Software Engineer",
  summary: "Focused on building products that balance performance, design, and user delight.",
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
