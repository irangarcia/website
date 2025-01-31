"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader } from "@/components/ui/card";
import React from "react";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  period: string;
  url: string;
}
export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  period,
  url,
}: ResumeCardProps) => {
  return (
    <Card className="w-full flex cursor-pointer group">
      <a href={url} target="_blank" className="w-full p-3 -mr-3 -ml-3 rounded-lg hover:bg-[#F5F4F4] focus:bg-[#F5F4F4] flex">
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
              <strong className="inline-flex items-center justify-center font-medium leading-none text-sm">
                {title}
              </strong>
              <div className="text-xs tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-left flex text-muted-foreground text-sm">{subtitle}</div>}
          </CardHeader>
        </div>
      </a>
    </Card>
  );
};
