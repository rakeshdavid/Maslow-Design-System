"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { 
    useScroll, 
    useTransform, 
    useMotionValue, 
    useSpring,
    type MotionValue,
} from "framer-motion";
import { useReducedMotion } from "@/hooks/maslow/use-reduced-motion";
import { springConfigs } from "@/lib/animations/spring-configs";

export interface MorphConfig {
    /** Scale transformation range */
    scale?: [number, number];
    /** Border radius transformation range */
    borderRadius?: [string, string];
    /** Background color transformation */
    backgroundColor?: [string, string];
    /** Shadow transformation */
    boxShadow?: [string, string];
    /** Backdrop blur transformation */
    backdropBlur?: [string, string];
    /** Opacity transformation */
    opacity?: [number, number];
}

export interface ScrollMorphOptions {
    /** Scroll offset for morphing trigger */
    offset?: [string, string];
    /** Morph configuration */
    morphConfig?: MorphConfig;
    /** Enable smooth spring animation */
    useSpring?: boolean;
    /** Spring configuration */
    springConfig?: keyof typeof springConfigs;
    /** Threshold for intersection observer */
    threshold?: number;
}

export interface ScrollMorphReturn {
    /** Ref to attach to the morphing element */
    ref: React.RefObject<HTMLDivElement>;
    /** Scroll progress value */
    scrollYProgress: MotionValue<number>;
    /** Scale motion value */
    scale: MotionValue<number>;
    /** Border radius motion value */
    borderRadius: MotionValue<string>;
    /** Background color motion value */
    backgroundColor: MotionValue<string>;
    /** Box shadow motion value */
    boxShadow: MotionValue<string>;
    /** Backdrop blur motion value */
    backdropBlur: MotionValue<string>;
    /** Opacity motion value */
    opacity: MotionValue<number>;
    /** Combined style object for easy application */
    morphStyle: {
        scale: MotionValue<number>;
        borderRadius: MotionValue<string>;
        backgroundColor: MotionValue<string>;
        boxShadow: MotionValue<string>;
        backdropFilter: MotionValue<string>;
        opacity: MotionValue<number>;
    };
    /** Whether element is in view */
    inView: boolean;
}

/**
 * Hook for creating scroll-based morphing effects
 * Perfect for cards, buttons, and containers that transform while scrolling
 */
