"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { useReducedMotion } from "@/hooks/maslow/use-reduced-motion";
import { cn } from "@/utils/maslow/cn";

const typographyVariants = cva(
    [
        "font-sans",
        "transition-all duration-300 ease-out",
        "gpu-accelerated",
        "relative",
    ],
    {
        variants: {
            variant: {
                h1: [
                    "text-4xl md:text-5xl lg:text-6xl",
                    "font-bold",
                    "leading-tight",
                    "tracking-tight",
                ].join(" "),
                h2: [
                    "text-3xl md:text-4xl lg:text-5xl",
                    "font-bold",
                    "leading-tight",
                    "tracking-tight",
                ].join(" "),
                h3: [
                    "text-2xl md:text-3xl lg:text-4xl",
                    "font-semibold",
                    "leading-tight",
                    "tracking-tight",
                ].join(" "),
                h4: [
                    "text-xl md:text-2xl lg:text-3xl",
                    "font-semibold",
                    "leading-tight",
                    "tracking-tight",
                ].join(" "),
                h5: [
                    "text-lg md:text-xl lg:text-2xl",
                    "font-medium",
                    "leading-tight",
                    "tracking-tight",
                ].join(" "),
                h6: [
                    "text-base md:text-lg lg:text-xl",
                    "font-medium",
                    "leading-tight",
                    "tracking-tight",
                ].join(" "),
                body1: [
                    "text-base md:text-lg",
                    "font-normal",
                    "leading-relaxed",
                    "tracking-normal",
                ].join(" "),
                body2: [
                    "text-sm md:text-base",
                    "font-normal",
                    "leading-relaxed",
                    "tracking-normal",
                ].join(" "),
                caption: [
                    "text-xs md:text-sm",
                    "font-normal",
                    "leading-normal",
                    "tracking-wide",
                ].join(" "),
            },
            gradient: {
                false: "text-maslow-dark-blue",
                primary: [
                    "bg-aurora-primary",
                    "bg-clip-text",
                    "text-transparent",
                    "bg-[length:200%_auto]",
                    "animate-gradient-x",
                ].join(" "),
                secondary: [
                    "bg-aurora-secondary",
                    "bg-clip-text", 
                    "text-transparent",
                    "bg-[length:200%_auto]",
                    "animate-gradient-x",
                ].join(" "),
                warm: [
                    "bg-aurora-warm",
                    "bg-clip-text",
                    "text-transparent", 
                    "bg-[length:200%_auto]",
                    "animate-gradient-x",
                ].join(" "),
            },
        },
        defaultVariants: {
            variant: "body1",
            gradient: false,
        },
    }
);

export interface TypographyProps
    extends Omit<React.HTMLAttributes<HTMLElement>, "className">,
        VariantProps<typeof typographyVariants> {
    /** Typography variant */
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "caption";
    /** Enable gradient text effect */
    gradient?: false | "primary" | "secondary" | "warm";
    /** Element type to render as */
    as?: keyof JSX.IntrinsicElements;
    /** Custom CSS classes */
    className?: string;
    /** Content to display */
    children: React.ReactNode;
}

const defaultElementMap = {
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

export const Typography = forwardRef<HTMLElement, TypographyProps>(
    ({ className, variant = "body1", gradient = false, as, children, ...props }, ref) => {
        const prefersReducedMotion = useReducedMotion();
        
        // Determine the element type
        const Element = as || defaultElementMap[variant];
        
        // Disable animations if user prefers reduced motion
        const shouldAnimate = !prefersReducedMotion && gradient !== false;
        
        const typographyClasses = cn(
            typographyVariants({ variant, gradient }),
            // Disable gradient animations for reduced motion
            prefersReducedMotion && gradient !== false && "animate-none",
            className
        );

        // Add motion wrapper for gradient variants when animations are enabled
        if (shouldAnimate && gradient !== false) {
            return (
                <motion.div
                    className="inline-block"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        duration: 0.6,
                        ease: "easeOut",
                        delay: 0.1
                    }}
                >
                    <Element
                        ref={ref as any}
                        className={typographyClasses}
                        role={variant.startsWith('h') ? 'heading' : undefined}
                        aria-level={variant.startsWith('h') ? parseInt(variant.charAt(1)) : undefined}
                        {...props}
                    >
                        {children}
                    </Element>
                </motion.div>
            );
        }

        return (
            <Element
                ref={ref as any}
                className={typographyClasses}
                role={variant.startsWith('h') ? 'heading' : undefined}
                aria-level={variant.startsWith('h') ? parseInt(variant.charAt(1)) : undefined}
                {...props}
            >
                {children}
            </Element>
        );
    }
);

Typography.displayName = "Typography";