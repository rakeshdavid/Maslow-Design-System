"use client";

import { useEffect, useRef, useState } from "react";
import { 
    useMotionValue, 
    useTransform, 
    useInView,
    useAnimationFrame,
    useTime,
    type MotionValue 
} from "framer-motion";
import { useReducedMotion } from "@/hooks/maslow/use-reduced-motion";

/**
 * Configuration for gradient shift animations
 */
export interface GradientShiftConfig {
    /** Animation speed multiplier */
    speed?: number;
    /** Hue rotation range in degrees */
    hueRange?: [number, number];
    /** Background position animation range */
    positionRange?: [string, string];
    /** Whether to pause animation when out of view */
    pauseOutOfView?: boolean;
    /** Custom easing function */
    easing?: (t: number) => number;
    /** Animation duration in seconds (for cyclic animations) */
    duration?: number;
}

/**
 * Return type for gradient shift hooks
 */
export interface GradientShiftReturn {
    /** Ref to attach to target element */
    ref: React.RefObject<HTMLDivElement>;
    /** Current hue rotation value */
    hueRotate: MotionValue<number>;
    /** Current background position */
    backgroundPosition: MotionValue<string>;
    /** Combined filter value */
    filter: MotionValue<string>;
    /** Combined style object for convenience */
    style: {
        filter: MotionValue<string>;
        backgroundPosition: MotionValue<string>;
    };
    /** Whether element is in view */
    isInView: boolean;
    /** Manual pause/resume control */
    pause: () => void;
    resume: () => void;
    /** Whether animation is paused */
    isPaused: boolean;
}

/**
 * Aurora gradient shift animation hook
 * 
 * Creates dynamic aurora gradient effects with hue rotation and position shifting.
 * Perfect for aurora backgrounds, buttons, and text effects.
 * 
 * @example
 * ```tsx
 * const { ref, style } = useGradientShift({
 *   speed: 1.5,
 *   hueRange: [0, 60]
 * });
 * 
 * return (
 *   <motion.div
 *     ref={ref}
 *     className="bg-aurora-primary"
 *     style={style}
 *   >
 *     Aurora content
 *   </motion.div>
 * );
 * ```
 */
export function useGradientShift(config: GradientShiftConfig = {}): GradientShiftReturn {
    const {
        speed = 1,
        hueRange = [0, 30],
        positionRange = ["0% 50%", "100% 50%"],
        pauseOutOfView = true,
        easing = (t: number) => (Math.sin(t) + 1) / 2,
        duration = 8,
    } = config;

    const ref = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();
    const [isPaused, setIsPaused] = useState(false);

    // Intersection observer
    const isInView = useInView(ref, { margin: "100px" });

    // Time-based animation
    const time = useTime();
    
    // Animation values
    const hueRotate = useMotionValue(hueRange[0]);
    const backgroundPosition = useMotionValue(positionRange[0]);

    // Animation frame loop
    useAnimationFrame((t) => {
        if (prefersReducedMotion) {
            hueRotate.set(hueRange[0]);
            backgroundPosition.set(positionRange[0]);
            return;
        }

        if (isPaused || (pauseOutOfView && !isInView)) {
            return;
        }

        // Calculate animation progress (0 to 1)
        const progress = (t * speed * 0.001) % (duration * 1000) / (duration * 1000);
        const easedProgress = easing(progress * Math.PI * 2);

        // Update hue rotation
        const currentHue = hueRange[0] + (hueRange[1] - hueRange[0]) * easedProgress;
        hueRotate.set(currentHue);

        // Update background position
        const positionProgress = (Math.sin(progress * Math.PI * 2) + 1) / 2;
        const currentPosition = `${positionProgress * 100}% 50%`;
        backgroundPosition.set(currentPosition);
    });

    // Combined filter value
    const filter = useTransform(
        hueRotate,
        (value) => prefersReducedMotion ? "none" : `hue-rotate(${value}deg)`
    );

    // Control functions
    const pause = () => setIsPaused(true);
    const resume = () => setIsPaused(false);

    // Combined style object
    const style = {
        filter,
        backgroundPosition,
    };

    return {
        ref,
        hueRotate,
        backgroundPosition,
        filter,
        style,
        isInView,
        pause,
        resume,
        isPaused,
    };
}

