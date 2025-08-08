import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./typography";

const meta: Meta<typeof Typography> = {
    title: "Maslow/UI/Typography",
    component: Typography,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Aurora Typography component with gradient text support and accessibility features. Part of the Maslow Design System v3.0.",
            },
        },
    },
    argTypes: {
        variant: {
            control: "select",
            options: ["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2", "caption"],
            description: "Typography variant for different text sizes and semantics",
        },
        gradient: {
            control: "select", 
            options: [false, "primary", "secondary", "warm"],
            description: "Apply aurora gradient to text using bg-clip-text",
        },
        as: {
            control: "text",
            description: "Override the default HTML element",
        },
        children: {
            control: "text",
            description: "Text content to display",
        },
    },
    args: {
        children: "Typography Component",
        variant: "body1",
        gradient: false,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: "Default typography component",
        variant: "body1",
        gradient: false,
    },
};

export const AllHeadings: Story = {
    render: () => (
        <div className="space-y-6">
            <Typography variant="h1">Heading 1 - Main Title</Typography>
            <Typography variant="h2">Heading 2 - Section Title</Typography>
            <Typography variant="h3">Heading 3 - Subsection</Typography>
            <Typography variant="h4">Heading 4 - Article Title</Typography>
            <Typography variant="h5">Heading 5 - Card Title</Typography>
            <Typography variant="h6">Heading 6 - Small Title</Typography>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "All heading variants from h1 to h6 with responsive sizing and proper semantic structure.",
            },
        },
    },
};

export const AllBodyText: Story = {
    render: () => (
        <div className="max-w-2xl space-y-4">
            <Typography variant="body1">
                Body 1 text is used for primary content and main paragraphs. It provides optimal readability 
                with comfortable line height and spacing for extended reading sessions.
            </Typography>
            <Typography variant="body2">
                Body 2 text is slightly smaller and perfect for secondary content, captions under images, 
                or supporting text that complements the main content.
            </Typography>
            <Typography variant="caption">
                Caption text is the smallest variant, ideal for metadata, timestamps, footnotes, 
                or other auxiliary information.
            </Typography>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Body text variants for different content hierarchy levels with responsive sizing.",
            },
        },
    },
};

export const GradientHeadings: Story = {
    render: () => (
        <div className="space-y-6 text-center">
            <Typography variant="h1" gradient="primary">
                Aurora Primary Gradient
            </Typography>
            <Typography variant="h2" gradient="secondary">
                Aurora Secondary Gradient
            </Typography>
            <Typography variant="h3" gradient="warm">
                Aurora Warm Gradient
            </Typography>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Aurora gradient text effects using the Maslow Design System color palette. Text uses bg-clip-text for smooth gradient rendering.",
            },
        },
    },
};

export const GradientShowcase: Story = {
    render: () => (
        <div className="space-y-8">
            <div className="text-center space-y-4">
                <Typography variant="h1" gradient="primary">
                    Maslow Design System
                </Typography>
                <Typography variant="h3" gradient="secondary">
                    Aurora Typography Components
                </Typography>
                <Typography variant="body1" className="max-w-lg mx-auto">
                    Experience beautiful gradient text effects with proper accessibility support 
                    and reduced motion preferences.
                </Typography>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                    <Typography variant="h4" gradient="primary">Primary</Typography>
                    <Typography variant="body2">Pink to teal gradient</Typography>
                </div>
                <div className="space-y-2">
                    <Typography variant="h4" gradient="secondary">Secondary</Typography>
                    <Typography variant="body2">Deep purple to teal</Typography>
                </div>
                <div className="space-y-2">
                    <Typography variant="h4" gradient="warm">Warm</Typography>
                    <Typography variant="body2">Coral to yellow</Typography>
                </div>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Complete showcase of Typography component with different gradients and layout patterns.",
            },
        },
    },
};

export const AccessibilityFeatures: Story = {
    render: () => (
        <div className="space-y-6">
            <div>
                <Typography variant="h3" className="mb-2">Semantic HTML Structure</Typography>
                <Typography variant="body2" className="mb-4">
                    Proper heading hierarchy with ARIA labels for screen readers.
                </Typography>
                <Typography variant="h4" as="h2">Custom Element Override</Typography>
                <Typography variant="body2">
                    This heading uses variant="h4" but renders as h2 element using the 'as' prop.
                </Typography>
            </div>

            <div>
                <Typography variant="h3" className="mb-2">Reduced Motion Support</Typography>
                <Typography variant="body1" className="mb-2">
                    Gradient animations respect prefers-reduced-motion settings:
                </Typography>
                <Typography variant="h4" gradient="primary" className="mb-2">
                    Animated Gradient (when motion allowed)
                </Typography>
                <Typography variant="caption">
                    Users with reduced motion preferences see static gradients without animation.
                </Typography>
            </div>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Accessibility features including semantic HTML, ARIA attributes, and reduced motion support.",
            },
        },
    },
};

export const ResponsiveDesign: Story = {
    render: () => (
        <div className="space-y-6">
            <div className="p-4 border border-maslow-silver rounded-lg">
                <Typography variant="caption" className="mb-2 block text-maslow-dark-blue/60">Mobile (default)</Typography>
                <Typography variant="h1" className="mb-2">Responsive H1</Typography>
                <Typography variant="body1">Body text that scales appropriately.</Typography>
            </div>
            
            <div className="p-4 border border-maslow-silver rounded-lg">
                <Typography variant="caption" className="mb-2 block text-maslow-dark-blue/60">Tablet (md:)</Typography>
                <Typography variant="h1" className="mb-2">Larger on medium screens</Typography>
                <Typography variant="body1">Text grows on tablet and desktop viewports.</Typography>
            </div>
            
            <Typography variant="body2" className="text-maslow-dark-blue/60">
                Resize your browser window to see responsive typography scaling in action.
            </Typography>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Responsive typography that scales appropriately across mobile, tablet, and desktop breakpoints.",
            },
        },
    },
};

export const CustomStyling: Story = {
    render: () => (
        <div className="space-y-6">
            <Typography 
                variant="h2" 
                gradient="primary" 
                className="text-center font-extrabold tracking-wider"
            >
                Custom Styled Heading
            </Typography>
            
            <Typography 
                variant="body1" 
                className="italic text-maslow-purple-deep bg-maslow-silver/20 p-4 rounded-lg"
            >
                Typography component with custom styling via className prop. 
                You can extend the base styles while maintaining accessibility features.
            </Typography>
            
            <Typography 
                variant="caption"
                as="div"
                className="uppercase tracking-widest text-maslow-teal font-bold border-l-4 border-maslow-accent-green pl-4"
            >
                Caption as a div with custom border and spacing
            </Typography>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: "Custom styling examples showing how to extend the Typography component with additional CSS classes.",
            },
        },
    },
};