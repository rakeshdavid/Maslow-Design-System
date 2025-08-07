"use client";

import { type SelectHTMLAttributes, useId } from "react";
import { ChevronDown } from "@untitledui/icons";
import { HintText } from "@/components/base/input/hint-text";
import { Label } from "@/components/base/input/label";
import { cx } from "@/utils/cx";

interface NativeSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    hint?: string;
    selectClassName?: string;
    options: { label: string; value: string; disabled?: boolean }[];
}

export const NativeSelect = ({ label, hint, options, className, selectClassName, ...props }: NativeSelectProps) => {
    const id = useId();
    const selectId = `select-native-${id}`;
    const hintId = `select-native-hint-${id}`;

    return (
        <div className={cx("in-data-input-wrapper:w-max w-full", className)}>
            {label && (
                <Label htmlFor={selectId} id={selectId} className="mb-1.5">
                    {label}
                </Label>
            )}

            <div className="relative grid w-full items-center">
                <select
                    {...props}
                    id={selectId}
                    aria-describedby={hintId}
                    aria-labelledby={selectId}
                    className={cx(
                        "bg-primary text-md text-primary shadow-xs ring-primary outline-hidden placeholder:text-fg-quaternary focus-visible:ring-brand disabled:bg-disabled_subtle disabled:text-disabled appearance-none rounded-lg px-3.5 py-2.5 font-medium ring-1 ring-inset transition duration-100 ease-linear focus-visible:ring-2 disabled:cursor-not-allowed",
                        // Styles when the select is within an `InputGroup`
                        "in-data-input-wrapper:flex in-data-input-wrapper:h-full in-data-input-wrapper:gap-1 in-data-input-wrapper:bg-inherit in-data-input-wrapper:px-3 in-data-input-wrapper:py-2 in-data-input-wrapper:font-normal in-data-input-wrapper:text-tertiary in-data-input-wrapper:shadow-none in-data-input-wrapper:ring-transparent",
                        // Styles for the select when `TextField` is disabled
                        "in-data-input-wrapper:group-disabled:pointer-events-none in-data-input-wrapper:group-disabled:cursor-not-allowed in-data-input-wrapper:group-disabled:bg-transparent in-data-input-wrapper:group-disabled:text-disabled",
                        // Common styles for sizes and border radius within `InputGroup`
                        "in-data-input-wrapper:in-data-leading:rounded-r-none in-data-input-wrapper:in-data-trailing:rounded-l-none in-data-input-wrapper:in-data-[input-size=md]:py-2.5 in-data-input-wrapper:in-data-leading:in-data-[input-size=md]:pl-3.5 in-data-input-wrapper:in-data-[input-size=sm]:py-2 in-data-input-wrapper:in-data-[input-size=sm]:pl-3",
                        // For "leading" dropdown within `InputGroup`
                        "in-data-input-wrapper:in-data-leading:in-data-[input-size=md]:pr-4.5 in-data-input-wrapper:in-data-leading:in-data-[input-size=sm]:pr-4.5",
                        // For "trailing" dropdown within `InputGroup`
                        "in-data-input-wrapper:in-data-trailing:in-data-[input-size=md]:pr-8 in-data-input-wrapper:in-data-trailing:in-data-[input-size=sm]:pr-7.5",
                        selectClassName,
                    )}
                >
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                <ChevronDown
                    aria-hidden="true"
                    className="text-fg-quaternary in-data-input-wrapper:right-0 in-data-input-wrapper:size-4 in-data-input-wrapper:stroke-[2.625px] in-data-input-wrapper:in-data-trailing:in-data-[input-size=sm]:right-3 pointer-events-none absolute right-3.5 size-5"
                />
            </div>

            {hint && (
                <HintText className="mt-2" id={hintId}>
                    {hint}
                </HintText>
            )}
        </div>
    );
};
