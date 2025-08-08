"use client";

import { useEffect, useCallback } from "react";
import { useMotionValue, useTransform, useAnimation, type MotionValue } from "framer-motion";
import { useReducedMotion } from "@/hooks/maslow/use-reduced-motion";

export interface GradientShiftOptions {
    /** Duration for one complete shift cycle */
    duration?: number;
    /** Delay before starting animation */
    delay?: number;
    /** Whether to automatically start the animation */
    autoStart?: boolean;
    /** Colors to shift between (CSS color values) */
    colors?: string[];
    /** Gradient direction (in degrees) */
    direction?: number;
    /** Animation easing function */
    ease?: string;
}

export interface GradientShiftReturn {
    /** Current background gradient style */
    backgroundImage: MotionValue<string>;
    /** Start the gradient shift animation */
    startShift: () => void;
    /** Stop the gradient shift animation */
    stopShift: () => void;
    /** Pause the animation */
    pauseShift: () => void;
    /** Resume the animation */
    resumeShift: () => void;
    /** Animation controls */
    controls: ReturnType<typeof useAnimation>;
}

/**
 * Hook for creating dynamic gradient shift effects
 * Perfect for aurora backgrounds and dynamic color animations
 */
export function useGradientShift(options: GradientShiftOptions = {}): GradientShiftReturn {
    const {
        duration = 3,
        delay = 0,
        autoStart = true,
        colors = [
            "rgba(109, 196, 173, 0.8)", // maslow-teal
            "rgba(147, 197, 253, 0.8)", // blue-300
            "rgba(196, 181, 253, 0.8)", // purple-300
            "rgba(251, 207, 232, 0.8)", // pink-200
            "rgba(109, 196, 173, 0.8)", // back to maslow-teal
        ],
        direction = 45,
        ease = "easeInOut",
    } = options;

    const prefersReducedMotion = useReducedMotion();
    const controls = useAnimation();
    
    // Motion values for gradient animation
    const gradientProgress = useMotionValue(0);
    
    // Transform gradient progress to color stops
    const backgroundImage = useTransform(
        gradientProgress,
        [0, 0.25, 0.5, 0.75, 1],
        colors.map((_, index, arr) => {
            const color1 = arr[index];
            const color2 = arr[(index + 1) % arr.length];
            return `linear-gradient(${direction}deg, ${color1}, ${color2})`;
        })
    );

    const startShift = useCallback(() => {
        if (prefersReducedMotion) {
            // Use a simple static gradient for reduced motion
            const staticGradient = `linear-gradient(${direction}deg, ${colors[0]}, ${colors[1]})`;
            backgroundImage.set(staticGradient);
            return;
        }

        controls.start({
            gradientProgress: [0, 1],
            transition: {
                duration,
                delay,
                ease,
                repeat: Infinity,
                repeatType: "loop",
            },
        });
    }, [controls, duration, delay, ease, prefersReducedMotion, direction, colors, backgroundImage]);

    const stopShift = useCallback(() => {
        controls.stop();
        gradientProgress.set(0);
    }, [controls, gradientProgress]);

    const pauseShift = useCallback(() => {
        controls.stop();
    }, [controls]);

    const resumeShift = useCallback(() => {
        startShift();
    }, [startShift]);

    // Auto-start if enabled
    useEffect(() => {
        if (autoStart) {
            startShift();
        }

        return () => {
            controls.stop();
        };
    }, [autoStart, startShift, controls]);

    // Update motion value when controls animate
    useEffect(() => {
        const unsubscribe = controls.mount();
        return unsubscribe;
    }, [controls]);

    return {
        backgroundImage,
        startShift,
        stopShift,
        pauseShift,
        resumeShift,
        controls,
    };
}

/**
 * Hook for aurora-specific gradient shifts
 * Uses the Maslow Design System aurora color palette
 */
export function useAuroraShift(intensity: "subtle" | "medium" | "strong" = "medium") {
    const intensityConfigs = {
        subtle: {
            duration: 4,
            colors: [
                "rgba(109, 196, 173, 0.4)",
                "rgba(147, 197, 253, 0.4)",
                "rgba(109, 196, 173, 0.4)",
            ],
        },
        medium: {
            duration: 3,
            colors: [
                "rgba(109, 196, 173, 0.6)",
                "rgba(147, 197, 253, 0.6)",
                "rgba(196, 181, 253, 0.6)",
                "rgba(109, 196, 173, 0.6)",
            ],
        },
        strong: {
            duration: 2.5,
            colors: [
                "rgba(109, 196, 173, 0.8)",
                "rgba(147, 197, 253, 0.8)",
                "rgba(196, 181, 253, 0.8)",
                "rgba(251, 207, 232, 0.8)",
                "rgba(109, 196, 173, 0.8)",
            ],
        },
    };

    const config = intensityConfigs[intensity];

    return useGradientShift({
        duration: config.duration,
        colors: config.colors,
        direction: 135, // Aurora typically flows diagonally
        ease: "easeInOut",
        autoStart: true,
    });
}

/**
 * Hook for text gradient animation
 * Perfect for animated gradient text effects
 */
export function useTextGradient(colors: string[] = [
    "#6DC4AD", // maslow-teal
    "#93C5FD", // blue-300
    "#C4B5FD", // purple-300
    "#6DC4AD", // back to maslow-teal
]) {
    const prefersReducedMotion = useReducedMotion();
    const progress = useMotionValue(0);
    const controls = useAnimation();

    const gradientText = useTransform(
        progress,
        [0, 0.33, 0.66, 1],
        colors.map((color, index, arr) => {
            const nextColor = arr[(index + 1) % arr.length];
            return `linear-gradient(90deg, ${color}, ${nextColor})`;
        })
    );

    const startAnimation = useCallback(() => {
        if (prefersReducedMotion) {
            gradientText.set(`linear-gradient(90deg, ${colors[0]}, ${colors[1]})`);
            return;
        }

        controls.start({
            progress: [0, 1],
            transition: {
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
            },
        });
    }, [controls, prefersReducedMotion, colors, gradientText]);

    useEffect(() => {
        startAnimation();
        return () => controls.stop();
    }, [startAnimation, controls]);

    return {
        backgroundImage: gradientText,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
    };
}