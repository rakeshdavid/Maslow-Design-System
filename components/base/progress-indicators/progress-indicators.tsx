"use client";

import { cx } from "@/utils/cx";

export interface ProgressBarProps {
    /**
     * The current value of the progress bar.
     */
    value: number;
    /**
     * The minimum value of the progress bar.
     * @default 0
     */
    min?: number;
    /**
     * The maximum value of the progress bar.
     * @default 100
     */
    max?: number;
    /**
     * Optional additional CSS class names for the progress bar container.
     */
    className?: string;
    /**
     * Optional additional CSS class names for the progress bar indicator element.
     */
    progressClassName?: string;
    /**
     * Optional function to format the displayed value.
     * It receives the raw value and the calculated percentage.
     */
    valueFormatter?: (value: number, valueInPercentage: number) => string | number;
}

/**
 * A basic progress bar component.
 */
export const ProgressBarBase = ({ value, min = 0, max = 100, className, progressClassName }: ProgressBarProps) => {
    const percentage = ((value - min) * 100) / (max - min);

    return (
        <div
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={min}
            aria-valuemax={max}
            className={cx("bg-quaternary h-2 w-full overflow-hidden rounded-md", className)}
        >
            <div
                // Use transform instead of width to avoid layout thrashing (and for smoother animation)
                style={{ transform: `translateX(-${100 - percentage}%)` }}
                className={cx("bg-fg-brand-primary size-full rounded-md transition duration-75 ease-linear", progressClassName)}
            />
        </div>
    );
};

type ProgressBarLabelPosition = "right" | "bottom" | "top-floating" | "bottom-floating";

export interface ProgressIndicatorWithTextProps extends ProgressBarProps {
    /**
     * Specifies the layout of the text relative to the progress bar.
     * - `right`: Text is displayed to the right of the progress bar.
     * - `bottom`: Text is displayed below the progress bar, aligned to the right.
     * - `top-floating`: Text is displayed in a floating tooltip above the progress indicator.
     * - `bottom-floating`: Text is displayed in a floating tooltip below the progress indicator.
     */
    labelPosition?: ProgressBarLabelPosition;
}

/**
 * A progress bar component that displays the value text in various configurable layouts.
 */
export const ProgressBar = ({ value, min = 0, max = 100, valueFormatter, labelPosition, className, progressClassName }: ProgressIndicatorWithTextProps) => {
    const percentage = ((value - min) * 100) / (max - min);
    const formattedValue = valueFormatter ? valueFormatter(value, percentage) : `${percentage.toFixed(0)}%`; // Default to rounded percentage

    const baseProgressBar = <ProgressBarBase min={min} max={max} value={value} className={className} progressClassName={progressClassName} />;

    switch (labelPosition) {
        case "right":
            return (
                <div className="flex items-center gap-3">
                    {baseProgressBar}
                    <span className="text-secondary shrink-0 text-sm font-medium tabular-nums">{formattedValue}</span>
                </div>
            );
        case "bottom":
            return (
                <div className="flex flex-col items-end gap-2">
                    {baseProgressBar}
                    <span className="text-secondary text-sm font-medium tabular-nums">{formattedValue}</span>
                </div>
            );
        case "top-floating":
            return (
                <div className="relative flex flex-col items-end gap-2">
                    {baseProgressBar}
                    <div
                        style={{ left: `${percentage}%` }}
                        className="bg-primary_alt ring-secondary_alt absolute -top-2 -translate-x-1/2 -translate-y-full rounded-lg px-3 py-2 shadow-lg ring-1"
                    >
                        <div className="text-secondary text-xs font-semibold tabular-nums">{formattedValue}</div>
                    </div>
                </div>
            );
        case "bottom-floating":
            return (
                <div className="relative flex flex-col items-end gap-2">
                    {baseProgressBar}
                    <div
                        style={{ left: `${percentage}%` }}
                        className="bg-primary_alt ring-secondary_alt absolute -bottom-2 -translate-x-1/2 translate-y-full rounded-lg px-3 py-2 shadow-lg ring-1"
                    >
                        <div className="text-secondary text-xs font-semibold">{formattedValue}</div>
                    </div>
                </div>
            );
        default:
            // Fallback or default case, could render the basic progress bar or throw an error
            return baseProgressBar;
    }
};
