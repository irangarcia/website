"use client";

import { FunctionComponent, useState } from "react";
import { Check, Copy } from "lucide-react";

type InlineCopyCodeProps = {
  children: string;
}

export const InlineCopyCode: FunctionComponent<InlineCopyCodeProps> = ({
  children
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(children);
    
    setIsCopied(true);
    
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <button
      className="inline-flex cursor-pointer relative"
      onClick={handleCopy}
      aria-label={isCopied ? "Copied to clipboard" : "Copy to clipboard"}
    >
      <code className="inline-flex place-items-baseline gap-1">
        <div className="self-center relative size-3 overflow-hidden">
          <span className={`absolute flex items-center font-medium text-green-600 transition-transform duration-300 ease-out -translate-y-full ${isCopied && "translate-y-0"}`}>
            <Check className="text-green-500" size={14} />
          </span>
          <Copy className={`text-gray-500 size-3 transition duration-300 ease-out ${isCopied && "translate-y-full"}`}  />
        </div>
        <span className="text-sm">
          {children}
        </span>
      </code>
    </button>
  );
};