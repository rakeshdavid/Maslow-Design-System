"use client";

import { type ComponentPropsWithoutRef, type ElementType, forwardRef } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/maslow/use-reduced-motion";
import { cn } from "@/utils/maslow/cn";

export interface TypographyProps extends ComponentPropsWithoutRef<"div"> {
    /** Typography variant */
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "caption";
    /** Enable aurora gradient text */
    gradient?: boolean;
    /** HTML element to render as */
    as?: ElementType;
    /** Content */
    children: React.ReactNode;
}

const typographyVariants = {
    h1: "text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight",
    h2: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight",
    h3: "text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug tracking-tight",
    h4: "text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug",
    h5: "text-xl md:text-2xl lg:text-3xl font-medium leading-normal",
    h6: "text-lg md:text-xl lg:text-2xl font-medium leading-normal",
    body1: "text-base md:text-lg leading-relaxed",
    body2: "text-sm md:text-base leading-relaxed",
    caption: "text-xs md:text-sm leading-normal opacity-75",
};

const gradientStyles = {
    primary: "bg-gradient-to-r from-maslow-teal via-maslow-blue to-maslow-purple bg-clip-text text-transparent",
    aurora: "bg-aurora-primary bg-clip-text text-transparent",
    warm: "bg-aurora-warm bg-clip-text text-transparent",
};

const defaultElements = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    body1: "p",
    body2: "p",
    caption: "span",
} as const;

export const Typography = forwardRef<HTMLElement, TypographyProps>(({ variant = "body1", gradient = false, as, className, children, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();
    const shouldAnimate = !prefersReducedMotion;

    // Determine the HTML element to render
    const Component = (as || defaultElements[variant]) as any;

    // Base classes for the typography
    const baseClasses = cn(
        "font-manrope", // Use Manrope font family
        typographyVariants[variant],
        gradient && gradientStyles.aurora,
        className,
    );

    // Animation variants for gradient text
    const gradientAnimation =
        shouldAnimate && gradient
            ? {
                  initial: { backgroundPosition: "0% 50%" },
                  animate: { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] },
                  transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut" as const,
                  },
              }
            : {};

    // Gradient styles
    const gradientStyle = gradient
        ? {
              background: "linear-gradient(45deg, hsl(var(--maslow-teal)), hsl(var(--maslow-pink)), hsl(var(--maslow-purple)), hsl(var(--maslow-blue)))",
              backgroundSize: "300% 300%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
          }
        : {};

    // If gradient and animations are enabled, wrap in motion component
    if (gradient && shouldAnimate) {
        return (
            <motion.div className="inline-block" style={gradientStyle} {...gradientAnimation}>
                <Component ref={ref} className={baseClasses} {...props}>
                    {children}
                </Component>
            </motion.div>
        );
    }

    // Static typography without animations
    return (
        <Component ref={ref} className={baseClasses} style={gradientStyle} {...props}>
            {children}
        </Component>
    );
});

Typography.displayName = "Typography";
