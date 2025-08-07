import type { Meta, StoryObj } from "@storybook/react";
import { AuroraButton } from "./aurora-button";

const meta: Meta<typeof AuroraButton> = {
    title: "Maslow/Aurora/AuroraButton",
    component: AuroraButton,
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "dark",
            values: [
                { name: "dark", value: "#0c0e12" },
                { name: "light", value: "#f8f9fa" },
            ],
        },
    },
    argTypes: {
        variant: {
            control: "select",
            options: ["primary", "secondary", "ghost", "warm"],
        },
        intensity: {
            control: "select",
            options: ["subtle", "medium", "strong"],
        },
        size: {
            control: "select",
            options: ["sm", "md", "lg", "xl"],
        },
        glow: {
            control: "boolean",
        },
        morphing: {
            control: "boolean",
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Get Started",
        variant: "primary",
        size: "md",
        glow: true,
    },
};

export const Secondary: Story = {
    args: {
        children: "Learn More",
        variant: "secondary",
        size: "md",
        glow: true,
    },
};

export const Ghost: Story = {
    args: {
        children: "Ghost Button",
        variant: "ghost",
        size: "md",
        glow: false,
    },
};

export const Warm: Story = {
    args: {
        children: "Warm Aurora",
        variant: "warm",
        size: "md",
        glow: true,
    },
};

export const WithMorphing: Story = {
    args: {
        children: "Morphing Effect",
        variant: "primary",
        size: "lg",
        glow: true,
        morphing: true,
        intensity: "strong",
    },
};

export const AllSizes: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-4">
            <AuroraButton size="sm" variant="primary">
                Small
            </AuroraButton>
            <AuroraButton size="md" variant="primary">
                Medium
            </AuroraButton>
            <AuroraButton size="lg" variant="primary">
                Large
            </AuroraButton>
            <AuroraButton size="xl" variant="primary">
                Extra Large
            </AuroraButton>
        </div>
    ),
};

export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap items-center gap-4">
            <AuroraButton variant="primary">Primary</AuroraButton>
            <AuroraButton variant="secondary">Secondary</AuroraButton>
            <AuroraButton variant="ghost">Ghost</AuroraButton>
            <AuroraButton variant="warm">Warm</AuroraButton>
        </div>
    ),
};
