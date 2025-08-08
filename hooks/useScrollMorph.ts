"use client";

import { useRef, useCallback } from "react";
import { 
    useScroll, 
    useTransform, 
    useInView,
    useSpring,
    type MotionValue 
} from "framer-motion";
import { useReducedMotion } from "@/hooks/maslow/use-reduced-motion";

/**
 * Configuration for scroll morphing animations
 */
export interface ScrollMorphConfig {
    /** Scroll offset range for animation */
    offset?: [string, string];
    /** Spring configuration for smooth morphing */
    spring?: {
        stiffness?: number;
        damping?: number;
        mass?: number;
    };
    /** Custom morph shapes for different scroll positions */
    morphShapes?: string[];
    /** Whether to use 3D transforms */
    use3D?: boolean;
    /** Perspective value for 3D effects */
    perspective?: number;
    /** Root margin for intersection observer */
    margin?: string;
}

/**
 * Return type for scroll morph hooks
 */
export interface ScrollMorphReturn {
    /** Ref to attach to target element */
    ref: React.RefObject<HTMLDivElement>;
    /** Whether element is in view */
    isInView: boolean;
    /** Scroll progress value */
    scrollYProgress: MotionValue<number>;
    /** Border radius morph value */
    borderRadius: MotionValue<string>;
    /** Scale transform value */
    scale: MotionValue<number>;
    /** Rotation transform value */
    rotate: MotionValue<number>;
    /** Combined transform value */
    transform: MotionValue<string>;
    /** Combined style object */
    style: {
        borderRadius: MotionValue<string>;
        transform: MotionValue<string>;
    };
}

/**
 * Scroll-based morphing animation hook
 * 
 * Creates smooth morphing effects based on scroll position.
 * Perfect for creating organic, flowing animations that respond to user scroll.
 * 
 * @example
 * ```tsx
 * const { ref, style } = useScrollMorph({
 *   morphShapes: [
 *     "50% 50%", 
 *     "60% 40% 30% 70% / 60% 30% 70% 40%",
 *     "30% 60% 70% 40% / 50% 60% 30% 60%"
 *   ]
 * });
 * 
 * return (
 *   <motion.div
 *     ref={ref}
 *     className="bg-aurora-primary"
 *     style={style}
 *   >
 *     Morphing content
 *   </motion.div>
 * );
 * ```
 */
export function useScrollMorph(config: ScrollMorphConfig = {}): ScrollMorphReturn {
    const {
        offset = ["start end", "end start"],
        spring = { stiffness: 400, damping: 40, mass: 1 },
        morphShapes = [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "40% 30% 60% 70% / 60% 40% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
        ],
        use3D = false,
        perspective = 1000,
        margin = "0px",
    } = config;

    const ref = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();

    // Intersection observer
    const isInView = useInView(ref, { margin });

    // Scroll progress
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: offset as [string, string],
    });

    // Spring-smoothed progress
    const smoothProgress = useSpring(scrollYProgress, spring);

    // Border radius morphing
    const borderRadius = useTransform(
        smoothProgress,
        [0, 0.33, 0.66, 1],
        prefersReducedMotion 
            ? ["16px", "16px", "16px", "16px"]
            : morphShapes
    );

    // Scale transformation
    const scale = useTransform(
        smoothProgress,
        [0, 0.2, 0.8, 1],
        prefersReducedMotion 
            ? [1, 1, 1, 1]
            : [0.9, 1, 1, 1.05]
    );

    // Rotation transformation
    const rotate = useTransform(
        smoothProgress,
        [0, 0.5, 1],
        prefersReducedMotion 
            ? [0, 0, 0]
            : [0, 2, 0]
    );

    // 3D transforms
    const rotateX = useTransform(
        smoothProgress,
        [0, 0.5, 1],
        prefersReducedMotion 
            ? [0, 0, 0]
            : use3D ? [0, 15, 0] : [0, 0, 0]
    );

    const rotateY = useTransform(
        smoothProgress,
        [0, 0.5, 1],
        prefersReducedMotion 
            ? [0, 0, 0]
            : use3D ? [0, -10, 0] : [0, 0, 0]
    );

    // Combined transform
    const transform = useTransform(
        [scale, rotate, rotateX, rotateY],
        (latest) => {
            const [s, r, rx, ry] = latest;
            
            if (prefersReducedMotion) {
                return "translateZ(0)";
            }

            if (use3D) {
                return `perspective(${perspective}px) translateZ(0) scale(${s}) rotateZ(${r}deg) rotateX(${rx}deg) rotateY(${ry}deg)`;
            }
            
            return `translateZ(0) scale(${s}) rotate(${r}deg)`;
        }
    );

    // Combined style object
    const style = {
        borderRadius,
        transform,
    };

    return {
        ref,
        isInView,
        scrollYProgress,
        borderRadius,
        scale,
        rotate,
        transform,
        style,
    };
}

/**
 * Card morphing effect for scroll interactions
 */
