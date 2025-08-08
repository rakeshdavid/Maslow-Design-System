/**
 * Motion Animation Presets Library
 * 
 * Comprehensive collection of Framer Motion animation presets optimized
 * for the Maslow Design System. All animations include GPU acceleration
 * and reduced motion support.
 */

import type { Variants, Transition } from "framer-motion";

// ===== ENTRANCE ANIMATIONS =====

export const fadeInUp: Variants = {
    initial: {
        opacity: 0,
        y: 20,
        filter: "blur(6px)",
    },
    animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
            filter: { duration: 0.3 },
        },
    },
    exit: {
        opacity: 0,
        y: -10,
        filter: "blur(4px)",
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

export const fadeInDown: Variants = {
    initial: {
        opacity: 0,
        y: -20,
        filter: "blur(6px)",
    },
    animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
    exit: {
        opacity: 0,
        y: 10,
        filter: "blur(4px)",
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

export const scaleIn: Variants = {
    initial: {
        scale: 0.9,
        opacity: 0,
        filter: "blur(4px)",
    },
    animate: {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 25,
            mass: 0.8,
        },
    },
    exit: {
        scale: 0.95,
        opacity: 0,
        filter: "blur(2px)",
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
};

export const slideInFromLeft: Variants = {
    initial: {
        x: -100,
        opacity: 0,
        filter: "blur(6px)",
    },
    animate: {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        },
    },
    exit: {
        x: -50,
        opacity: 0,
        filter: "blur(4px)",
        transition: {
            duration: 0.3,
        },
    },
};

export const slideInFromRight: Variants = {
    initial: {
        x: 100,
        opacity: 0,
        filter: "blur(6px)",
    },
    animate: {
        x: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        },
    },
    exit: {
        x: 50,
        opacity: 0,
        filter: "blur(4px)",
        transition: {
            duration: 0.3,
        },
    },
};

// ===== CONTINUOUS ANIMATIONS =====

export const floatAnimation: Variants = {
    animate: {
        y: [-8, 8, -8],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

export const auroraGlow: Variants = {
    animate: {
        filter: [
            "hue-rotate(0deg) drop-shadow(0 0 20px rgba(109,196,173,0.3))",
            "hue-rotate(30deg) drop-shadow(0 0 30px rgba(109,196,173,0.5))",
            "hue-rotate(0deg) drop-shadow(0 0 20px rgba(109,196,173,0.3))",
        ],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

export const pulseGlow: Variants = {
    animate: {
        scale: [1, 1.02, 1],
        filter: [
            "drop-shadow(0 0 10px rgba(109,196,173,0.2))",
            "drop-shadow(0 0 25px rgba(109,196,173,0.4))",
            "drop-shadow(0 0 10px rgba(109,196,173,0.2))",
        ],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// ===== HOVER ANIMATIONS =====

export const hoverLift: Variants = {
    initial: { y: 0, scale: 1 },
    hover: {
        y: -4,
        scale: 1.02,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 17,
        },
    },
    tap: {
        y: 0,
        scale: 0.98,
        transition: {
            type: "spring",
            stiffness: 600,
            damping: 25,
        },
    },
};

export const hoverScale: Variants = {
    initial: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 25,
        },
    },
    tap: {
        scale: 0.95,
        transition: {
            type: "spring",
            stiffness: 600,
            damping: 25,
        },
    },
};

export const hoverRotate: Variants = {
    initial: { rotate: 0 },
    hover: {
        rotate: 5,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
        },
    },
};

// ===== STAGGER CONTAINERS =====

export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

export const staggerContainerFast: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.02,
            staggerDirection: -1,
        },
    },
};

// ===== MODAL/DRAWER ANIMATIONS =====

export const modalContent: Variants = {
    initial: {
        scale: 0.8,
        opacity: 0,
        y: 50,
        filter: "blur(10px)",
    },
    animate: {
        scale: 1,
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.4,
        },
    },
    exit: {
        scale: 0.9,
        opacity: 0,
        y: 30,
        filter: "blur(6px)",
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
};

export const slideUpDrawer: Variants = {
    initial: {
        y: "100%",
        opacity: 0.8,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
    exit: {
        y: "100%",
        opacity: 0.8,
        transition: {
            duration: 0.3,
            ease: [0.4, 0, 1, 1],
        },
    },
};

export const slideInDrawer: Variants = {
    initial: {
        x: "100%",
        opacity: 0.8,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
    exit: {
        x: "100%",
        opacity: 0.8,
        transition: {
            duration: 0.3,
            ease: [0.4, 0, 1, 1],
        },
    },
};

// ===== SPECIAL EFFECTS =====

export const shimmerEffect: Variants = {
    animate: {
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
        },
    },
};

export const morphingShape: Variants = {
    animate: {
        borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

export const auroraTextShift: Variants = {
    animate: {
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        filter: ["hue-rotate(0deg)", "hue-rotate(30deg)", "hue-rotate(0deg)"],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// ===== REDUCED MOTION ALTERNATIVES =====

export const reduceMotionPresets = {
    fadeInUp: {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.1 } },
    },
    scaleIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.1 } },
    },
    slideInFromLeft: {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.1 } },
    },
    staggerContainer: {
        initial: {},
        animate: { transition: { staggerChildren: 0.02, delayChildren: 0 } },
        exit: { transition: { staggerChildren: 0.01, staggerDirection: -1 } },
    },
} as const;

// ===== SPRING PHYSICS PRESETS =====

export const springPresets = {
    // Quick and snappy
    quick: { stiffness: 600, damping: 25, mass: 0.8 },
    // Bouncy and playful
    bouncy: { stiffness: 400, damping: 17, mass: 1 },
    // Smooth and gentle
    gentle: { stiffness: 200, damping: 20, mass: 1 },
    // Responsive for UI elements
    responsive: { stiffness: 400, damping: 25, mass: 0.8 },
    // Soft and subtle
    soft: { stiffness: 150, damping: 25, mass: 1.2 },
    // Dramatic and attention-grabbing
    dramatic: { stiffness: 300, damping: 15, mass: 1 },
    // Precise and controlled
    precise: { stiffness: 500, damping: 30, mass: 0.9 },
    // Default for most use cases
    default: { stiffness: 400, damping: 25, mass: 1 },
} as const;

// ===== GPU ACCELERATION UTILITIES =====

export const gpuAcceleration = {
    transform: "translateZ(0)",
    willChange: "transform, opacity, filter",
    backfaceVisibility: "hidden" as const,
};

// ===== PERFORMANCE OPTIMIZED TRANSITIONS =====

export const performantTransitions: Record<string, Transition> = {
    fast: { duration: 0.2, ease: "easeOut" },
    medium: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
    slow: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    spring: { type: "spring", ...springPresets.default },
    bounceIn: { type: "spring", ...springPresets.bouncy },
    smoothOut: { type: "spring", ...springPresets.gentle },
};

export type SpringPreset = keyof typeof springPresets;
export type TransitionPreset = keyof typeof performantTransitions;