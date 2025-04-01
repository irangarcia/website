"use client";

import React, { useMemo, useState } from "react";
import { Ring } from "./ring";
import { Timer } from "./timer";
import { AnimatePresence, motion } from "framer-motion";
import { ANIMATION_VARIANTS, BOUNCE_VARIANTS } from "./constants";
import { IncomingCall } from "./incoming-call";
import { Music } from "./music";

export const DynamicIsland = () => {
  const [view, setView] = useState("timer");
  const [variantKey, setVariantKey] = useState("idle");

  const content = useMemo(() => {
    switch (view) {
      case "ring":
        return <Ring />;
      case "timer":
        return <Timer />;
      case "call":
        return <IncomingCall />;
      case "music":
        return <Music />;
      case "idle":
        return <div className="h-7" />;
    }
  }, [view]);

  return (
    <div>
      <div className="flex flex-wrap w-full justify-center gap-4 mb-4">
        {["idle", "ring", "timer", "call", "music"].map((v) => (
          <button
            type="button"
            className="rounded-full capitalize w-32 h-10 bg-white px-2.5 py-1.5 text-sm font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300/50 hover:bg-gray-50"
            onClick={() => {
              setView(v);
              setVariantKey(`${view}-${v}`);
            }}
            key={v}
          >
            {v}
          </button>
        ))}
      </div>
      <div className="relative flex h-full w-full flex-col justify-between">

        <motion.div
          layout
          transition={{
            type: "spring",
            bounce: BOUNCE_VARIANTS[variantKey as keyof typeof BOUNCE_VARIANTS],
          }}
          style={{ borderRadius: 32 }}
          className="mx-auto w-fit min-w-[100px] overflow-hidden rounded-full bg-black"
        >
          <motion.div
            transition={{
              type: "spring",
              bounce: BOUNCE_VARIANTS[variantKey as keyof typeof BOUNCE_VARIANTS],
            }}
            initial={{
              scale: 0.9,
              opacity: 0,
              filter: "blur(5px)",
              originX: 0.5,
              originY: 0.5,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              filter: "blur(0px)",
              originX: 0.5,
              originY: 0.5,
              transition: {
                delay: 0.05,
              },
            }}
            key={view}
          >
            {content}
          </motion.div>
        </motion.div>

        <div className="pointer-events-none absolute left-1/2 top-0 flex h-[200px] w-[300px] -translate-x-1/2 items-start justify-center">
          <AnimatePresence
            mode="popLayout"
            custom={ANIMATION_VARIANTS[variantKey as keyof typeof ANIMATION_VARIANTS]}
          >
            <motion.div
              initial={{ opacity: 0 }}
              exit="exit"
              variants={variants}
              key={view}
            >
              {content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}


const variants = {
  exit: (transition: any) => {
    return {
      ...transition,
      opacity: [1, 0],
      filter: "blur(5px)",
    };
  },
};
