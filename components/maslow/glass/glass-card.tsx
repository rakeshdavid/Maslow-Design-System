"use client";

import { type ReactNode, forwardRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/maslow/use-reduced-motion";
import { cn } from "@/utils/maslow/cn";

export interface GlassCardProps {
    /** Card content */
    children?: ReactNode;
    /** Custom className */
    className?: string;
    /** Enable 3D tilt interaction */
    interactive?: boolean;
    /** Glass intensity */
    intensity?: "subtle" | "medium" | "strong";
    /** Enable floating animation */
    floating?: boolean;
    /** Custom gradient overlay */
    gradient?: "aurora" | "warm" | "cool" | "none";
    /** Mouse move handler */
    onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
    /** Mouse leave handler */
    onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const intensityClasses = {
    subtle: "glass",
    medium: "glass-card",
    strong: "glass-strong rounded-2xl shadow-[0_12px_40px_rgba(109,196,173,0.25)]",
};

const gradientOverlays = {
    aurora: "before:bg-aurora-mesh before:opacity-10",
    warm: "before:bg-aurora-warm before:opacity-8",
    cool: "before:bg-aurora-secondary before:opacity-8",
    none: "",
};

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
    ({ className, children, interactive = true, intensity = "medium", floating = false, gradient = "aurora", onMouseMove, onMouseLeave }, ref) => {
        const prefersReducedMotion = useReducedMotion();
        const shouldAnimate = !prefersReducedMotion;

        // 3D Tilt Effect
        const mouseX = useMotionValue(0);
        const mouseY = useMotionValue(0);

        const rotateX = useTransform(mouseY, [-0.5, 0.5], [7.5, -7.5]);
        const rotateY = useTransform(mouseX, [-0.5, 0.5], [-7.5, 7.5]);

        const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            if (!interactive || !shouldAnimate) return;

            const element = e.currentTarget;
            const rect = element.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            mouseX.set((x - centerX) / centerX);
            mouseY.set((y - centerY) / centerY);

            onMouseMove?.(e);
        };

        const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
            if (shouldAnimate) {
                mouseX.set(0);
                mouseY.set(0);
            }
            onMouseLeave?.(e);
        };

        return (
            <motion.div
                ref={ref}
                className={cn(
                    // Base glass styles
                    "perspective-1000 gpu-accelerated relative",
                    intensityClasses[intensity],

                    // Gradient overlay
                    gradient !== "none" && ["before:rounded-inherit before:pointer-events-none before:absolute before:inset-0", gradientOverlays[gradient]],

                    // Floating animation
                    floating && shouldAnimate && "animate-float",

                    className,
                )}
                style={
                    shouldAnimate && interactive
                        ? {
                              rotateX,
                              rotateY,
                              transformStyle: "preserve-3d" as const,
                          }
                        : undefined
                }
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={
                    shouldAnimate && interactive
                        ? {
                              z: 50,
                              transition: { type: "spring", stiffness: 300, damping: 30 },
                          }
                        : undefined
                }
            >
                {/* Enhanced glass reflection effect */}
                {shouldAnimate && interactive && (
                    <motion.div
                        className="rounded-inherit pointer-events-none absolute inset-0 opacity-0"
                        style={{
                            background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                        }}
                        animate={{
                            opacity: [0, 0.3, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 2,
                        }}
                    />
                )}

                {/* Content with 3D transform */}
                <div className="relative z-10 h-full" style={shouldAnimate && interactive ? { transform: "translateZ(50px)" } : undefined}>
                    {children}
                </div>

                {/* Subtle aurora border animation */}
                {shouldAnimate && (
                    <motion.div
                        className="rounded-inherit pointer-events-none absolute inset-0 opacity-0"
                        style={{
                            border: "1px solid transparent",
                            background: "linear-gradient(45deg, rgba(109,196,173,0.3), rgba(238,123,179,0.3)) border-box",
                            WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "exclude",
                        }}
                        animate={{
                            opacity: [0, 0.6, 0],
                            rotate: [0, 360],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                )}
            </motion.div>
        );
    },
);

GlassCard.displayName = "GlassCard";