export function useScrollMorph(options: ScrollMorphOptions = {}): ScrollMorphReturn {
    const {
        offset = ["start end", "end start"],
        morphConfig = {
            scale: [0.95, 1.05],
            borderRadius: ["8px", "24px"],
            backgroundColor: ["rgba(255, 255, 255, 0.1)", "rgba(109, 196, 173, 0.2)"],
            boxShadow: ["0 4px 6px rgba(0, 0, 0, 0.05)", "0 20px 40px rgba(109, 196, 173, 0.3)"],
            backdropBlur: ["blur(8px)", "blur(20px)"],
            opacity: [0.8, 1],
        },
        useSpring: enableSpring = true,
        springConfig = "smooth",
        threshold = 0.1,
    } = options;

    const ref = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const [inView, setInView] = useState(false);

    // Scroll progress tracking
    const { scrollYProgress } = useScroll({
        target: ref,
        offset,
    });

    // Base transforms from scroll progress
    const baseScale = useTransform(
        scrollYProgress, 
        [0, 0.5, 1], 
        [morphConfig.scale?.[0] ?? 1, 1, morphConfig.scale?.[1] ?? 1]
    );

    const baseBorderRadius = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [
            morphConfig.borderRadius?.[0] ?? "8px",
            "16px",
            morphConfig.borderRadius?.[1] ?? "24px",
        ]
    );

    const baseBackgroundColor = useTransform(
        scrollYProgress,
        [0, 1],
        [
            morphConfig.backgroundColor?.[0] ?? "rgba(255, 255, 255, 0.1)",
            morphConfig.backgroundColor?.[1] ?? "rgba(109, 196, 173, 0.2)",
        ]
    );

    const baseBoxShadow = useTransform(
        scrollYProgress,
        [0, 1],
        [
            morphConfig.boxShadow?.[0] ?? "0 4px 6px rgba(0, 0, 0, 0.05)",
            morphConfig.boxShadow?.[1] ?? "0 20px 40px rgba(109, 196, 173, 0.3)",
        ]
    );

    const baseBackdropBlur = useTransform(
        scrollYProgress,
        [0, 1],
        [
            morphConfig.backdropBlur?.[0] ?? "blur(8px)",
            morphConfig.backdropBlur?.[1] ?? "blur(20px)",
        ]
    );

    const baseOpacity = useTransform(
        scrollYProgress,
        [0, 1],
        [
            morphConfig.opacity?.[0] ?? 0.8,
            morphConfig.opacity?.[1] ?? 1,
        ]
    );

    // Apply spring physics if enabled and motion is allowed
    const springConfigObj = springConfigs[springConfig];

    const scale = enableSpring && !prefersReducedMotion
        ? useSpring(baseScale, springConfigObj)
        : baseScale;

    const borderRadius = enableSpring && !prefersReducedMotion
        ? useSpring(baseBorderRadius, springConfigObj)
        : baseBorderRadius;

    const backgroundColor = enableSpring && !prefersReducedMotion
        ? useSpring(baseBackgroundColor, springConfigObj)
        : baseBackgroundColor;

    const boxShadow = enableSpring && !prefersReducedMotion
        ? useSpring(baseBoxShadow, springConfigObj)
        : baseBoxShadow;

    const backdropBlur = enableSpring && !prefersReducedMotion
        ? useSpring(baseBackdropBlur, springConfigObj)
        : baseBackdropBlur;

    const opacity = enableSpring && !prefersReducedMotion
        ? useSpring(baseOpacity, springConfigObj)
        : baseOpacity;

    // Intersection Observer
    useEffect(() => {
        const element = ref.current;
        if (!element || typeof IntersectionObserver === 'undefined') return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            { threshold }
        );

        observer.observe(element);
        return () => observer.unobserve(element);
    }, [threshold]);

    // Reduced motion handling
    useEffect(() => {
        if (prefersReducedMotion) {
            scale.set(1);
            opacity.set(1);
            borderRadius.set(morphConfig.borderRadius?.[0] ?? "8px");
            backgroundColor.set(morphConfig.backgroundColor?.[0] ?? "rgba(255, 255, 255, 0.1)");
            boxShadow.set(morphConfig.boxShadow?.[0] ?? "0 4px 6px rgba(0, 0, 0, 0.05)");
            backdropBlur.set(morphConfig.backdropBlur?.[0] ?? "blur(8px)");
        }
    }, [
        prefersReducedMotion, 
        scale, 
        opacity, 
        borderRadius, 
        backgroundColor, 
        boxShadow, 
        backdropBlur,
        morphConfig
    ]);

    const morphStyle = {
        scale,
        borderRadius,
        backgroundColor,
        boxShadow,
        backdropFilter: backdropBlur,
        opacity,
    };

    return {
        ref,
        scrollYProgress,
        scale,
        borderRadius,
        backgroundColor,
        boxShadow,
        backdropBlur,
        opacity,
        morphStyle,
        inView,
    };
}

/**
 * Hook for card morphing effects
 * Optimized for card components with glassmorphism
 */
export function useCardMorph() {
    return useScrollMorph({
        morphConfig: {
            scale: [0.98, 1.02],
            borderRadius: ["12px", "20px"],
            backgroundColor: [
                "rgba(255, 255, 255, 0.05)",
                "rgba(109, 196, 173, 0.1)"
            ],
            boxShadow: [
                "0 8px 32px rgba(0, 0, 0, 0.1)",
                "0 20px 60px rgba(109, 196, 173, 0.2)"
            ],
            backdropBlur: ["blur(12px)", "blur(24px)"],
            opacity: [0.9, 1],
        },
        springConfig: "gentle",
        threshold: 0.2,
    });
}

/**
 * Hook for button morphing effects
 * Perfect for call-to-action buttons that transform on scroll
 */
export function useButtonMorph() {
    return useScrollMorph({
        morphConfig: {
            scale: [0.95, 1.1],
            borderRadius: ["8px", "16px"],
            backgroundColor: [
                "rgba(109, 196, 173, 0.8)",
                "rgba(109, 196, 173, 1)"
            ],
            boxShadow: [
                "0 4px 12px rgba(109, 196, 173, 0.2)",
                "0 12px 40px rgba(109, 196, 173, 0.4)"
            ],
            backdropBlur: ["blur(0px)", "blur(8px)"],
            opacity: [0.9, 1],
        },
        springConfig: "bouncy",
        threshold: 0.3,
    });
}

/**
 * Hook for hero section morphing
 * Creates dramatic transforms for hero sections
 */
export function useHeroMorph() {
    return useScrollMorph({
        offset: ["start start", "end start"],
        morphConfig: {
            scale: [1, 1.2],
            borderRadius: ["0px", "32px"],
            backgroundColor: [
                "rgba(255, 255, 255, 0.02)",
                "rgba(109, 196, 173, 0.05)"
            ],
            boxShadow: [
                "0 0 0 rgba(0, 0, 0, 0)",
                "0 40px 80px rgba(109, 196, 173, 0.1)"
            ],
            backdropBlur: ["blur(0px)", "blur(40px)"],
            opacity: [1, 0.8],
        },
        springConfig: "dramatic",
        threshold: 0.1,
    });
}