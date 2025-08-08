"use client";

import { type Variants } from "framer-motion";
import { springConfigs } from "./spring-configs";

/**
 * Comprehensive animation presets library for Maslow Design System
 * All animations are GPU-accelerated and respect reduced motion preferences
 */

// Basic entrance animations
export const fadeInUp: Variants = {
    initial: {
        opacity: 0,
        y: 20,
        willChange: "transform, opacity",
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: springConfigs.gentle,
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: springConfigs.quick,
    },
};

export const scaleIn: Variants = {
    initial: {
        opacity: 0,
        scale: 0.95,
        willChange: "transform, opacity",
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: springConfigs.bouncy,
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        transition: springConfigs.quick,
    },
};

export const slideInFromLeft: Variants = {
    initial: {
        opacity: 0,
        x: -30,
        willChange: "transform, opacity",
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: springConfigs.smooth,
    },
    exit: {
        opacity: 0,
        x: -30,
        transition: springConfigs.quick,
    },
};

export const slideInFromRight: Variants = {
    initial: {
        opacity: 0,
        x: 30,
        willChange: "transform, opacity",
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: springConfigs.smooth,
    },
    exit: {
        opacity: 0,
        x: 30,
        transition: springConfigs.quick,
    },
};

export const slideInFromBottom: Variants = {
    initial: {
        opacity: 0,
        y: 30,
        willChange: "transform, opacity",
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: springConfigs.smooth,
    },
    exit: {
        opacity: 0,
        y: 30,
        transition: springConfigs.quick,
    },
};

// Stagger container animations
export const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.05,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

export const fastStaggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.02,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.02,
            staggerDirection: -1,
        },
    },
};

// Continuous motion animations
export const floatAnimation: Variants = {
    animate: {
        y: [0, -8, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
        },
    },
};

export const pulseAnimation: Variants = {
    animate: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Aurora-specific animations
export const shimmerEffect: Variants = {
    animate: {
        backgroundPosition: ["200% 0", "-200% 0"],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "linear",
        },
    },
};

export const auroraGlow: Variants = {
    animate: {
        boxShadow: [
            "0 0 20px rgba(109, 196, 173, 0.3)",
            "0 0 40px rgba(109, 196, 173, 0.5)",
            "0 0 20px rgba(109, 196, 173, 0.3)",
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

// Interactive hover animations
export const hoverLift: Variants = {
    hover: {
        y: -4,
        scale: 1.02,
        transition: springConfigs.responsive,
    },
    tap: {
        scale: 0.98,
        transition: springConfigs.quick,
    },
};

export const hoverGlow: Variants = {
    hover: {
        boxShadow: "0 0 30px rgba(109, 196, 173, 0.4)",
        transition: springConfigs.gentle,
    },
};

// Modal and overlay animations
export const modalBackdrop: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.2,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.15,
            ease: "easeIn",
        },
    },
};

export const modalContent: Variants = {
    initial: {
        opacity: 0,
        scale: 0.9,
        y: 20,
        willChange: "transform, opacity",
    },
    animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: springConfigs.bouncy,
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        y: 10,
        transition: springConfigs.quick,
    },
};

// Drawer and sidebar animations
export const slideInFromEdge: Variants = {
    initial: (direction: "left" | "right" | "top" | "bottom") => ({
        opacity: 0,
        x: direction === "left" ? -300 : direction === "right" ? 300 : 0,
        y: direction === "top" ? -300 : direction === "bottom" ? 300 : 0,
        willChange: "transform, opacity",
    }),
    animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: springConfigs.smooth,
    },
    exit: (direction: "left" | "right" | "top" | "bottom") => ({
        opacity: 0,
        x: direction === "left" ? -300 : direction === "right" ? 300 : 0,
        y: direction === "top" ? -300 : direction === "bottom" ? 300 : 0,
        transition: springConfigs.quick,
    }),
};

// Morphing animations for dynamic content
export const morphScale: Variants = {
    initial: {
        scale: 0.8,
        opacity: 0,
        willChange: "transform, opacity",
    },
    animate: {
        scale: 1,
        opacity: 1,
        transition: springConfigs.bouncy,
    },
    exit: {
        scale: 1.1,
        opacity: 0,
        transition: springConfigs.quick,
    },
};

// Text animation presets
export const textReveal: Variants = {
    initial: {
        opacity: 0,
        y: 20,
        skewY: 5,
        willChange: "transform, opacity",
    },
    animate: {
        opacity: 1,
        y: 0,
        skewY: 0,
        transition: springConfigs.smooth,
    },
};

export const characterStagger: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.03,
            delayChildren: 0.1,
        },
    },
};

export const characterReveal: Variants = {
    initial: {
        opacity: 0,
        y: 10,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

// Reduced motion alternatives
export const reducedMotionPresets = {
    fadeInUp: {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.15 } },
    },
    scaleIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.15 } },
    },
    slideInFromLeft: {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.15 } },
    },
    slideInFromRight: {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.15 } },
    },
    slideInFromBottom: {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.15 } },
    },
    staggerContainer: {
        initial: {},
        animate: { transition: { staggerChildren: 0.1 } },
        exit: {},
    },
    floatAnimation: {
        animate: {},
    },
    shimmerEffect: {
        animate: {},
    },
    hoverLift: {
        hover: { transition: { duration: 0.15 } },
        tap: { transition: { duration: 0.1 } },
    },
    modalContent: {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.15 } },
    },
} as const;

// Export all presets for easy access
export const motionPresets = {
    fadeInUp,
    scaleIn,
    slideInFromLeft,
    slideInFromRight,
    slideInFromBottom,
    staggerContainer,
    fastStaggerContainer,
    floatAnimation,
    pulseAnimation,
    shimmerEffect,
    auroraGlow,
    hoverLift,
    hoverGlow,
    modalBackdrop,
    modalContent,
    slideInFromEdge,
    morphScale,
    textReveal,
    characterStagger,
    characterReveal,
    reducedMotionPresets,
} as const;

export type MotionPresetName = keyof typeof motionPresets;