import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./typography";

const meta = {
    title: "Maslow/UI/Typography",
    component: Typography,
    parameters: {
        layout: "padded",
        docs: {
            description: {
                component: `
Typography component with aurora gradient text support for the Maslow Design System.

## Features
- **Responsive sizing**: Different sizes for mobile/desktop
- **Gradient text**: Aurora gradient text via \`bg-clip-text\` 
- **Semantic HTML**: Proper heading hierarchy (h1-h6, p, span)
- **Accessibility**: ARIA labels and proper contrast
- **Reduced motion**: Respects user motion preferences

## Usage
\`\`\`tsx
<Typography variant="h1" gradient>
  Aurora Gradient Heading
</Typography>

<Typography variant="body1">
  Regular body text
</Typography>
\`\`\`
                `,
            },
        },
    },
    argTypes: {
        variant: {
            control: "select",
            options: ["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2", "caption"],
            description: "Typography variant style",
        },
        gradient: {
            control: "boolean",
            description: "Enable aurora gradient text",
        },
        as: {
            control: "select",
            options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "div"],
            description: "HTML element to render as",
        },
        children: {
            control: "text",
            description: "Text content",
        },
    },
    decorators: [
        (Story) => (
            <div className="from-maslow-dark-blue via-maslow-purple-deep to-maslow-dark-blue min-h-screen bg-gradient-to-br p-8">
                <div className="mx-auto max-w-4xl">
                    <Story />
                </div>
            </div>
        ),
    ],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
    args: {
        variant: "h1",
        gradient: true,
        children: "Maslow Design System",
    },
};

// All heading variants
export const Headings: Story = {
    args: { children: "" },
    render: () => (
        <div className="space-y-6">
            <Typography variant="h1" gradient>
                Heading 1 - Hero Title
            </Typography>
            <Typography variant="h2" gradient>
                Heading 2 - Section Title
            </Typography>
            <Typography variant="h3" gradient>
                Heading 3 - Subsection Title
            </Typography>
            <Typography variant="h4" className="text-white">
                Heading 4 - Regular
            </Typography>
            <Typography variant="h5" className="text-white">
                Heading 5 - Regular
            </Typography>
            <Typography variant="h6" className="text-white">
                Heading 6 - Regular
            </Typography>
        </div>
    ),
};

// Body text variants
export const BodyText: Story = {
    args: { children: "" },
    render: () => (
        <div className="max-w-2xl space-y-4">
            <Typography variant="body1" className="text-white">
                This is body1 text. Perfect for main content, paragraphs, and general reading. It provides good readability with comfortable line height and
                spacing for extended reading sessions.
            </Typography>
            <Typography variant="body2" className="text-gray-300">
                This is body2 text. Ideal for secondary content, descriptions, and supporting information. Slightly smaller than body1 but still maintains
                excellent readability.
            </Typography>
            <Typography variant="caption" className="text-gray-400">
                This is caption text. Used for labels, metadata, timestamps, and other small supporting details.
            </Typography>
        </div>
    ),
};

// Gradient variations
export const GradientVariations: Story = {
    args: { children: "" },
    render: () => (
        <div className="space-y-8">
            <div>
                <Typography variant="h3" className="mb-2 text-white">
                    Aurora Gradients
                </Typography>
                <Typography variant="h2" gradient>
                    Primary Aurora Gradient
                </Typography>
            </div>

            <div>
                <Typography variant="h3" className="mb-2 text-white">
                    Mixed Content
                </Typography>
                <Typography variant="h4" gradient>
                    Gradient Heading
                </Typography>
                <Typography variant="body1" className="mt-2 text-white">
                    Followed by regular body text that provides context and additional information without gradient effects for optimal readability.
                </Typography>
            </div>
        </div>
    ),
};

// Semantic HTML demonstration
export const SemanticHTML: Story = {
    args: { children: "" },
    render: () => (
        <div className="space-y-4">
            <Typography variant="h1" as="h1" gradient>
                Semantic H1 Element
            </Typography>
            <Typography variant="body1" as="p" className="text-white">
                This is a paragraph element with body1 styling.
            </Typography>
            <Typography variant="caption" as="span" className="text-gray-400">
                This is a span element with caption styling.
            </Typography>
            <Typography variant="h2" as="div" className="text-white">
                This is a div element with h2 styling.
            </Typography>
        </div>
    ),
};

// Accessibility showcase
export const Accessibility: Story = {
    args: { children: "" },
    render: () => (
        <div className="space-y-6">
            <div>
                <Typography variant="h2" className="mb-4 text-white">
                    Accessibility Features
                </Typography>
                <ul className="space-y-2">
                    <li>
                        <Typography variant="body1" className="text-white">
                            ✓ Semantic HTML elements (h1-h6, p, span)
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" className="text-white">
                            ✓ Proper heading hierarchy and structure
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" className="text-white">
                            ✓ Reduced motion support for animations
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" className="text-white">
                            ✓ High contrast ratios for readability
                        </Typography>
                    </li>
                    <li>
                        <Typography variant="body1" className="text-white">
                            ✓ Screen reader compatible text rendering
                        </Typography>
                    </li>
                </ul>
            </div>
        </div>
    ),
};

// Responsive design demonstration
export const ResponsiveDesign: Story = {
    args: { children: "" },
    render: () => (
        <div className="space-y-8">
            <div>
                <Typography variant="h3" className="mb-4 text-white">
                    Responsive Typography Scale
                </Typography>
                <Typography variant="caption" className="mb-6 block text-gray-400">
                    Resize your browser to see how typography scales across different screen sizes.
                </Typography>
            </div>

            <div className="space-y-4">
                <Typography variant="h1" gradient>
                    Responsive H1
                </Typography>
                <Typography variant="h3" className="text-white">
                    Responsive H3 Subtitle
                </Typography>
                <Typography variant="body1" className="text-gray-300">
                    This body text demonstrates how typography scales responsively across different viewport sizes. On mobile devices, text is optimized for
                    smaller screens, while on desktop displays, it takes advantage of the larger space available.
                </Typography>
            </div>
        </div>
    ),
};

// Interactive story
export const Interactive: Story = {
    args: {
        variant: "h2",
        gradient: true,
        children: "Interactive Typography",
    },
    argTypes: {
        variant: { control: "select" },
        gradient: { control: "boolean" },
        children: { control: "text" },
    },
    parameters: {
        docs: {
            description: {
                story: "Use the controls below to experiment with different typography variants and options.",
            },
        },
    },
};

// Performance showcase (reduced motion)
export const Performance: Story = {
    args: { children: "" },
    render: () => (
        <div className="space-y-6">
            <Typography variant="h3" className="mb-4 text-white">
                Performance & Motion
            </Typography>
            <Typography variant="body1" className="mb-4 text-gray-300">
                The Typography component respects user preferences for reduced motion. Gradient animations are automatically disabled when users prefer reduced
                motion.
            </Typography>
            <Typography variant="h4" gradient>
                Animated Gradient Text
            </Typography>
            <Typography variant="caption" className="mt-2 block text-gray-400">
                Set "prefers-reduced-motion: reduce" in your browser to see static gradients.
            </Typography>
        </div>
    ),
};
