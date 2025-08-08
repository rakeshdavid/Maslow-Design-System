import type { Meta, StoryObj } from "@storybook/react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Import animation presets
import {
    fadeInUp,
    fadeInDown,
    scaleIn,
    slideInFromLeft,
    slideInFromRight,
    floatAnimation,
    auroraGlow,
    pulseGlow,
    hoverLift,
    hoverScale,
    hoverRotate,
    staggerContainer,
    staggerContainerFast,
    modalContent,
    slideUpDrawer,
    slideInDrawer,
    shimmerEffect,
    morphingShape,
    auroraTextShift,
    springConfigs,
    transitionPresets,
} from "@/lib/animations";

// Import hooks
import { useScrollAnimation, useScrollFadeIn, useParallaxScroll, useScrollReveal } from "@/hooks/useScrollAnimation";
import { useGradientShift, useAuroraShift, useTextGradient } from "@/hooks/useGradientShift";
import { useScrollMorph, useCardMorph, useButtonMorph } from "@/hooks/useScrollMorph";
import { useReducedMotion } from "@/hooks/maslow/use-reduced-motion";

// Demo components
const AnimationCard = ({ 
    children, 
    title, 
    className = "" 
}: { 
    children: React.ReactNode; 
    title: string; 
    className?: string;
}) => (
    <div className={`glass-card p-6 ${className}`}>
        <h3 className="text-lg font-semibold text-maslow-dark-blue mb-4">{title}</h3>
        <div className="space-y-4">
            {children}
        </div>
    </div>
);

