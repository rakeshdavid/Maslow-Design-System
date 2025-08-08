/**
 * Motion Animation Presets Library - Barrel Exports
 * 
 * Central export hub for all Maslow Design System animation presets,
 * spring configurations, and utility functions.
 */

// ===== MOTION PRESETS =====
export {
    // Entrance animations
    fadeInUp,
    fadeInDown,
    scaleIn,
    slideInFromLeft,
    slideInFromRight,
    
    // Continuous animations
    floatAnimation,
    auroraGlow,
    pulseGlow,
    
    // Hover animations
    hoverLift,
    hoverScale,
    hoverRotate,
    
    // Stagger containers
    staggerContainer,
    staggerContainerFast,
    
    // Modal/drawer animations
    modalContent,
    slideUpDrawer,
    slideInDrawer,
    
    // Special effects
    shimmerEffect,
    morphingShape,
    auroraTextShift,
    
    // Reduced motion alternatives
    reduceMotionPresets,
    
    // Spring physics presets
    springPresets,
    
    // GPU acceleration utilities
    gpuAcceleration,
    
    // Performance optimized transitions
    performantTransitions,
    
    // Types
    type SpringPreset,
    type TransitionPreset,
} from "./motion-presets";

// ===== SPRING CONFIGURATIONS =====
export {
    // Core spring configurations
    defaultSpring,
    gentleSpring,
    bouncySpring,
    quickSpring,
    responsiveSpring,
    softSpring,
    dramaticSpring,
    preciseSpring,
    
    // Spring configuration map
    springConfigs,
    
    // Specialized configurations
    auroraSpringConfigs,
    glassSpringConfigs,
    
    // Reduced motion configurations
    reducedMotionSprings,
    
    // Performance-optimized transitions
    transitionPresets,
    
    // Stagger timing configurations
    staggerConfigs,
    
    // Utility functions
    getSpringConfig,
    getAuroraSpring,
    getGlassSpring,
    createSpringConfig,
    
    // Types
    type SpringConfigName,
    type AuroraSpringName,
    type GlassSpringName,
    type TransitionPresetName,
    type StaggerConfigName,
} from "./spring-configs";

// ===== CONVENIENCE RE-EXPORTS =====

/**
 * Most commonly used animation presets for quick access
 */
export const commonPresets = {
    fadeInUp,
    scaleIn,
    slideInFromLeft,
    hoverLift,
    staggerContainer,
    modalContent,
} from "./motion-presets";

/**
 * Most commonly used spring configurations for quick access
 */
export const commonSprings = {
    default: defaultSpring,
    quick: quickSpring,
    bouncy: bouncySpring,
    gentle: gentleSpring,
} from "./spring-configs";

/**
 * Aurora-specific exports for easy access
 */
export const auroraAnimations = {
    glow: auroraGlow,
    textShift: auroraTextShift,
    shimmer: shimmerEffect,
    springs: auroraSpringConfigs,
} from "./motion-presets";

/**
 * Glass morphism specific exports
 */
export const glassAnimations = {
    springs: glassSpringConfigs,
} from "./spring-configs";