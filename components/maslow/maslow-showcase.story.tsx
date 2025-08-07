import type { Meta, StoryObj } from "@storybook/react";
import { MaslowShowcase } from "./maslow-showcase.demo";

const meta: Meta<typeof MaslowShowcase> = {
    title: "Maslow/Complete Showcase",
    component: MaslowShowcase,
    parameters: {
        layout: "fullscreen",
        backgrounds: {
            default: "dark",
            values: [{ name: "dark", value: "#0c0e12" }],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FullShowcase: Story = {
    args: {},
};