const DemoButton = ({ 
    children, 
    onClick, 
    className = "" 
}: { 
    children: React.ReactNode; 
    onClick?: () => void; 
    className?: string;
}) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 bg-aurora-primary text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 ${className}`}
    >
        {children}
    </button>
);

// Performance test component
const PerformanceTest = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [fps, setFps] = useState(0);
    const frameRef = useRef<number>();
    const lastTimeRef = useRef<number>();
    const frameCountRef = useRef<number>(0);

    const startPerformanceTest = () => {
        setIsRunning(true);
        frameCountRef.current = 0;
        lastTimeRef.current = performance.now();

        const measureFPS = () => {
            const currentTime = performance.now();
            frameCountRef.current++;

            if (currentTime - (lastTimeRef.current || 0) >= 1000) {
                setFps(Math.round(frameCountRef.current * 1000 / (currentTime - (lastTimeRef.current || 0))));
                frameCountRef.current = 0;
                lastTimeRef.current = currentTime;
            }

            if (isRunning) {
                frameRef.current = requestAnimationFrame(measureFPS);
            }
        };

        frameRef.current = requestAnimationFrame(measureFPS);
    };

    const stopPerformanceTest = () => {
        setIsRunning(false);
        if (frameRef.current) {
            cancelAnimationFrame(frameRef.current);
        }
    };

    useEffect(() => {
        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
        };
    }, []);

    return (
        <AnimationCard title="Performance Test">
            <div className="flex items-center gap-4">
                <DemoButton
                    onClick={isRunning ? stopPerformanceTest : startPerformanceTest}
                >
                    {isRunning ? "Stop Test" : "Start FPS Test"}
                </DemoButton>
                <div className="text-lg font-mono">
                    FPS: <span className={`font-bold ${fps >= 55 ? "text-green-600" : fps >= 30 ? "text-yellow-600" : "text-red-600"}`}>
                        {fps}
                    </span>
                </div>
            </div>
            {isRunning && (
                <div className="grid grid-cols-4 gap-4 mt-4">
                    {Array.from({ length: 20 }, (_, i) => (
                        <motion.div
                            key={i}
                            className="h-16 bg-aurora-primary rounded-lg"
                            variants={scaleIn}
                            initial="initial"
                            animate="animate"
                            transition={{
                                ...springConfigs.bouncy,
                                delay: i * 0.05,
                                repeat: Infinity,
                                repeatType: "reverse",
                                repeatDelay: 1,
                            }}
                        />
                    ))}
                </div>
            )}
        </AnimationCard>
    );
};

// Entrance animations showcase
const EntranceAnimationsShowcase = () => {
    const [activeDemo, setActiveDemo] = useState<string | null>(null);

    const demos = [
        { name: "fadeInUp", variant: fadeInUp, color: "bg-maslow-teal" },
        { name: "fadeInDown", variant: fadeInDown, color: "bg-maslow-pink" },
        { name: "scaleIn", variant: scaleIn, color: "bg-maslow-purple-v2" },
        { name: "slideInFromLeft", variant: slideInFromLeft, color: "bg-maslow-sky-blue" },
        { name: "slideInFromRight", variant: slideInFromRight, color: "bg-maslow-coral" },
    ];

    return (
        <AnimationCard title="Entrance Animations">
            <div className="flex gap-2 flex-wrap">
                {demos.map((demo) => (
                    <DemoButton
                        key={demo.name}
                        onClick={() => setActiveDemo(activeDemo === demo.name ? null : demo.name)}
                    >
                        {demo.name}
                    </DemoButton>
                ))}
            </div>
            <div className="h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                <AnimatePresence mode="wait">
                    {activeDemo && (
                        <motion.div
                            key={activeDemo}
                            className={`w-24 h-24 rounded-lg ${demos.find(d => d.name === activeDemo)?.color} flex items-center justify-center text-white font-bold`}
                            variants={demos.find(d => d.name === activeDemo)?.variant}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            {activeDemo}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </AnimationCard>
    );
};

// Continuous animations showcase
const ContinuousAnimationsShowcase = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <AnimationCard title="Continuous Animations">
            <DemoButton onClick={() => setIsActive(!isActive)}>
                {isActive ? "Stop" : "Start"} Continuous Animations
            </DemoButton>
            <div className="grid grid-cols-3 gap-4">
                <motion.div
                    className="h-20 bg-aurora-primary rounded-lg flex items-center justify-center text-white font-bold"
                    variants={floatAnimation}
                    animate={isActive ? "animate" : ""}
                >
                    Float
                </motion.div>
                <motion.div
                    className="h-20 bg-aurora-secondary rounded-lg flex items-center justify-center text-white font-bold"
                    variants={auroraGlow}
                    animate={isActive ? "animate" : ""}
                >
                    Aurora Glow
                </motion.div>
                <motion.div
                    className="h-20 bg-aurora-warm rounded-lg flex items-center justify-center text-maslow-dark-blue font-bold"
                    variants={pulseGlow}
                    animate={isActive ? "animate" : ""}
                >
                    Pulse Glow
                </motion.div>
            </div>
        </AnimationCard>
    );
};

// Hover animations showcase
const HoverAnimationsShowcase = () => {
    return (
        <AnimationCard title="Hover Animations">
            <div className="grid grid-cols-3 gap-4">
                <motion.div
                    className="h-20 bg-maslow-teal rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
                    variants={hoverLift}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                >
                    Hover Lift
                </motion.div>
                <motion.div
                    className="h-20 bg-maslow-pink rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
                    variants={hoverScale}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                >
                    Hover Scale
                </motion.div>
                <motion.div
                    className="h-20 bg-maslow-purple-v2 rounded-lg flex items-center justify-center text-white font-bold cursor-pointer"
                    variants={hoverRotate}
                    initial="initial"
                    whileHover="hover"
                >
                    Hover Rotate
                </motion.div>
            </div>
        </AnimationCard>
    );
};

// Stagger animations showcase
const StaggerAnimationsShowcase = () => {
    const [trigger, setTrigger] = useState(false);

    const items = Array.from({ length: 8 }, (_, i) => i);

    return (
        <AnimationCard title="Stagger Animations">
            <DemoButton onClick={() => setTrigger(!trigger)}>
                Trigger Stagger
            </DemoButton>
            <motion.div
                className="grid grid-cols-4 gap-4"
                variants={staggerContainer}
                initial="initial"
                animate={trigger ? "animate" : "initial"}
            >
                {items.map((i) => (
                    <motion.div
                        key={i}
                        className="h-16 bg-gradient-to-br from-maslow-teal to-maslow-purple-v2 rounded-lg flex items-center justify-center text-white font-bold"
                        variants={scaleIn}
                    >
                        {i + 1}
                    </motion.div>
                ))}
            </motion.div>
        </AnimationCard>
    );
};

// Scroll animations showcase
const ScrollAnimationsShowcase = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { ref: fadeRef, ...fadeProps } = useScrollFadeIn();
    const { ref: revealRef, ...revealProps } = useScrollReveal();
    const { ref: parallaxRef, y: parallaxY } = useParallaxScroll(0.3);

    return (
        <AnimationCard title="Scroll Animations" className="h-96 overflow-y-auto">
            <div ref={scrollRef} className="space-y-8 pb-8">
                <motion.div
                    ref={fadeRef}
                    className="h-20 bg-maslow-teal rounded-lg flex items-center justify-center text-white font-bold"
                    {...fadeProps}
                >
                    Scroll Fade In
                </motion.div>
                
                <motion.div
                    ref={revealRef}
                    className="h-20 bg-maslow-pink rounded-lg flex items-center justify-center text-white font-bold"
                    {...revealProps}
                >
                    Scroll Reveal
                </motion.div>
                
                <motion.div
                    ref={parallaxRef}
                    className="h-20 bg-maslow-purple-v2 rounded-lg flex items-center justify-center text-white font-bold"
                    style={{ y: parallaxY }}
                >
                    Parallax Scroll
                </motion.div>

                <div className="h-40 bg-gradient-to-b from-maslow-silver to-transparent rounded-lg flex items-center justify-center text-maslow-dark-blue">
                    Scroll down to see animations
                </div>
            </div>
        </AnimationCard>
    );
};

// Gradient shift showcase
const GradientShiftShowcase = () => {
    const { ref: gradientRef, style: gradientStyle } = useGradientShift({
        speed: 1.5,
        hueRange: [0, 60],
    });

    const { ref: textRef, textGradientStyle } = useTextGradient({
        speed: 0.8,
        hueRange: [0, 45],
    });

    return (
        <AnimationCard title="Gradient Shift Animations">
            <motion.div
                ref={gradientRef}
                className="h-20 bg-aurora-primary rounded-lg flex items-center justify-center text-white font-bold"
                style={gradientStyle}
            >
                Aurora Gradient Shift
            </motion.div>
            
            <motion.h2
                ref={textRef}
                className="text-3xl font-bold text-center"
                style={textGradientStyle}
            >
                Animated Text Gradient
            </motion.h2>
        </AnimationCard>
    );
};

// Morph animations showcase  
const MorphAnimationsShowcase = () => {
    const { ref: cardRef, style: cardStyle } = useCardMorph();
    const { ref: buttonRef, style: buttonStyle } = useButtonMorph();

    return (
        <AnimationCard title="Morphing Animations" className="h-96 overflow-y-auto">
            <div className="space-y-8 pb-8">
                <motion.div
                    ref={cardRef}
                    className="h-24 bg-aurora-primary flex items-center justify-center text-white font-bold"
                    style={cardStyle}
                >
                    Card Morph (Scroll to see)
                </motion.div>
                
                <motion.button
                    ref={buttonRef}
                    className="w-full h-12 bg-aurora-secondary text-white font-bold"
                    style={buttonStyle}
                >
                    Button Morph (Scroll to see)
                </motion.button>

                <div className="h-32 bg-gradient-to-b from-maslow-silver to-transparent rounded-lg flex items-center justify-center text-maslow-dark-blue">
                    Keep scrolling for morphing effects
                </div>
            </div>
        </AnimationCard>
    );
};

// Reduced motion showcase
const ReducedMotionShowcase = () => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <AnimationCard title="Reduced Motion Support">
            <div className="space-y-4">
                <div className={`p-4 rounded-lg ${prefersReducedMotion ? "bg-yellow-100" : "bg-green-100"}`}>
                    <p className="font-semibold">
                        Reduced Motion: {prefersReducedMotion ? "ON" : "OFF"}
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                        {prefersReducedMotion 
                            ? "Animations are simplified for accessibility"
                            : "All animations are enabled"
                        }
                    </p>
                </div>
                
                <motion.div
                    className="h-16 bg-maslow-teal rounded-lg flex items-center justify-center text-white font-bold"
                    variants={scaleIn}
                    initial="initial"
                    animate="animate"
                    transition={prefersReducedMotion ? { duration: 0.2 } : springConfigs.bouncy}
                >
                    Animation respects user preference
                </motion.div>
            </div>
        </AnimationCard>
    );
};

// Spring configurations showcase
const SpringConfigsShowcase = () => {
    const [activeSpring, setActiveSpring] = useState<keyof typeof springConfigs>("default");
    const [trigger, setTrigger] = useState(false);

    return (
        <AnimationCard title="Spring Configurations">
            <div className="flex gap-2 flex-wrap">
                {Object.keys(springConfigs).map((spring) => (
                    <button
                        key={spring}
                        onClick={() => setActiveSpring(spring as keyof typeof springConfigs)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-all ${
                            activeSpring === spring 
                                ? "bg-maslow-teal text-white" 
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    >
                        {spring}
                    </button>
                ))}
            </div>
            
            <DemoButton onClick={() => setTrigger(!trigger)}>
                Test {activeSpring} Spring
            </DemoButton>
            
            <motion.div
                className="h-20 bg-aurora-primary rounded-lg flex items-center justify-center text-white font-bold"
                animate={trigger ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                transition={springConfigs[activeSpring]}
            >
                {activeSpring} Spring
            </motion.div>
        </AnimationCard>
    );
};

// Main component
const MotionPresetsShowcase = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-maslow-dark-blue mb-4">
                    Motion Animation Presets Library
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Comprehensive animation library for Maslow Design System with GPU acceleration,
                    reduced motion support, and 60fps performance optimization.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <PerformanceTest />
                <ReducedMotionShowcase />
                <EntranceAnimationsShowcase />
                <ContinuousAnimationsShowcase />
                <HoverAnimationsShowcase />
                <StaggerAnimationsShowcase />
                <ScrollAnimationsShowcase />
                <GradientShiftShowcase />
                <MorphAnimationsShowcase />
                <SpringConfigsShowcase />
            </div>
        </div>
    );
};

// Storybook configuration
const meta: Meta<typeof MotionPresetsShowcase> = {
    title: "Maslow/Motion Presets Library",
    component: MotionPresetsShowcase,
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: `
# Motion Animation Presets Library

