"use client";

// Export all motion presets
export {
    motionPresets,
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
    type MotionPresetName,
} from "./motion-presets";

// Export all spring configurations
export {
    springConfigs,
    tweenConfigs,
    staggerConfigs,
    layoutConfigs,
    scrollConfigs,
    performanceConfigs,
    reducedMotionConfigs,
    animationConfigs,
    getMotionConfig,
    type SpringConfigName,
    type TweenConfigName,
    type StaggerConfigName,
    type AnimationConfigCategory,
} from "./spring-configs";

// Re-export commonly used types from framer-motion
export type { Variants, Transition, AnimationProps } from "framer-motion";