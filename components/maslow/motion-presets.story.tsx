"use client";

import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    motionPresets, 
    springConfigs, 
    fadeInUp, 
    scaleIn, 
    slideInFromLeft, 
    staggerContainer, 
    floatAnimation,
    auroraGlow,
    hoverLift,
    modalContent,
    characterStagger,
    characterReveal,
} from "@/lib/animations";
import { useScrollAnimation, useScrollFadeIn, useParallaxScroll } from "@/hooks/useScrollAnimation";
import { useGradientShift, useAuroraShift, useTextGradient } from "@/hooks/useGradientShift";
import { useScrollMorph, useCardMorph, useButtonMorph } from "@/hooks/useScrollMorph";

const meta: Meta = {
    title: "Maslow/Motion Presets Library",
    component: () => <div>Motion Presets Showcase</div>,
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component: `
# Motion Animation Presets Library

A comprehensive collection of animation presets, scroll effects, and physics configurations optimized for 60fps performance with full accessibility support.

## Features
- 🎨 **20+ Motion Presets** - Entrance, exit, hover, and continuous animations
- 🌊 **Scroll Animations** - Intersection observer based with spring physics  
- 🌈 **Gradient Effects** - Dynamic aurora gradients and text effects
- 🎭 **Morphing Animations** - Transform elements while scrolling
- ♿ **Accessibility First** - Respects reduced motion preferences
- ⚡ **GPU Accelerated** - Optimized for smooth 60fps performance
- 🎯 **Spring Physics** - Natural motion configurations

## Animation Categories
- **Entrance**: fadeInUp, scaleIn, slideInFromLeft/Right/Bottom
- **Stagger**: Container animations for lists and grids
- **Continuous**: floatAnimation, pulseAnimation, shimmerEffect
- **Interactive**: hoverLift, hoverGlow
- **Aurora**: auroraGlow, shimmerEffect with Maslow colors
- **Scroll**: Intersection observer based reveals
- **Morphing**: Transform shapes, colors, and glassmorphism
                `,
            },
        },
    },
    argTypes: {
        reduceMotion: {
            control: "boolean",
            description: "Simulate reduced motion preference",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic entrance animations showcase
const EntranceAnimations = () => {
    const [show, setShow] = useState(true);

    return (
        <div className="space-y-8 p-8">
            <div className="flex gap-4 items-center">
                <h2 className="text-2xl font-bold text-maslow-dark-blue">Entrance Animations</h2>
                <button
                    onClick={() => setShow(!show)}
                    className="px-4 py-2 bg-maslow-teal text-white rounded-lg hover:bg-maslow-teal/90 transition-colors"
                >
                    Toggle
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <AnimatePresence mode="wait">
                    {show && (
                        <>
                            <motion.div
                                key="fade-up"
                                variants={fadeInUp}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-maslow-teal/20"
                            >
                                <h3 className="font-semibold text-maslow-dark-blue mb-2">Fade In Up</h3>
                                <p className="text-sm text-gray-600">Smooth fade with upward motion</p>
                            </motion.div>

                            <motion.div
                                key="scale-in"
                                variants={scaleIn}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-maslow-teal/20"
                            >
                                <h3 className="font-semibold text-maslow-dark-blue mb-2">Scale In</h3>
                                <p className="text-sm text-gray-600">Bouncy scale animation</p>
                            </motion.div>

                            <motion.div
                                key="slide-left"
                                variants={slideInFromLeft}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-maslow-teal/20"
                            >
                                <h3 className="font-semibold text-maslow-dark-blue mb-2">Slide From Left</h3>
                                <p className="text-sm text-gray-600">Horizontal slide animation</p>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

// Stagger animations showcase
const StaggerAnimations = () => {
    const [show, setShow] = useState(true);
    const items = Array.from({ length: 6 }, (_, i) => i);

    return (
        <div className="space-y-8 p-8">
            <div className="flex gap-4 items-center">
                <h2 className="text-2xl font-bold text-maslow-dark-blue">Stagger Animations</h2>
                <button
                    onClick={() => setShow(!show)}
                    className="px-4 py-2 bg-maslow-teal text-white rounded-lg hover:bg-maslow-teal/90 transition-colors"
                >
                    Toggle
                </button>
            </div>

            <AnimatePresence>
                {show && (
                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="grid grid-cols-2 md:grid-cols-3 gap-4"
                    >
                        {items.map((item) => (
                            <motion.div
                                key={item}
                                variants={fadeInUp}
                                className="p-4 bg-aurora-primary text-white rounded-lg text-center font-medium"
                            >
                                Item {item + 1}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Continuous animations showcase
const ContinuousAnimations = () => {
    return (
        <div className="space-y-8 p-8">
            <h2 className="text-2xl font-bold text-maslow-dark-blue">Continuous Animations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                    variants={floatAnimation}
                    animate="animate"
                    className="p-6 bg-aurora-secondary text-white rounded-xl text-center"
                >
                    <h3 className="font-semibold mb-2">Float Animation</h3>
                    <p className="text-sm">Gentle floating motion</p>
                </motion.div>

                <motion.div
                    variants={auroraGlow}
                    animate="animate"
                    className="p-6 bg-maslow-teal text-white rounded-xl text-center"
                >
                    <h3 className="font-semibold mb-2">Aurora Glow</h3>
                    <p className="text-sm">Pulsing glow effect</p>
                </motion.div>

                <div className="p-6 bg-gradient-to-r from-maslow-teal to-blue-400 text-white rounded-xl text-center bg-[length:200%_200%] animate-aurora-shift">
                    <h3 className="font-semibold mb-2">Shimmer Effect</h3>
                    <p className="text-sm">Background position animation</p>
                </div>
            </div>
        </div>
    );
};

// Interactive animations showcase
const InteractiveAnimations = () => {
    return (
        <div className="space-y-8 p-8">
            <h2 className="text-2xl font-bold text-maslow-dark-blue">Interactive Animations</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.button
                    variants={hoverLift}
                    whileHover="hover"
                    whileTap="tap"
                    className="p-6 bg-aurora-primary text-white rounded-xl font-medium"
                >
                    Hover Lift Effect
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-6 bg-maslow-teal text-white rounded-xl font-medium"
                >
                    Simple Scale Hover
                </motion.button>

                <motion.button
                    whileHover={{ 
                        boxShadow: "0 0 30px rgba(109, 196, 173, 0.4)",
                        scale: 1.02,
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="p-6 bg-gradient-to-r from-maslow-teal to-blue-400 text-white rounded-xl font-medium"
                >
                    Glow + Scale
                </motion.button>
            </div>
        </div>
    );
};

// Text animations showcase
const TextAnimations = () => {
    const [show, setShow] = useState(true);
    const text = "Maslow Design System".split("");

    return (
        <div className="space-y-8 p-8">
            <div className="flex gap-4 items-center">
                <h2 className="text-2xl font-bold text-maslow-dark-blue">Text Animations</h2>
                <button
                    onClick={() => setShow(!show)}
                    className="px-4 py-2 bg-maslow-teal text-white rounded-lg hover:bg-maslow-teal/90 transition-colors"
                >
                    Toggle
                </button>
            </div>

            <div className="space-y-8">
                <AnimatePresence mode="wait">
                    {show && (
                        <motion.h1
                            key="text-reveal"
                            variants={characterStagger}
                            initial="initial"
                            animate="animate"
                            className="text-4xl font-bold text-center"
                        >
                            {text.map((char, i) => (
                                <motion.span
                                    key={i}
                                    variants={characterReveal}
                                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-maslow-teal to-blue-400"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </motion.h1>
                    )}
                </AnimatePresence>

                <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-maslow-teal via-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-aurora-shift">
                        Animated Gradient Text
                    </div>
                </div>
            </div>
        </div>
    );
};

// Scroll animations showcase
const ScrollAnimations = () => {
    const { ref, opacity, scale, y } = useScrollFadeIn();
    const { ref: morphRef, morphStyle } = useCardMorph();
    
    return (
        <div className="space-y-[100vh] p-8">
            <h2 className="text-2xl font-bold text-maslow-dark-blue sticky top-8">Scroll Animations</h2>
            <p className="text-gray-600 sticky top-16">Scroll down to see animations trigger...</p>
            
            <motion.div
                ref={ref}
                style={{ opacity, scale, y }}
                className="p-8 bg-white/10 backdrop-blur-md rounded-xl border border-maslow-teal/20 mx-auto max-w-md"
            >
                <h3 className="text-xl font-semibold text-maslow-dark-blue mb-4">Scroll Fade In</h3>
                <p className="text-gray-600">This element fades in and scales when it enters the viewport.</p>
            </motion.div>

            <motion.div
                ref={morphRef}
                style={morphStyle}
                className="p-8 mx-auto max-w-md text-white text-center"
            >
                <h3 className="text-xl font-semibold mb-4">Morphing Card</h3>
                <p className="text-sm">This card morphs its shape, colors, and effects as you scroll.</p>
            </motion.div>
        </div>
    );
};

// Modal animation showcase
const ModalAnimations = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="space-y-8 p-8">
            <h2 className="text-2xl font-bold text-maslow-dark-blue">Modal Animations</h2>
            
            <button
                onClick={() => setShowModal(true)}
                className="px-6 py-3 bg-aurora-primary text-white rounded-lg font-medium hover:bg-aurora-primary/90 transition-colors"
            >
                Show Modal
            </button>

            <AnimatePresence>
                {showModal && (
                    <>
                        <motion.div
                            variants={motionPresets.modalBackdrop}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                            onClick={() => setShowModal(false)}
                        >
                            <motion.div
                                variants={modalContent}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl"
                            >
                                <h3 className="text-xl font-semibold text-maslow-dark-blue mb-4">
                                    Modal Animation
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    This modal uses spring physics for natural entrance and exit animations.
                                </p>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 bg-maslow-teal text-white rounded-lg hover:bg-maslow-teal/90 transition-colors"
                                >
                                    Close
                                </button>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

// Hook demonstrations
const HookDemonstrations = () => {
    const gradientShift = useGradientShift({
        colors: [
            "rgba(109, 196, 173, 0.8)",
            "rgba(147, 197, 253, 0.8)",
            "rgba(196, 181, 253, 0.8)",
            "rgba(109, 196, 173, 0.8)",
        ],
        duration: 3,
    });

    const textGradient = useTextGradient();
    
    return (
        <div className="space-y-8 p-8">
            <h2 className="text-2xl font-bold text-maslow-dark-blue">Animation Hooks</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                    style={{ backgroundImage: gradientShift.backgroundImage }}
                    className="p-8 rounded-xl text-white text-center"
                >
                    <h3 className="text-xl font-semibold mb-4">Gradient Shift Hook</h3>
                    <p className="text-sm">Dynamic gradient animation using useGradientShift</p>
                </motion.div>

                <div className="p-8 bg-white/10 backdrop-blur-md rounded-xl text-center">
                    <h3 
                        className="text-xl font-semibold mb-4"
                        style={textGradient}
                    >
                        Text Gradient Hook
                    </h3>
                    <p className="text-sm text-gray-600">Animated gradient text using useTextGradient</p>
                </div>
            </div>
        </div>
    );
};

// Main showcase story
export const AnimationShowcase: Story = {
    render: () => {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="container mx-auto space-y-16 py-8">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-maslow-teal to-blue-400 bg-clip-text text-transparent">
                            Motion Animation Presets Library
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A comprehensive collection of GPU-accelerated animations with accessibility support for the Maslow Design System.
                        </p>
                    </div>

                    <EntranceAnimations />
                    <StaggerAnimations />
                    <ContinuousAnimations />
                    <InteractiveAnimations />
                    <TextAnimations />
                    <ModalAnimations />
                    <HookDemonstrations />
                    <ScrollAnimations />
                </div>
            </div>
        );
    },
};

// Individual component stories
export const EntrancePresets: Story = {
    render: () => <EntranceAnimations />,
};

export const StaggerPresets: Story = {
    render: () => <StaggerAnimations />,
};

export const ContinuousPresets: Story = {
    render: () => <ContinuousAnimations />,
};

export const InteractivePresets: Story = {
    render: () => <InteractiveAnimations />,
};

export const TextPresets: Story = {
    render: () => <TextAnimations />,
};

export const ScrollPresets: Story = {
    render: () => <ScrollAnimations />,
};

export const ModalPresets: Story = {
    render: () => <ModalAnimations />,
};

export const AnimationHooks: Story = {
    render: () => <HookDemonstrations />,
};

// Performance testing story
export const PerformanceTest: Story = {
    render: () => {
        const items = Array.from({ length: 50 }, (_, i) => i);
        
        return (
            <div className="p-8 space-y-8">
                <h2 className="text-2xl font-bold text-maslow-dark-blue">Performance Test (50 Animated Elements)</h2>
                
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="grid grid-cols-5 md:grid-cols-10 gap-2"
                >
                    {items.map((item) => (
                        <motion.div
                            key={item}
                            variants={fadeInUp}
                            whileHover={hoverLift.hover}
                            className="aspect-square bg-aurora-primary rounded-lg flex items-center justify-center text-white font-bold text-sm cursor-pointer"
                        >
                            {item + 1}
                        </motion.div>
                    ))}
                </motion.div>
                
                <p className="text-sm text-gray-600">
                    This grid tests performance with 50 simultaneously animated elements. All animations should run at 60fps.
                </p>
            </div>
        );
    },
};