A comprehensive collection of animation presets, scroll hooks, and spring configurations for the Maslow Design System.

## Features

- **20+ Motion Presets** - Entrance, exit, hover, and continuous animations
- **Scroll Animations** - Intersection observer based with spring physics  
- **Gradient Effects** - Dynamic aurora gradients and text effects
- **Morphing Animations** - Transform elements while scrolling
- **Accessibility First** - Respects reduced motion preferences
- **GPU Accelerated** - Optimized for smooth 60fps performance
- **Spring Physics** - Natural motion configurations

## Performance

All animations are optimized for:
- 60fps performance on modern devices
- GPU acceleration with \`will-change\` and \`transform3d\`
- Minimal reflows and repaints
- Efficient intersection observer usage
- Spring physics for natural motion

## Accessibility

- Automatically detects \`prefers-reduced-motion\`
- Provides simplified alternatives for reduced motion users
- Maintains semantic meaning when animations are disabled
- Respects user preferences at system level

## Usage Examples

\`\`\`tsx
// Basic entrance animation
<motion.div
  variants={fadeInUp}
  initial="initial"
  animate="animate"
  exit="exit"
>
  Content
</motion.div>

// Scroll-triggered animation
const { ref, opacity, scale } = useScrollAnimation();

<motion.div
  ref={ref}
  style={{ opacity, scale }}
>
  Scroll content
</motion.div>

// Aurora gradient shift
const { ref, style } = useGradientShift();

<motion.div
  ref={ref}
  className="bg-aurora-primary"
  style={style}
>
  Aurora content
</motion.div>
\`\`\`
                `,
            },
        },
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: "Interactive Showcase",
    render: () => <MotionPresetsShowcase />,
};

export const EntranceAnimations: Story = {
    name: "Entrance Animations",
    render: () => <EntranceAnimationsShowcase />,
};

export const ContinuousAnimations: Story = {
    name: "Continuous Animations", 
    render: () => <ContinuousAnimationsShowcase />,
};

export const HoverAnimations: Story = {
    name: "Hover Animations",
    render: () => <HoverAnimationsShowcase />,
};

export const ScrollAnimations: Story = {
    name: "Scroll Animations",
    render: () => <ScrollAnimationsShowcase />,
};

export const GradientShift: Story = {
    name: "Gradient Shift",
    render: () => <GradientShiftShowcase />,
};

export const MorphingAnimations: Story = {
    name: "Morphing Animations",
    render: () => <MorphAnimationsShowcase />,
};

export const SpringConfigurations: Story = {
    name: "Spring Configurations",
    render: () => <SpringConfigsShowcase />,
};

export const PerformanceTest: Story = {
    name: "Performance Test",
    render: () => <PerformanceTest />,
};