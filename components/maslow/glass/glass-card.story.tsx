import type { Meta, StoryObj } from "@storybook/react";
import { AuroraButton } from "../aurora/aurora-button";
import { GlassCard } from "./glass-card";

const meta: Meta<typeof GlassCard> = {
    title: "Maslow/Glass/GlassCard",
    component: GlassCard,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "aurora",
            values: [
                { name: "aurora", value: "linear-gradient(120deg, #EE7BB3 0%, #DA85B2 15%, #A070A6 35%, #A56FA8 50%, #6DC4AD 70%, #60C3AE 85%, #2CD552 100%)" },
                { name: "dark", value: "#0c0e12" },
            ],
        },
    },
    argTypes: {
        intensity: {
            control: "select",
            options: ["subtle", "medium", "strong"],
        },
        gradient: {
            control: "select",
            options: ["aurora", "warm", "cool", "none"],
        },
        interactive: {
            control: "boolean",
        },
        floating: {
            control: "boolean",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        intensity: "medium",
        interactive: true,
        gradient: "aurora",
        children: (
            <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">Glass Card</h3>
                <p className="mb-4 text-white/80">This is a glassmorphism card with 3D tilt effects and aurora gradients.</p>
                <AuroraButton size="sm">Action</AuroraButton>
            </div>
        ),
    },
};

export const Subtle: Story = {
    args: {
        intensity: "subtle",
        interactive: true,
        gradient: "aurora",
        children: (
            <div className="p-4">
                <h4 className="font-medium text-white">Subtle Glass</h4>
                <p className="mt-1 text-sm text-white/70">Less prominent glass effect</p>
            </div>
        ),
    },
};

export const Strong: Story = {
    args: {
        intensity: "strong",
        interactive: true,
        gradient: "aurora",
        children: (
            <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-white">Strong Glass</h3>
                <p className="mb-4 text-white/90">Maximum glass effect with enhanced blur and opacity.</p>
                <AuroraButton variant="secondary" size="md">
                    Learn More
                </AuroraButton>
            </div>
        ),
    },
};

export const WithFloating: Story = {
    args: {
        intensity: "medium",
        interactive: true,
        floating: true,
        gradient: "aurora",
        children: (
            <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">Floating Card</h3>
                <p className="text-white/80">This card floats with a gentle animation.</p>
            </div>
        ),
    },
};

export const DifferentGradients: Story = {
    render: () => (
        <div className="grid max-w-2xl grid-cols-2 gap-6">
            <GlassCard intensity="medium" gradient="aurora">
                <div className="p-4">
                    <h4 className="mb-2 font-medium text-white">Aurora</h4>
                    <p className="text-sm text-white/70">Main brand gradient</p>
                </div>
            </GlassCard>

            <GlassCard intensity="medium" gradient="warm">
                <div className="p-4">
                    <h4 className="mb-2 font-medium text-white">Warm</h4>
                    <p className="text-sm text-white/70">Warm color palette</p>
                </div>
            </GlassCard>

            <GlassCard intensity="medium" gradient="cool">
                <div className="p-4">
                    <h4 className="mb-2 font-medium text-white">Cool</h4>
                    <p className="text-sm text-white/70">Cool color palette</p>
                </div>
            </GlassCard>

            <GlassCard intensity="medium" gradient="none">
                <div className="p-4">
                    <h4 className="mb-2 font-medium text-white">None</h4>
                    <p className="text-sm text-white/70">Pure glass effect</p>
                </div>
            </GlassCard>
        </div>
    ),
};

export const InteractiveShowcase: Story = {
    render: () => (
        <div className="space-y-6">
            <GlassCard intensity="strong" interactive={true} floating={true} gradient="aurora" className="max-w-md">
                <div className="p-6">
                    <h2 className="mb-3 text-2xl font-bold text-white">AI Interface</h2>
                    <p className="mb-4 text-white/80">Experience the future of human-centered AI with living, breathing interfaces.</p>
                    <div className="flex gap-2">
                        <AuroraButton variant="primary" size="sm">
                            Get Started
                        </AuroraButton>
                        <AuroraButton variant="ghost" size="sm">
                            Learn More
                        </AuroraButton>
                    </div>
                </div>
            </GlassCard>
        </div>
    ),
};