/**
 * Aurora text gradient shift hook
 * 
 * Specialized for text gradient effects with background clipping.
 */
export function useAuroraShift(config: GradientShiftConfig = {}) {
    const {
        speed = 0.8,
        hueRange = [0, 45],
        duration = 12,
        ...restConfig
    } = config;

    const { ref, hueRotate, backgroundPosition, isInView, pause, resume, isPaused } = 
        useGradientShift({
            speed,
            hueRange,
            duration,
            ...restConfig,
        });

    const prefersReducedMotion = useReducedMotion();

    // Aurora-specific transforms
    const textStyle = useTransform(
        [hueRotate, backgroundPosition],
        ([hue, position]) => ({
            background: prefersReducedMotion 
                ? "var(--aurora-primary)" 
                : "var(--aurora-primary)",
            backgroundSize: "200% 200%",
            backgroundPosition: position,
            filter: prefersReducedMotion ? "none" : `hue-rotate(${hue}deg)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
        })
    );

    return {
        ref,
        textStyle,
        isInView,
        pause,
        resume,
        isPaused,
    };
}

/**
 * Text gradient animation hook
 * 
 * Creates animated text gradients with customizable effects.
 */
export function useTextGradient(config: GradientShiftConfig = {}) {
    const {
        speed = 1.2,
        hueRange = [0, 60],
        duration = 10,
        ...restConfig
    } = config;

    const baseAnimation = useGradientShift({
        speed,
        hueRange,
        duration,
        ...restConfig,
    });

    const prefersReducedMotion = useReducedMotion();

    // Text-specific style transforms
    const textGradientStyle = useTransform(
        [baseAnimation.hueRotate, baseAnimation.backgroundPosition],
        ([hue, position]) => ({
            background: "var(--aurora-primary)",
            backgroundSize: "200% auto",
            backgroundPosition: position,
            filter: prefersReducedMotion ? "none" : `hue-rotate(${hue}deg)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
        })
    );

    return {
        ...baseAnimation,
        textGradientStyle,
    };
}

/**
 * Hover-triggered gradient shift
 */
export function useHoverGradientShift(config: GradientShiftConfig = {}) {
    const [isHovered, setIsHovered] = useState(false);
    const baseAnimation = useGradientShift({
        ...config,
        pauseOutOfView: false,
    });

    const prefersReducedMotion = useReducedMotion();

    // Enhanced animation on hover
    useEffect(() => {
        if (prefersReducedMotion) return;

        if (isHovered) {
            baseAnimation.resume();
        } else {
            baseAnimation.pause();
        }
    }, [isHovered, prefersReducedMotion, baseAnimation]);

    const hoverHandlers = {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
    };

    return {
        ...baseAnimation,
        isHovered,
        hoverHandlers,
    };
}

/**
 * Scroll-triggered gradient shift
 */
export function useScrollGradientShift(config: GradientShiftConfig = {}) {
    const baseAnimation = useGradientShift(config);
    
    // Enhanced speed when in view
    useEffect(() => {
        if (baseAnimation.isInView) {
            baseAnimation.resume();
        } else {
            baseAnimation.pause();
        }
    }, [baseAnimation.isInView, baseAnimation]);

    return baseAnimation;
}

/**
 * Multi-gradient shift for complex effects
 */
export function useMultiGradientShift(configs: GradientShiftConfig[] = []) {
    const animations = configs.map((config, index) => 
        useGradientShift({
            ...config,
            // Offset each animation slightly for complex effects
            duration: (config.duration || 8) + index * 2,
            hueRange: config.hueRange || [index * 20, index * 20 + 30],
        })
    );

    const combinedStyle = useTransform(
        animations.map(anim => anim.filter),
        (filters) => filters.join(" ")
    );

    return {
        animations,
        combinedStyle,
        refs: animations.map(anim => anim.ref),
    };
}