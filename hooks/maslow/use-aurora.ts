"use client";

import { useEffect, useState } from "react";

export interface AuroraConfig {
    speed?: number;
    hueRotation?: boolean;
    intensity?: "low" | "medium" | "high";
}

export function useAurora(config: AuroraConfig = {}) {
    const { speed = 8, hueRotation = true, intensity = "medium" } = config;

    const [angle, setAngle] = useState(120);

    useEffect(() => {
        if (!hueRotation) return;

        const interval = setInterval(() => {
            setAngle((prev) => (prev + 1) % 360);
        }, speed * 100);

        return () => clearInterval(interval);
    }, [speed, hueRotation]);

    const intensityMap = {
        low: 0.3,
        medium: 0.6,
        high: 0.9,
    };

    return {
        angle,
        intensity: intensityMap[intensity],
        cssVariables: {
            "--aurora-angle": `${angle}deg`,
            "--aurora-intensity": intensityMap[intensity],
        },
    };
}
