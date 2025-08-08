"use client";

import { forwardRef, type ElementType, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { useReducedMotion } from "@/hooks/maslow/use-reduced-motion";
import { cn } from "@/utils/maslow/cn";

const typography = cva(
    [
        "font-medium leading-tight tracking-tight transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-maslow-teal/50 focus:ring-offset-2",
        "selection:bg-maslow-teal/20 selection:text-maslow-dark-blue",
    ],
    {
        variants: {
            variant: {
                h1: "text-4xl sm:text-5xl lg:text-6xl font-bold leading-none",
                h2: "text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight",
                h3: "text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight",
                h4: "text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight",
                h5: "text-lg sm:text-xl lg:text-2xl font-semibold leading-tight",
                h6: "text-base sm:text-lg lg:text-xl font-semibold leading-tight",
                body1: "text-base sm:text-lg leading-relaxed font-normal",
                body2: "text-sm sm:text-base leading-relaxed font-normal",
                caption: "text-xs sm:text-sm leading-relaxed font-medium",
            },
            gradient: {
                false: "text-maslow-dark-blue",
                primary: "bg-aurora-primary bg-clip-text text-transparent bg-[length:200%_200%]",
                secondary: "bg-aurora-secondary bg-clip-text text-transparent bg-[length:200%_200%]",
                warm: "bg-aurora-warm bg-clip-text text-transparent bg-[length:200%_200%]",
            },
        },
        defaultVariants: {
            variant: "body1",
            gradient: false,
        },
    }
);

export interface TypographyProps extends VariantProps<typeof typography> {
    /** Typography variant defining size and semantics */
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "caption";
    /** Enable gradient text with aurora effects */
    gradient?: boolean | "primary" | "secondary" | "warm";
    /** HTML element or React component to render as */
    as?: ElementType;
    /** Content to display */
    children: ReactNode;
    /** Additional CSS classes */
    className?: string;
    /** Additional props passed to the underlying element */
    [key: string]: unknown;
}

const defaultElements: Record<string, ElementType> = {
    h1: "h1",
    h2: "h2", 
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    body1: "p",
    body2: "p",
    caption: "span",
};

export const Typography = forwardRef<HTMLElement, TypographyProps>(
    ({ className, variant = "body1", gradient = false, as, children, ...props }, ref) => {
        const prefersReducedMotion = useReducedMotion();
        
        // Determine the HTML element to render
        const Component = as || defaultElements[variant] || "p";
        
        // Convert boolean gradient to specific gradient type
        const gradientVariant = gradient === true ? "primary" : gradient;
        
        // Should animate based on user preferences and gradient presence
        const shouldAnimate = !prefersReducedMotion && gradientVariant;

        return (
            <motion.div
                className="inline-block"
                initial={shouldAnimate ? { opacity: 0, y: 10 } : undefined}
                animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
                transition={shouldAnimate ? { duration: 0.5, ease: "easeOut" } : undefined}
            >
                <Component
                    ref={ref}
                    className={cn(
                        typography({ variant, gradient: gradientVariant }),
                        
                        // Add aurora animation for gradient text
                        shouldAnimate && "animate-aurora-shift",
                        
                        // Enhanced contrast for accessibility
                        gradientVariant && "contrast-125 brightness-110",
                        
                        className
                    )}
                    // Add semantic ARIA attributes for headings
                    {...(variant.startsWith("h") && { 
                        role: "heading",
                        "aria-level": parseInt(variant.replace("h", ""))
                    })}
                    {...props}
                >
                    {children}
                </Component>
                
                {/* Subtle shimmer effect for gradient text */}
                {shouldAnimate && gradientVariant && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                        animate={{
                            translateX: ["100%", "-100%"],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 4,
                            ease: "easeInOut",
                        }}
                    />
                )}
            </motion.div>
        );
    }
);

Typography.displayName = "Typography";