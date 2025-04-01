/* eslint-disable @next/next/no-img-element */
import { type FunctionComponent } from "react";
import { Pause, FastForward, Airplay, LucideAirplay } from "lucide-react";
import { Icons } from "../icons";

export const Music: FunctionComponent = () => {
  return (
    <div
      className="flex w-[284px] px-5 py-6 flex-col gap-4 rounded-full bg-[#080808] relative"
    >
      <div className="flex items-center gap-2">
        <img src="/bowie-low.jpeg" alt="David Bowie - Sound and Vision album cover" className="size-12 bg-contain rounded-xl" />
        <div className="flex flex-col">
          <span className="text-sm leading-6 font-medium text-[#FBFBFB]">Sound and Vision</span>
          <span className="text-sm leading-none text-[#969694] font-medium">David Bowie</span>
        </div>
        <div className="ml-auto self-baseline">
          <WaveAnimation />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#7C7C7C]">1:02</span>
          <div className="flex-1 h-1.5 rounded-full cursor-pointer bg-[#3D3F3F]">
            <div className="w-1/3 h-full rounded-es-full rounded-ss-full rounded-ee-none rounded-se-none bg-[#9FA19E]" />
          </div>
          <span className="text-xs text-[#7C7C7C]">-3:04</span>
        </div>

        <div className="flex justify-center gap-5 items-center">
          <button className="group">
            <FastForward strokeWidth={2} className="size-5 text-white fill-white group-hover:fill-white/90 group-hover:text-white/90 transition-colors rotate-180" />
          </button>
          <button className="group">
            <Pause strokeWidth={1} className="size-8 text-white fill-white group-hover:fill-white/90 group-hover:text-white/90 transition-colors"/>
          </button>
          <button className="group">
            <FastForward strokeWidth={2} className="size-5 text-white fill-white group-hover:fill-white/90 group-hover:text-white/90 transition-colors" />
          </button>
          <button className="absolute right-6 group">
            <Icons.airplay className="text-white group-hover:text-white/90 transition-colors size-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const WaveAnimation: FunctionComponent = () => {
  return (
    <div className="flex items-center gap-[2px]">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="w-[2px] h-3 bg-[#FF2D55] rounded-sm"
          style={{
            animation: "wave 0.5s ease-in-out infinite",
            animationDelay: `${i * 0.1}s`,
            background: `linear-gradient(to bottom, #b47539, #af6934, #aa5f31)`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            transform: scaleY(0.3);
          }
          50% {
            transform: scaleY(1);
          }
        }
      `}</style>
    </div>
  );
}; 