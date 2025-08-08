import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./typography";

const meta = {
    title: "Maslow/UI/Typography",
    component: Typography,
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component: "Typography component with aurora gradient text support for the Maslow Design System.",
            },
        },
    },
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2", "caption"],
            description: "Typography variant defining size and semantics",
        },
        gradient: {
            control: { type: "select" },
            options: [false, "primary", "secondary", "warm"],
            description: "Enable gradient text with aurora effects",
        },
        as: {
            control: { type: "text" },
            description: "HTML element to render as",
        },
        children: {
            control: { type: "text" },
            description: "Content to display",
        },
    },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "body1",
        children: "This is default body text with no gradient applied.",
    },
};

export const AllVariants: Story = {
    render: () => (
        <div className="space-y-6">
            <div className="space-y-4">
                <Typography variant="h1">Heading 1 - Hero Title</Typography>
                <Typography variant="h2">Heading 2 - Section Title</Typography>
                <Typography variant="h3">Heading 3 - Subsection</Typography>
                <Typography variant="h4">Heading 4 - Component Title</Typography>
                <Typography variant="h5">Heading 5 - Card Title</Typography>
                <Typography variant="h6">Heading 6 - List Title</Typography>
            </div>
            
            <div className="space-y-2 max-w-2xl">
                <Typography variant="body1">
                    Body 1 - This is the primary body text variant used for main content areas, 
                    article text, and longer form descriptions. It provides excellent readability 
                    across all device sizes.
                </Typography>
                <Typography variant="body2">
                    Body 2 - This is a smaller body text variant ideal for secondary content, 
                    captions under images, or supportive information that doesn't need as much visual weight.
                </Typography>
                <Typography variant="caption">
                    Caption - Small text for metadata, timestamps, or supplementary information.
                </Typography>
            </div>
        </div>
    ),
};

export const GradientShowcase: Story = {
    render: () => (
        <div className="space-y-8 text-center">
            <div className="space-y-4">
                <Typography variant="h1" gradient="primary">
                    Primary Aurora Gradient
                </Typography>
                <Typography variant="h2" gradient="secondary">
                    Secondary Aurora Gradient  
                </Typography>
                <Typography variant="h3" gradient="warm">
                    Warm Aurora Gradient
                </Typography>
            </div>
            
            <div className="space-y-4">
                <Typography variant="body1" gradient="primary">
                    Body text with primary aurora gradient - perfect for highlighting key messages 
                    and creating visual hierarchy in your content.
                </Typography>
                <Typography variant="body2" gradient="secondary">
                    Secondary gradient body text creates a sophisticated look while maintaining readability.
                </Typography>
                <Typography variant="caption" gradient="warm">
                    Even captions can shine with warm aurora effects for special callouts.
                </Typography>
            </div>
        </div>
    ),
};

export const SemanticHTML: Story = {
    render: () => (
        <div className="space-y-6">
            <Typography variant="h1" as="h1" gradient="primary">
                Semantic H1 Heading
            </Typography>
            
            <Typography variant="body1" as="p">
                This paragraph demonstrates proper semantic HTML structure while using Typography component styling.
            </Typography>
            
            <Typography variant="h3" as="h2" gradient="secondary">
                Visual H3 as Semantic H2
            </Typography>
            
            <Typography variant="caption" as="span" gradient="warm">
                Caption styled as inline span element
            </Typography>
        </div>
    ),
};

export const AccessibilityFeatures: Story = {
    render: () => (
        <div className="space-y-6">
            <div className="p-4 bg-maslow-silver/20 rounded-lg">
                <Typography variant="h4" gradient="primary">
                    Accessibility Features
                </Typography>
                
                <div className="mt-4 space-y-3">
                    <Typography variant="body2">
                        • Proper ARIA labels and semantic HTML structure
                    </Typography>
                    <Typography variant="body2">
                        • Reduced motion support respects user preferences
                    </Typography>
                    <Typography variant="body2">
                        • High contrast gradients for better visibility
                    </Typography>
                    <Typography variant="body2">
                        • Focus indicators for keyboard navigation
                    </Typography>
                    <Typography variant="body2">
                        • Optimized text selection with custom colors
                    </Typography>
                </div>
            </div>
        </div>
    ),
};

export const ResponsiveDesign: Story = {
    render: () => (
        <div className="space-y-6">
            <Typography variant="h2" gradient="primary">
                Responsive Typography
            </Typography>
            
            <div className="grid gap-4">
                <div className="p-4 bg-maslow-silver/10 rounded-lg">
                    <Typography variant="body2" className="text-maslow-gray-dark mb-2">
                        Mobile (base) → Tablet (sm:) → Desktop (lg:)
                    </Typography>
                    <Typography variant="h1" gradient="secondary">
                        4xl → 5xl → 6xl
                    </Typography>
                </div>
                
                <div className="p-4 bg-maslow-silver/10 rounded-lg">
                    <Typography variant="body2" className="text-maslow-gray-dark mb-2">
                        Body text scales smoothly across breakpoints
                    </Typography>
                    <Typography variant="body1">
                        This body text adjusts from base (16px) to lg (18px) size 
                        automatically based on screen size, ensuring optimal readability.
                    </Typography>
                </div>
            </div>
        </div>
    ),
};

export const CustomStyling: Story = {
    render: () => (
        <div className="space-y-4">
            <Typography 
                variant="h3" 
                gradient="primary"
                className="text-center underline decoration-maslow-teal decoration-2 underline-offset-4"
            >
                Custom Underlined Heading
            </Typography>
            
            <Typography 
                variant="body1" 
                gradient="warm"
                className="italic text-center max-w-md mx-auto"
            >
                Italic gradient text with custom width constraints and centered alignment.
            </Typography>
            
            <Typography 
                variant="caption" 
                className="uppercase tracking-wider text-maslow-gray-dark text-center"
            >
                Uppercase caption without gradient
            </Typography>
        </div>
    ),
};

export const LongFormContent: Story = {
    render: () => (
        <article className="max-w-4xl space-y-6">
            <Typography variant="h1" gradient="primary">
                The Future of Design Systems
            </Typography>
            
            <Typography variant="h2" gradient="secondary">
                Aurora Gradients in Modern UI
            </Typography>
            
            <Typography variant="body1">
                Design systems have evolved significantly in recent years, with aurora gradients 
                becoming a popular choice for creating visually stunning and engaging user interfaces. 
                These gradients provide depth, movement, and emotional connection while maintaining 
                accessibility and usability standards.
            </Typography>
            
            <Typography variant="body1">
                The Maslow Design System incorporates these principles through carefully crafted 
                gradient combinations that respect user preferences for reduced motion while still 
                delivering beautiful, accessible typography that scales across all device sizes.
            </Typography>
            
            <Typography variant="h3" gradient="warm">
                Implementation Benefits
            </Typography>
            
            <Typography variant="body2">
                By using a component-based approach with proper semantic HTML and ARIA attributes, 
                developers can create consistent, accessible typography that automatically adapts 
                to user preferences and device capabilities.
            </Typography>
            
            <Typography variant="caption" className="text-maslow-gray-dark">
                Last updated: August 2025 • Maslow Design System v3.0
            </Typography>
        </article>
    ),
};