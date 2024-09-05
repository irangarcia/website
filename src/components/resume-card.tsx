"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  period: string;
  description?: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (description) {
      event.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <button
      className="w-full overflow-hidden block cursor-pointer px-[2px] py-2 group"
      onClick={handleClick}
    >
      <Card className="flex">
        <div className="flex-none">
          <Avatar className="border size-8 m-auto">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-grow flex ml-4 gap-y-2 flex-col">
          <CardHeader>
            <div className="flex items-center justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center justify-center font-medium leading-none text-sm">
                {title}
                <ChevronRightIcon
                  className={cn(
                    "size-3 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-focus:translate-x-1 group-focus:opacity-100 group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-left flex text-muted-foreground text-sm">{subtitle}</div>}
          </CardHeader>
          <AnimatePresence initial={false} mode="wait">
            {isExpanded && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{
                  opacity: 0,
                  height: 0
                }}
                transition={{
                  duration: 0.25,
                  ease:'easeInOut',
                }}
              >
                <div className="text-sm text-left text-muted-foreground">
                  {description}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </button>
  );
};
