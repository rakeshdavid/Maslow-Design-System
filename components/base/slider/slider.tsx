"use client";

import type { SliderProps as AriaSliderProps } from "react-aria-components";
import {
    Label as AriaLabel,
    Slider as AriaSlider,
    SliderOutput as AriaSliderOutput,
    SliderThumb as AriaSliderThumb,
    SliderTrack as AriaSliderTrack,
} from "react-aria-components";
import { cx, sortCx } from "@/utils/cx";

const styles = sortCx({
    default: "hidden",
    bottom: "text-md text-primary absolute left-1/2 top-2 -translate-x-1/2 translate-y-full font-medium",
    "top-floating":
        "bg-primary text-secondary ring-secondary_alt absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full rounded-lg px-3 py-2 text-xs font-semibold shadow-lg ring-1",
});

interface SliderProps extends AriaSliderProps {
    labelPosition?: keyof typeof styles;
    labelFormatter?: (value: number) => string;
}

export const Slider = ({ labelPosition = "default", minValue = 0, maxValue = 100, labelFormatter, formatOptions, ...rest }: SliderProps) => {
    // Format thumb value as percentage by default.
    const defaultFormatOptions: Intl.NumberFormatOptions = {
        style: "percent",
        maximumFractionDigits: 0,
    };

    return (
        <AriaSlider {...rest} {...{ minValue, maxValue }} formatOptions={formatOptions ?? defaultFormatOptions}>
            <AriaLabel />
            <AriaSliderTrack className="relative h-6 w-full">
                {({ state: { values, getThumbValue, getThumbPercent, getFormattedValue } }) => {
                    const left = values.length === 1 ? 0 : getThumbPercent(0);
                    const width = values.length === 1 ? getThumbPercent(0) : getThumbPercent(1) - left;

                    return (
                        <>
                            <span className="bg-quaternary absolute top-1/2 h-2 w-full -translate-y-1/2 rounded-full" />
                            <span
                                className="bg-brand-solid absolute top-1/2 h-2 w-full -translate-y-1/2 rounded-full"
                                style={{
                                    left: `${left * 100}%`,
                                    width: `${width * 100}%`,
                                }}
                            />
                            {values.map((_, index) => {
                                return (
                                    <AriaSliderThumb
                                        key={index}
                                        index={index}
                                        className={({ isFocusVisible, isDragging }) =>
                                            cx(
                                                "bg-slider-handle-bg ring-slider-handle-border top-1/2 box-border size-6 cursor-grab rounded-full shadow-md ring-2 ring-inset",
                                                isFocusVisible && "outline-focus-ring outline-2 outline-offset-2",
                                                isDragging && "cursor-grabbing",
                                            )
                                        }
                                    >
                                        <AriaSliderOutput className={cx("whitespace-nowrap", styles[labelPosition])}>
                                            {labelFormatter ? labelFormatter(getThumbValue(index)) : getFormattedValue(getThumbValue(index) / 100)}
                                        </AriaSliderOutput>
                                    </AriaSliderThumb>
                                );
                            })}
                        </>
                    );
                }}
            </AriaSliderTrack>
        </AriaSlider>
    );
};
