/**
 * Spring Physics Configurations
 * 
 * Optimized spring physics settings for natural, high-performance animations
 * in the Maslow Design System. All configurations include reduced motion
 * alternatives and are tuned for 60fps performance.
 */

import type { SpringOptions, Transition } from "framer-motion";

// ===== CORE SPRING CONFIGURATIONS =====

/**
 * Default spring - Balanced for most UI interactions
 * Perfect for buttons, cards, and general UI elements
 */
export const defaultSpring: SpringOptions = {
    type: "spring",
    stiffness: 400,
    damping: 25,
    mass: 1,
    restDelta: 0.01,
    restSpeed: 0.01,
};

/**
 * Gentle spring - Soft, elegant motion
 * Great for large content areas and subtle animations
 */
export const gentleSpring: SpringOptions = {
    type: "spring",
    stiffness: 200,
    damping: 20,
    mass: 1.2,
    restDelta: 0.01,
    restSpeed: 0.01,
};

/**
 * Bouncy spring - Playful, attention-grabbing
 * Perfect for success states, notifications, and fun interactions
 */
export const bouncySpring: SpringOptions = {
    type: "spring",
    stiffness: 400,
    damping: 17,
    mass: 1,
    restDelta: 0.01,
    restSpeed: 0.01,
};

/**
 * Quick spring - Fast, snappy response
 * Ideal for hover states and immediate feedback
 */
export const quickSpring: SpringOptions = {
    type: "spring",
    stiffness: 600,
    damping: 25,
    mass: 0.8,
    restDelta: 0.01,
    restSpeed: 0.01,
};

/**
 * Responsive spring - UI-optimized
 * Best for form inputs, toggles, and interactive controls
 */
export const responsiveSpring: SpringOptions = {
    type: "spring",
    stiffness: 400,
    damping: 25,
    mass: 0.9,
    restDelta: 0.01,
    restSpeed: 0.01,
};

/**
 * Soft spring - Very subtle motion
 * Perfect for background animations and ambient effects
 */
export const softSpring: SpringOptions = {
    type: "spring",
    stiffness: 150,
    damping: 25,
    mass: 1.5,
    restDelta: 0.01,
    restSpeed: 0.01,
};

/**
 * Dramatic spring - Bold, expressive motion
 * Great for modals, drawers, and prominent state changes
 */
export const dramaticSpring: SpringOptions = {
    type: "spring",
    stiffness: 300,
    damping: 15,
    mass: 1,
    restDelta: 0.01,
    restSpeed: 0.01,
};

/**
 * Precise spring - Controlled, exact motion
 * Perfect for sliders, progress indicators, and precise positioning
 */
export const preciseSpring: SpringOptions = {
    type: "spring",
    stiffness: 500,
    damping: 30,
    mass: 0.9,
    restDelta: 0.001,
    restSpeed: 0.001,
};

// ===== SPRING CONFIGURATION MAP =====

export const springConfigs = {
    default: defaultSpring,
    gentle: gentleSpring,
    bouncy: bouncySpring,
    quick: quickSpring,
    responsive: responsiveSpring,
    soft: softSpring,
    dramatic: dramaticSpring,
    precise: preciseSpring,
} as const;

// ===== SPECIALIZED SPRING CONFIGURATIONS =====

/**
 * Aurora-specific spring configurations
 * Optimized for aurora gradient animations and effects
 */
export const auroraSpringConfigs = {
    // For aurora button hover effects
    button: {
        type: "spring" as const,
        stiffness: 400,
        damping: 17,
        mass: 0.8,
        restDelta: 0.01,
    },
    // For aurora text shimmer effects
    shimmer: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        mass: 1,
        restDelta: 0.01,
    },
    // For aurora gradient shifts
    gradient: {
        type: "spring" as const,
        stiffness: 300,
        damping: 25,
        mass: 1.2,
        restDelta: 0.01,
    },
    // For aurora glow effects
    glow: {
        type: "spring" as const,
        stiffness: 150,
        damping: 15,
        mass: 1,
        restDelta: 0.01,
    },
} as const;

/**
 * Glass morphism spring configurations
 * Optimized for glassmorphic elements and blur effects
 */
