
export const ANIMATION_VARIANTS = {
    "ring-idle": {
        scale: 0.9,
        scaleX: 0.9,
        bounce: 0.5,
    },
    "timer-ring": {
        scale: 0.7,
        y: -7.5,
        bounce: 0.35,
    },
    "ring-timer": {
        scale: 1.4,
        y: 7.5,
        bounce: 0.35,
    },
    "timer-idle": {
        scale: 0.7,
        y: -7.5,
        bounce: 0.3,
    },
    "ring-call": {
        scale: 1.4,
        y: 7.5,
        bounce: 0.35,
    },
};

export const BOUNCE_VARIANTS = {
    idle: 0.5,
    "ring-idle": 0.5,
    "timer-ring": 0.35,
    "ring-timer": 0.35,
    "timer-idle": 0.3,
    "idle-timer": 0.3,
    "idle-ring": 0.5,
    // call
    "idle-call": 0.3,
    "ring-call": 0.35,
    // music,
    "timer-music": 0.3,
    "call-music": 0.3,
    "ring-music": 0.3,
    "music-call": 0.3,
    "music-timer": 0.3,
    "music-ring": 0.3,
    "music-idle": 0.3,
};
