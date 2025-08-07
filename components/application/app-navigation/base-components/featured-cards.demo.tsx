"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/base/buttons/button";
import { CloseButton } from "@/components/base/buttons/close-button";
import { ProgressBarCircle } from "@/components/base/progress-indicators/progress-circles";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";
import { cx } from "@/utils/cx";

interface FeaturedCardCommonProps {
    title: string;
    description: ReactNode;
    confirmLabel: string;
    className?: string;
    onDismiss: () => void;
    onConfirm: () => void;
}

export const FeaturedCardProgressBar = ({
    title,
    description,
    confirmLabel,
    progress,
    className,
    onDismiss,
    onConfirm,
}: FeaturedCardCommonProps & {
    progress: number;
}) => {
    return (
        <div className={cx("bg-secondary relative flex flex-col rounded-xl p-4", className)}>
            <p className="text-primary text-sm font-semibold">{title}</p>
            <p className="text-tertiary mt-1 text-sm">{description}</p>
            <div className="absolute right-2 top-2">
                <CloseButton onClick={onDismiss} size="sm" />
            </div>
            <div className="mt-4 flex">
                <ProgressBar value={progress} />
            </div>
            <div className="mt-4 flex gap-3">
                <Button onClick={onDismiss} color="link-gray" size="sm">
                    Dismiss
                </Button>
                <Button onClick={onConfirm} color="link-color" size="sm">
                    {confirmLabel}
                </Button>
            </div>
        </div>
    );
};

export const FeaturedCardProgressCircle = ({
    title,
    description,
    confirmLabel,
    progress,
    className,
    onDismiss,
    onConfirm,
}: FeaturedCardCommonProps & {
    progress: number;
}) => {
    return (
        <div className={cx("bg-secondary relative flex flex-col rounded-xl p-4", className)}>
            <div className="w-16">
                <ProgressBarCircle value={progress} size="xxs" />
            </div>

            <div className="absolute right-2 top-2">
                <CloseButton onClick={onDismiss} size="sm" />
            </div>
            <div className="mt-3">
                <p className="text-primary text-sm font-semibold">{title}</p>
                <p className="text-tertiary mt-1 text-sm">{description}</p>
            </div>
            <div className="mt-4 flex gap-3">
                <Button onClick={onDismiss} color="link-gray" size="sm">
                    Dismiss
                </Button>
                <Button onClick={onConfirm} color="link-color" size="sm">
                    {confirmLabel}
                </Button>
            </div>
        </div>
    );
};
