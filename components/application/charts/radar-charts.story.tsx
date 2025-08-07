import type { FC } from "react";
import * as Charts from "./radar-charts.demo";

export default {
    title: "Application/Charts",
    decorators: [
        (Story: FC) => (
            <div className="bg-primary flex min-h-screen items-center justify-center py-8">
                <div className="flex w-full items-center justify-center">
                    <Story />
                </div>
            </div>
        ),
    ],
};

export const RadarChart = () => <Charts.RadarChart />;
RadarChart.storyName = "Radar chart";
