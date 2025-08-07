"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Button, type ButtonProps } from "@/components/base/buttons/button";
import { useReducedMotion } from "@/hooks/maslow/use-reduced-motion";
import { cn } from "@/utils/maslow/cn";

export interface AuroraButtonProps extends ButtonProps {
    /** Aurora variant style */
    variant?: "primary" | "secondary" | "ghost" | "warm";
    /** Add glowing effect */
    glow?: boolean;
    /** Enable morphing animation */
    morphing?: boolean;
    /** Animation intensity */
    intensity?: "subtle" | "medium" | "strong";
}

const auroraVariants = {
    primary: ["bg-aurora-primary text-white", "hover:scale-105 hover:shadow-lg", "active:scale-98"].join(" "),
    secondary: ["bg-aurora-secondary text-white", "hover:scale-105 hover:shadow-lg", "active:scale-98"].join(" "),
    ghost: ["bg-transparent border-2 border-maslow-teal text-maslow-teal", "hover:bg-maslow-teal/10 hover:scale-105", "active:scale-98"].join(" "),
    warm: ["bg-aurora-warm text-maslow-dark-blue", "hover:scale-105 hover:shadow-lg", "active:scale-98"].join(" "),
};

const glowStyles = {
    subtle: "aurora-glow",
    medium: "drop-shadow-[0_0_20px_rgba(109,196,173,0.3)]",
    strong: "aurora-glow-strong",
};

const morphingStyles = {
    subtle: "animate-morph",
    medium: "animate-morph animate-aurora-shift",
    strong: "animate-morph animate-aurora-shift animate-pulse-glow",
};

export const AuroraButton = forwardRef<HTMLButtonElement, AuroraButtonProps>(
    ({ className, variant = "primary", glow = true, morphing = false, intensity = "medium", children, ...props }, ref) => {
        const prefersReducedMotion = useReducedMotion();

        // Disable animations if user prefers reduced motion
        const shouldAnimate = !prefersReducedMotion;
        const shouldMorph = morphing && shouldAnimate;
        const shouldGlow = glow && shouldAnimate;

        return (
            <motion.div
                className="inline-block"
                whileHover={shouldAnimate ? { scale: 1.02, y: -2 } : undefined}
                whileTap={shouldAnimate ? { scale: 0.98 } : undefined}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <Button
                    ref={ref}
                    className={cn(
                        // Base Aurora styles
                        "gpu-accelerated relative overflow-hidden font-semibold transition-all duration-300",
                        "bg-[length:200%_200%]",

                        // Variant styles
                        auroraVariants[variant],

                        // Animation styles
                        shouldAnimate && "animate-aurora-shift",
                        shouldMorph && morphingStyles[intensity],
                        shouldGlow && glowStyles[intensity],

                        // Enhanced shadow for aurora variants
                        (variant === "primary" || variant === "secondary" || variant === "warm") && "shadow-[0_4px_20px_rgba(109,196,173,0.2)]",

                        className,
                    )}
                    {...props}
                >
                    {/* Aurora shimmer effect */}
                    {shouldAnimate && (
                        <motion.div
                            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{
                                translateX: ["100%", "-100%"],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut",
                            }}
                        />
                    )}

                    {/* Content with enhanced contrast */}
                    <span className="relative z-10 transition-all duration-300">{children}</span>

                    {/* Hover overlay for ghost variant */}
                    {variant === "ghost" && shouldAnimate && (
                        <motion.div className="bg-maslow-teal absolute inset-0 opacity-0" whileHover={{ opacity: 0.1 }} transition={{ duration: 0.3 }} />
                    )}
                </Button>
            </motion.div>
        );
    },
);

AuroraButton.displayName = "AuroraButton";
