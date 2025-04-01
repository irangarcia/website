import { type FunctionComponent } from "react";
import { Phone } from "lucide-react";

export const IncomingCall: FunctionComponent = () => {
  return (
    <div
      className="flex w-[284px] items-center gap-3 px-4 py-3"
    >
      <div className="flex items-center gap-2">
        <div className="size-10 flex items-center justify-center text-white text-lg rounded-full" style={{ background: "radial-gradient(circle, #a0a4aa, #5c5f63)" }}>
          I
        </div>
        <div className="flex flex-col">
          <span
            className="text-xs text-[#797979]"
          >
            mobile
          </span>
          <span
            className="text-sm leading-4 font-medium text-white"
          >
            Iran Garcia
          </span>
        </div>
      </div>

      <div className="flex gap-2 ml-auto">
        <button
          className="flex size-9 items-center justify-center rounded-full bg-[#FD5146] hover:bg-[#FD5146]/95 transition-colors"
        >
          <Phone strokeWidth={0.5} className="size-4 rotate-[135deg] fill-white text-white" />
        </button>
        <button
          className="flex size-9 items-center justify-center rounded-full bg-[#36D463] hover:bg-[#36D463]/95 transition-colors"
        >
          <Phone className="size-4 text-white fill-white" />
        </button>
      </div>
    </div>
  );
};