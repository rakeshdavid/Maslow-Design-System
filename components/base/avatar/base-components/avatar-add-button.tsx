"use client";

import { Plus } from "@untitledui/icons";
import type { ButtonProps as AriaButtonProps } from "react-aria-components";
import { Tooltip as AriaTooltip, TooltipTrigger as AriaTooltipTrigger } from "@/components/base/tooltip/tooltip";
import { cx } from "@/utils/cx";

const sizes = {
    xs: { root: "size-6", icon: "size-4" },
    sm: { root: "size-8", icon: "size-4" },
    md: { root: "size-10", icon: "size-5" },
};

interface AvatarAddButtonProps extends AriaButtonProps {
    size: "xs" | "sm" | "md";
    title?: string;
    className?: string;
}

export const AvatarAddButton = ({ size, className, title = "Add user", ...props }: AvatarAddButtonProps) => (
    <AriaTooltip title={title}>
        <AriaTooltipTrigger
            {...props}
            aria-label={title}
            className={cx(
                "border-primary bg-primary text-fg-quaternary outline-focus-ring hover:bg-primary_hover hover:text-fg-quaternary_hover disabled:bg-secondary flex cursor-pointer items-center justify-center rounded-full border border-dashed transition duration-100 ease-linear focus-visible:outline-2 focus-visible:outline-offset-2 disabled:border-gray-200 disabled:text-gray-200",
                sizes[size].root,
                className,
            )}
        >
            <Plus className={cx("transition-inherit-all text-current", sizes[size].icon)} />
        </AriaTooltipTrigger>
    </AriaTooltip>
);
