"use client";

import { useRef, useEffect, useState } from "react";
import { 
    useScroll, 
    useTransform, 
    useMotionValue, 
    useSpring,
    type MotionValue,
} from "framer-motion";
import { useReducedMotion } from "@/hooks/maslow/use-reduced-motion";
import { springConfigs } from "@/lib/animations/spring-configs";

export interface ScrollAnimationOptions {
    /** Offset for when animation starts and ends ["start end", "end start"] */
    offset?: [string, string];
    /** Enable smooth spring animation */
    useSpring?: boolean;
    /** Spring configuration to use */
    springConfig?: keyof typeof springConfigs;
    /** Threshold for intersection observer (0-1) */
    threshold?: number;
    /** Root margin for intersection observer */
    rootMargin?: string;
}

export interface ScrollAnimationReturn {
    /** Ref to attach to the animated element */
    ref: React.RefObject<HTMLDivElement>;
    /** Scroll progress from 0 to 1 */
    scrollYProgress: MotionValue<number>;
    /** Opacity value (0 to 1) */
    opacity: MotionValue<number>;
    /** Scale value (0.8 to 1) */
    scale: MotionValue<number>;
    /** Y transform value (-50 to 0) */
    y: MotionValue<number>;
    /** X transform value (-30 to 0) */
    x: MotionValue<number>;
    /** Rotation value (-10 to 0) */
    rotate: MotionValue<number>;
    /** Whether element is in view */
    inView: boolean;
}

/**
 * Hook for creating scroll-triggered animations with intersection observer
 * Automatically handles reduced motion preferences
 */
export function useScrollAnimation(options: ScrollAnimationOptions = {}): ScrollAnimationReturn {
    const {
        offset = ["start 0.8", "start 0.2"],
        useSpring: enableSpring = true,
        springConfig = "smooth",
        threshold = 0.1,
        rootMargin = "0px 0px -100px 0px",
    } = options;

    const ref = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const inViewMotionValue = useMotionValue(0);

    // Scroll progress tracking
    const { scrollYProgress } = useScroll({
        target: ref,
        offset,
    });

    // Base transforms from scroll progress
    const baseOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const baseScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);
    const baseY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -20]);
    const baseX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-30, 0, 0, 10]);
    const baseRotate = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [5, 0, 0, -2]);

    // Apply spring physics if enabled and motion is allowed
    const springConfigObj = springConfigs[springConfig];
    
    const opacity = enableSpring && !prefersReducedMotion 
        ? useSpring(baseOpacity, springConfigObj)
        : baseOpacity;
        
    const scale = enableSpring && !prefersReducedMotion
        ? useSpring(baseScale, springConfigObj)
        : baseScale;
        
    const y = enableSpring && !prefersReducedMotion
        ? useSpring(baseY, springConfigObj)
        : baseY;
        
    const x = enableSpring && !prefersReducedMotion
        ? useSpring(baseX, springConfigObj)
        : baseX;
        
    const rotate = enableSpring && !prefersReducedMotion
        ? useSpring(baseRotate, springConfigObj)
        : baseRotate;

    // Intersection Observer for in-view detection
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element || typeof IntersectionObserver === 'undefined') return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isInView = entry.isIntersecting;
                setInView(isInView);
                inViewMotionValue.set(isInView ? 1 : 0);
            },
            {
                threshold,
                rootMargin,
            }
        );

        observer.observe(element);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, rootMargin, inViewMotionValue]);

    // Override with reduced motion alternatives if needed
    useEffect(() => {
        if (prefersReducedMotion) {
            // Set minimal motion values
            opacity.set(inView ? 1 : 0);
            scale.set(1);
            y.set(0);
            x.set(0);
            rotate.set(0);
        }
    }, [prefersReducedMotion, inView, opacity, scale, y, x, rotate]);

    return {
        ref,
        scrollYProgress,
        opacity,
        scale,
        y,
        x,
        rotate,
        inView,
    };
}

/**
 * Simplified hook for basic fade-in-up animation on scroll
 */
export function useScrollFadeIn(threshold: number = 0.1) {
    return useScrollAnimation({
        threshold,
        useSpring: true,
        springConfig: "gentle",
        offset: ["start 0.9", "start 0.1"],
    });
}

/**
 * Hook for parallax scroll effects
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
        prefersReducedMotion ? [0, 0] : [0, -speed * 100]
    );

    return { ref, y, scrollYProgress };
}