export const glassSpringConfigs = {
    // For glass card hover states
    card: {
        type: "spring" as const,
        stiffness: 300,
        damping: 25,
        mass: 1,
        restDelta: 0.01,
    },
    // For glass backdrop blur transitions
    blur: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
        mass: 1.2,
        restDelta: 0.01,
    },
    // For glass element opacity changes
    opacity: {
        type: "spring" as const,
        stiffness: 400,
        damping: 30,
        mass: 0.8,
        restDelta: 0.01,
    },
} as const;

// ===== REDUCED MOTION CONFIGURATIONS =====

/**
 * Reduced motion alternatives for spring configurations
 * Provides immediate, accessible motion for users who prefer reduced motion
 */
export const reducedMotionSprings = {
    default: { duration: 0.2, ease: "easeOut" as const },
    gentle: { duration: 0.3, ease: "easeOut" as const },
    bouncy: { duration: 0.15, ease: "easeOut" as const },
    quick: { duration: 0.1, ease: "easeOut" as const },
    responsive: { duration: 0.15, ease: "easeOut" as const },
    soft: { duration: 0.4, ease: "easeOut" as const },
    dramatic: { duration: 0.2, ease: "easeInOut" as const },
    precise: { duration: 0.2, ease: "linear" as const },
} as const;

// ===== PERFORMANCE-OPTIMIZED TRANSITIONS =====

/**
 * Pre-configured transitions for common animation patterns
 * All optimized for GPU acceleration and smooth 60fps performance
 */
export const transitionPresets = {
    // Immediate feedback transitions
    instant: { duration: 0.1, ease: "easeOut" as const },
    fast: { duration: 0.2, ease: "easeOut" as const },
    medium: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
    slow: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    
    // Spring-based transitions
    springFast: quickSpring,
    springMedium: defaultSpring,
    springSlow: gentleSpring,
    springBouncy: bouncySpring,
    
    // Specialized transitions
    modal: dramaticSpring,
    tooltip: quickSpring,
    drawer: responsiveSpring,
    notification: bouncySpring,
} as const;

// ===== STAGGER TIMING CONFIGURATIONS =====

/**
 * Optimized stagger timings for container animations
 * Provides natural, flowing animations for lists and grids
 */
export const staggerConfigs = {
    // Fast stagger for small lists (< 10 items)
    fast: {
        staggerChildren: 0.03,
        delayChildren: 0,
    },
    // Standard stagger for medium lists (10-50 items)
    standard: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
    },
    // Slow stagger for large lists or dramatic effect
    slow: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
    },
    // Custom stagger for specific use cases
    card: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
    },
    text: {
        staggerChildren: 0.02,
        delayChildren: 0,
    },
    button: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
    },
} as const;

// ===== UTILITY FUNCTIONS =====

/**
 * Get spring configuration with reduced motion support
 */
export function getSpringConfig(
    configName: keyof typeof springConfigs,
    prefersReducedMotion: boolean = false
): Transition {
    if (prefersReducedMotion) {
        return reducedMotionSprings[configName];
    }
    return springConfigs[configName];
}

/**
 * Get aurora-specific spring configuration
 */
export function getAuroraSpring(
    configName: keyof typeof auroraSpringConfigs,
    prefersReducedMotion: boolean = false
): Transition {
    if (prefersReducedMotion) {
        return reducedMotionSprings.default;
    }
    return auroraSpringConfigs[configName];
}

/**
 * Get glass-specific spring configuration
 */
export function getGlassSpring(
    configName: keyof typeof glassSpringConfigs,
    prefersReducedMotion: boolean = false
): Transition {
    if (prefersReducedMotion) {
        return reducedMotionSprings.default;
    }
    return glassSpringConfigs[configName];
}

/**
 * Create custom spring configuration with reduced motion fallback
 */
export function createSpringConfig(
    config: SpringOptions,
    reducedMotionFallback?: Transition
): (prefersReducedMotion: boolean) => Transition {
    return (prefersReducedMotion: boolean) => {
        if (prefersReducedMotion) {
            return reducedMotionFallback || reducedMotionSprings.default;
        }
        return config;
    };
}

// ===== TYPE EXPORTS =====

export type SpringConfigName = keyof typeof springConfigs;
export type AuroraSpringName = keyof typeof auroraSpringConfigs;
export type GlassSpringName = keyof typeof glassSpringConfigs;
export type TransitionPresetName = keyof typeof transitionPresets;
export type StaggerConfigName = keyof typeof staggerConfigs;