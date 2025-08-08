"use client";

import { type Transition } from "framer-motion";

/**
 * Spring physics configurations for Maslow Design System animations
 * Optimized for natural motion feel and performance
 */

// Base spring configurations
export const springConfigs = {
    // Gentle, natural spring - good for general UI elements
    gentle: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
        mass: 1,
    },

    // Bouncy spring - good for buttons and interactive elements  
    bouncy: {
        type: "spring" as const,
        stiffness: 400,
        damping: 17,
        mass: 1,
    },

    // Smooth, refined spring - good for overlays and modals
    smooth: {
        type: "spring" as const,
        stiffness: 350,
        damping: 25,
        mass: 1,
    },

    // Quick, snappy spring - good for quick interactions
    quick: {
        type: "spring" as const,
        stiffness: 500,
        damping: 30,
        mass: 0.8,
    },

    // Responsive spring - good for hover effects
    responsive: {
        type: "spring" as const,
        stiffness: 450,
        damping: 20,
        mass: 0.9,
    },

    // Soft spring - good for floating animations
    soft: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
        mass: 1.2,
    },

    // Dramatic spring - good for hero animations
    dramatic: {
        type: "spring" as const,
        stiffness: 250,
        damping: 12,
        mass: 1.5,
    },

    // Precise spring - good for form elements
    precise: {
        type: "spring" as const,
        stiffness: 400,
        damping: 30,
        mass: 0.8,
    },
} as const satisfies Record<string, Transition>;

// Tween configurations for linear animations
export const tweenConfigs = {
    // Quick fade
    quickFade: {
        duration: 0.15,
        ease: "easeOut" as const,
    },

    // Standard fade
    standardFade: {
        duration: 0.2,
        ease: "easeOut" as const,
    },

    // Smooth fade
    smoothFade: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1] as const,
    },

    // Entrance animation
    entrance: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
    },

    // Exit animation
    exit: {
        duration: 0.2,
        ease: [0.55, 0.085, 0.68, 0.53] as const,
    },

    // Continuous animation
    continuous: {
        duration: 2,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "reverse" as const,
    },

    // Shimmer effect
    shimmer: {
        duration: 1.5,
        ease: "linear" as const,
        repeat: Infinity,
    },

    // Aurora shift
    auroraShift: {
        duration: 3,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "reverse" as const,
    },
} as const satisfies Record<string, Transition>;

// Stagger configurations
export const staggerConfigs = {
    // Quick stagger - 50ms between children
    quick: {
        staggerChildren: 0.05,
        delayChildren: 0.02,
    },

    // Standard stagger - 100ms between children
    standard: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
    },

    // Slow stagger - 150ms between children
    slow: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
    },

    // Text stagger - optimized for text reveals
    text: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
    },

    // List stagger - optimized for list items
    list: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
    },

    // Grid stagger - optimized for grid layouts
    grid: {
        staggerChildren: 0.05,
        delayChildren: 0.02,
    },
} as const;

// Layout animation configurations
export const layoutConfigs = {
    // Standard layout transition
    standard: {
        type: "spring" as const,
        stiffness: 350,
        damping: 25,
        mass: 1,
    },

    // Quick layout transition
    quick: {
        type: "spring" as const,
        stiffness: 500,
        damping: 35,
        mass: 0.8,
    },

    // Smooth layout transition
    smooth: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        mass: 1,
    },
} as const satisfies Record<string, Transition>;

// Scroll-based animation configurations
export const scrollConfigs = {
    // Standard scroll reveal
    reveal: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
        mass: 1,
    },

    // Parallax scroll
    parallax: {
        type: "tween" as const,
        ease: "easeOut",
        duration: 0.3,
    },

    // Sticky scroll
    sticky: {
        type: "spring" as const,
        stiffness: 400,
        damping: 25,
        mass: 0.9,
    },
} as const satisfies Record<string, Transition>;

// Performance-optimized configurations
export const performanceConfigs = {
    // GPU-accelerated spring
    gpuSpring: {
        type: "spring" as const,
        stiffness: 400,
        damping: 20,
        mass: 1,
        velocity: 0,
        restDelta: 0.01,
        restSpeed: 0.01,
    },

    // Minimal repaint transition
    minimalRepaint: {
        duration: 0.2,
        ease: "easeOut" as const,
    },

    // Transform-only transition
    transformOnly: {
        type: "spring" as const,
        stiffness: 350,
        damping: 25,
        mass: 1,
    },
} as const satisfies Record<string, Transition>;

// Reduced motion alternatives
export const reducedMotionConfigs = {
    // Instant transition
    instant: {
        duration: 0,
    },

    // Quick fade only
    fadeOnly: {
        duration: 0.15,
        ease: "easeOut" as const,
    },

    // Minimal motion
    minimal: {
        duration: 0.2,
        ease: "easeOut" as const,
    },
} as const satisfies Record<string, Transition>;

// Utility function to get appropriate config based on motion preference
export function getMotionConfig(
    preferredConfig: Transition,
    reducedConfig: Transition,
    prefersReducedMotion: boolean,
): Transition {
    return prefersReducedMotion ? reducedConfig : preferredConfig;
}

// Export all configurations for easy access
export const animationConfigs = {
    spring: springConfigs,
    tween: tweenConfigs,
    stagger: staggerConfigs,
    layout: layoutConfigs,
    scroll: scrollConfigs,
    performance: performanceConfigs,
    reducedMotion: reducedMotionConfigs,
} as const;

export type SpringConfigName = keyof typeof springConfigs;
export type TweenConfigName = keyof typeof tweenConfigs;
export type StaggerConfigName = keyof typeof staggerConfigs;
export type AnimationConfigCategory = keyof typeof animationConfigs;