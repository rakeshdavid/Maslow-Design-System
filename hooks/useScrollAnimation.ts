"use client";

import { useEffect, useRef, useState } from "react";
import { 
    useScroll, 
    useTransform, 
    useInView, 
    useMotionValue,
    useSpring,
    type MotionValue 
} from "framer-motion";
import { useReducedMotion } from "@/hooks/maslow/use-reduced-motion";

/**
 * Configuration options for scroll animations
 */
export interface ScrollAnimationConfig {
    /** Scroll offset when animation should start and end */
    offset?: [string, string];
    /** Root margin for intersection observer */
    margin?: string;
    /** Whether animation should trigger only once */
    once?: boolean;
    /** Animation threshold (0 to 1) */
    threshold?: number;
    /** Smooth spring configuration for scroll-driven animations */
    spring?: {
        stiffness?: number;
        damping?: number;
        mass?: number;
    };
}

/**
 * Return type for scroll animation hooks
 */
export interface ScrollAnimationReturn {
    /** Ref to attach to the target element */
    ref: React.RefObject<HTMLDivElement>;
    /** Whether the element is in view */
    isInView: boolean;
    /** Scroll progress value (0 to 1) */
    scrollYProgress: MotionValue<number>;
    /** Spring-smoothed scroll progress */
    smoothProgress: MotionValue<number>;
    /** Opacity value based on scroll position */
    opacity: MotionValue<number>;
    /** Scale value based on scroll position */
    scale: MotionValue<number>;
    /** Y transform value based on scroll position */
    y: MotionValue<number>;
    /** X transform value based on scroll position */
    x: MotionValue<number>;
    /** Rotation value based on scroll position */
    rotate: MotionValue<number>;
}

/**
 * Primary scroll animation hook
 * 
 * Provides comprehensive scroll-based animations with intersection observer
 * integration and reduced motion support.
 * 
 * @example
 * ```tsx
 * const { ref, isInView, opacity, scale } = useScrollAnimation({
 *   offset: ["start end", "end start"],
 *   once: true
 * });
 * 
 * return (
 *   <motion.div
 *     ref={ref}
 *     style={{ opacity, scale }}
 *     initial={{ opacity: 0, scale: 0.8 }}
 *     animate={isInView ? { opacity: 1, scale: 1 } : {}}
 *   >
 *     Content
 *   </motion.div>
 * );
 * ```
 */
export function useScrollAnimation(config: ScrollAnimationConfig = {}): ScrollAnimationReturn {
    const {
        offset = ["start end", "end start"],
        margin = "0px",
        once = false,
        threshold = 0.1,
        spring = { stiffness: 400, damping: 40, mass: 1 }
    } = config;

    const ref = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();

    // Intersection observer for viewport detection
    const isInView = useInView(ref, {
        margin,
        once,
        threshold,
    });

    // Scroll progress tracking
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: offset as [string, string],
    });

    // Spring-smoothed scroll progress
    const smoothProgress = useSpring(scrollYProgress, spring);

    // Transform values based on scroll progress
    const opacity = useTransform(
        smoothProgress,
        [0, 0.2, 0.8, 1],
        prefersReducedMotion ? [1, 1, 1, 1] : [0, 1, 1, 0.3]
    );

    const scale = useTransform(
        smoothProgress,
        [0, 0.3, 0.7, 1],
        prefersReducedMotion ? [1, 1, 1, 1] : [0.8, 1, 1, 1.1]
    );

    const y = useTransform(
        smoothProgress,
        [0, 0.5, 1],
        prefersReducedMotion ? [0, 0, 0] : [100, 0, -100]
    );

    const x = useTransform(
        smoothProgress,
        [0, 0.5, 1],
        prefersReducedMotion ? [0, 0, 0] : [0, 0, 0]
    );

    const rotate = useTransform(
        smoothProgress,
        [0, 0.5, 1],
        prefersReducedMotion ? [0, 0, 0] : [0, 0, 0]
    );

    return {
        ref,
        isInView,
        scrollYProgress,
        smoothProgress,
        opacity,
        scale,
        y,
        x,
        rotate,
    };
}

/**
 * Simple fade-in animation on scroll
 */
export function useScrollFadeIn(config: ScrollAnimationConfig = {}) {
    const { ref, isInView, opacity } = useScrollAnimation(config);
    const prefersReducedMotion = useReducedMotion();

    return {
        ref,
        isInView,
        opacity,
        // Simple motion props for fade in
        initial: { opacity: 0 },
        animate: isInView ? { opacity: 1 } : { opacity: 0 },
        transition: prefersReducedMotion 
            ? { duration: 0.2 } 
            : { duration: 0.6, ease: "easeOut" },
    };
}

/**
 * Parallax scroll effect hook
 */
export function useParallaxScroll(speed: number = 0.5) {
    const ref = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        prefersReducedMotion ? [0, 0] : [0, speed * -200]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.3, 0.7, 1],
        [0, 1, 1, 0]
    );

    return { ref, y, opacity, scrollYProgress };
}

/**
 * Scroll-triggered reveal animation
 */
export function useScrollReveal(config: ScrollAnimationConfig = {}) {
    const { 
        offset = ["start 80%", "start 20%"],
        once = true,
        ...restConfig 
    } = config;

    const { ref, isInView } = useScrollAnimation({ 
        offset, 
        once, 
        ...restConfig 
    });
    
    const prefersReducedMotion = useReducedMotion();

    // Animation variants for reveal effect
    const variants = {
        hidden: {
            opacity: 0,
            y: prefersReducedMotion ? 0 : 50,
            scale: prefersReducedMotion ? 1 : 0.95,
            filter: prefersReducedMotion ? "none" : "blur(6px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "none",
            transition: prefersReducedMotion
                ? { duration: 0.2 }
                : {
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                    staggerChildren: 0.1,
                },
        },
    };

    return {
        ref,
        isInView,
        variants,
        initial: "hidden",
        animate: isInView ? "visible" : "hidden",
    };
}

/**
 * Scroll progress indicator hook
 */
export function useScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollPx = document.documentElement.scrollTop;
            const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = scrollPx / winHeightPx;
            setScrollProgress(scrolled);
        };

        window.addEventListener("scroll", updateScrollProgress, { passive: true });
        updateScrollProgress(); // Initial calculation

        return () => window.removeEventListener("scroll", updateScrollProgress);
    }, []);

    return { scrollProgress };
}

/**
 * Scroll-based counter animation
 */
export function useScrollCounter(
    target: number,
    config: ScrollAnimationConfig = {}
) {
    const { ref, isInView, scrollYProgress } = useScrollAnimation(config);
    const prefersReducedMotion = useReducedMotion();

    const count = useTransform(
        scrollYProgress,
        [0, 1],
        [0, target]
    );

    const [displayCount, setDisplayCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const unsubscribe = count.on("change", (latest) => {
            setDisplayCount(Math.round(latest));
        });

        return unsubscribe;
    }, [count, isInView]);

    return {
        ref,
        isInView,
        count: displayCount,
        progress: scrollYProgress,
    };
}