export function useCardMorph(config: ScrollMorphConfig = {}) {
    const cardShapes = [
        "16px",
        "20px 8px 20px 8px",
        "8px 20px 8px 20px", 
        "24px",
    ];

    return useScrollMorph({
        morphShapes: cardShapes,
        spring: { stiffness: 300, damping: 30, mass: 1 },
        ...config,
    });
}

/**
 * Button morphing effect for interactive elements
 */
export function useButtonMorph(config: ScrollMorphConfig = {}) {
    const buttonShapes = [
        "8px",
        "12px 4px 12px 4px",
        "20px 8px 20px 8px",
        "32px",
    ];

    return useScrollMorph({
        morphShapes: buttonShapes,
        spring: { stiffness: 500, damping: 25, mass: 0.8 },
        offset: ["start 90%", "start 10%"],
        ...config,
    });
}

/**
 * Hero section morphing for dramatic effects
 */
export function useHeroMorph(config: ScrollMorphConfig = {}) {
    const heroShapes = [
        "0px",
        "40% 60% 70% 30% / 40% 50% 60% 50%",
        "60% 40% 30% 70% / 60% 30% 70% 40%",
        "50% 50% 50% 50%",
    ];

    return useScrollMorph({
        morphShapes: heroShapes,
        spring: { stiffness: 200, damping: 25, mass: 1.2 },
        use3D: true,
        perspective: 1200,
        offset: ["start start", "end start"],
        ...config,
    });
}

/**
 * Text morphing effect for headings and titles
 */
export function useTextMorph(config: ScrollMorphConfig = {}) {
    const ref = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: config.offset as [string, string] || ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, config.spring || {
        stiffness: 400,
        damping: 40,
        mass: 1,
    });

    // Text-specific morphing effects
    const letterSpacing = useTransform(
        smoothProgress,
        [0, 0.5, 1],
        prefersReducedMotion 
            ? ["0em", "0em", "0em"]
            : ["0em", "0.1em", "0em"]
    );

    const fontSize = useTransform(
        smoothProgress,
        [0, 0.5, 1],
        prefersReducedMotion 
            ? [1, 1, 1]
            : [1, 1.05, 1]
    );

    const textShadow = useTransform(
        smoothProgress,
        [0, 0.5, 1],
        prefersReducedMotion 
            ? ["none", "none", "none"]
            : [
                "none",
                "0 0 20px rgba(109,196,173,0.3)",
                "none"
            ]
    );

    const style = {
        letterSpacing,
        fontSize,
        textShadow,
    };

    return {
        ref,
        scrollYProgress,
        style,
    };
}

/**
 * Advanced morphing with custom keyframes
 */
export function useAdvancedMorph(
    keyframes: Array<{
        progress: number;
        borderRadius?: string;
        scale?: number;
        rotate?: number;
        opacity?: number;
    }>,
    config: ScrollMorphConfig = {}
) {
    const { ref, scrollYProgress } = useScrollMorph(config);
    const prefersReducedMotion = useReducedMotion();

    // Extract values from keyframes
    const progressPoints = keyframes.map(k => k.progress);
    const borderRadiusValues = keyframes.map(k => k.borderRadius || "16px");
    const scaleValues = keyframes.map(k => k.scale || 1);
    const rotateValues = keyframes.map(k => k.rotate || 0);
    const opacityValues = keyframes.map(k => k.opacity || 1);

    // Create transforms for each property
    const borderRadius = useTransform(
        scrollYProgress,
        progressPoints,
        prefersReducedMotion ? [borderRadiusValues[0]] : borderRadiusValues
    );

    const scale = useTransform(
        scrollYProgress,
        progressPoints,
        prefersReducedMotion ? [1] : scaleValues
    );

    const rotate = useTransform(
        scrollYProgress,
        progressPoints,
        prefersReducedMotion ? [0] : rotateValues
    );

    const opacity = useTransform(
        scrollYProgress,
        progressPoints,
        opacityValues
    );

    const transform = useTransform(
        [scale, rotate],
        (latest) => {
            const [s, r] = latest;
            return `translateZ(0) scale(${s}) rotate(${r}deg)`;
        }
    );

    return {
        ref,
        scrollYProgress,
        style: {
            borderRadius,
            transform,
            opacity,
        },
    };
}

/**
 * Performance-optimized morphing for lists and grids
 */
export function useListMorph(index: number, config: ScrollMorphConfig = {}) {
    const delay = index * 0.1; // Stagger delay based on index
    
    const morphConfig = {
        ...config,
        spring: {
            stiffness: 400 - (index * 10), // Slight variation per item
            damping: 25 + (index * 2),
            mass: 1,
            ...config.spring,
        },
    };

    const baseMorph = useScrollMorph(morphConfig);

    // Add stagger delay to animations
    const delayedProgress = useTransform(
        baseMorph.scrollYProgress,
        [0, 1],
        [Math.max(0, -delay), 1 - delay]
    );

    return {
        ...baseMorph,
        scrollYProgress: delayedProgress,
    };
}