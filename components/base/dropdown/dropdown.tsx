"use client";

import type { FC, RefAttributes } from "react";
import { DotsVertical } from "@untitledui/icons";
import type {
    ButtonProps as AriaButtonProps,
    MenuItemProps as AriaMenuItemProps,
    MenuProps as AriaMenuProps,
    PopoverProps as AriaPopoverProps,
    SeparatorProps as AriaSeparatorProps,
} from "react-aria-components";
import {
    Button as AriaButton,
    Header as AriaHeader,
    Menu as AriaMenu,
    MenuItem as AriaMenuItem,
    MenuSection as AriaMenuSection,
    MenuTrigger as AriaMenuTrigger,
    Popover as AriaPopover,
    Separator as AriaSeparator,
} from "react-aria-components";
import { cx } from "@/utils/cx";

interface DropdownItemProps extends AriaMenuItemProps {
    /** The label of the item to be displayed. */
    label?: string;
    /** An addon to be displayed on the right side of the item. */
    addon?: string;
    /** If true, the item will not have any styles. */
    unstyled?: boolean;
    /** An icon to be displayed on the left side of the item. */
    icon?: FC<{ className?: string }>;
}

const DropdownItem = ({ label, children, addon, icon: Icon, unstyled, ...props }: DropdownItemProps) => {
    if (unstyled) {
        return <AriaMenuItem id={label} textValue={label} {...props} />;
    }

    return (
        <AriaMenuItem
            {...props}
            className={(state) =>
                cx(
                    "outline-hidden group block cursor-pointer px-1.5 py-px",
                    state.isDisabled && "cursor-not-allowed",
                    typeof props.className === "function" ? props.className(state) : props.className,
                )
            }
        >
            {(state) => (
                <div
                    className={cx(
                        "outline-focus-ring relative flex items-center rounded-md px-2.5 py-2 transition duration-100 ease-linear",
                        !state.isDisabled && "group-hover:bg-primary_hover",
                        state.isFocused && "bg-primary_hover",
                        state.isFocusVisible && "outline-2 -outline-offset-2",
                    )}
                >
                    {Icon && (
                        <Icon
                            aria-hidden="true"
                            className={cx("mr-2 size-4 shrink-0 stroke-[2.25px]", state.isDisabled ? "text-fg-disabled" : "text-fg-quaternary")}
                        />
                    )}

                    <span
                        className={cx(
                            "grow truncate text-sm font-semibold",
                            state.isDisabled ? "text-disabled" : "text-secondary",
                            state.isFocused && "text-secondary_hover",
                        )}
                    >
                        {label || (typeof children === "function" ? children(state) : children)}
                    </span>

                    {addon && (
                        <span
                            className={cx(
                                "ring-secondary ml-3 shrink-0 rounded px-1 py-px text-xs font-medium ring-1 ring-inset",
                                state.isDisabled ? "text-disabled" : "text-quaternary",
                            )}
                        >
                            {addon}
                        </span>
                    )}
                </div>
            )}
        </AriaMenuItem>
    );
};

interface DropdownMenuProps<T extends object> extends AriaMenuProps<T> {}

const DropdownMenu = <T extends object>(props: DropdownMenuProps<T>) => {
    return (
        <AriaMenu
            disallowEmptySelection
            selectionMode="single"
            {...props}
            className={(state) =>
                cx("outline-hidden h-min select-none overflow-y-auto py-1", typeof props.className === "function" ? props.className(state) : props.className)
            }
        />
    );
};

interface DropdownPopoverProps extends AriaPopoverProps {}

const DropdownPopover = (props: DropdownPopoverProps) => {
    return (
        <AriaPopover
            placement="bottom right"
            {...props}
            className={(state) =>
                cx(
                    "w-62 bg-primary ring-secondary_alt overflow-auto rounded-lg shadow-lg ring-1 will-change-transform",
                    state.isEntering &&
                        "animate-in fade-in placement-right:origin-left placement-right:slide-in-from-left-0.5 placement-top:origin-bottom placement-top:slide-in-from-bottom-0.5 placement-bottom:origin-top placement-bottom:slide-in-from-top-0.5 duration-150 ease-out",
                    state.isExiting &&
                        "animate-out fade-out placement-right:origin-left placement-right:slide-out-to-left-0.5 placement-top:origin-bottom placement-top:slide-out-to-bottom-0.5 placement-bottom:origin-top placement-bottom:slide-out-to-top-0.5 duration-100 ease-in",
                    typeof props.className === "function" ? props.className(state) : props.className,
                )
            }
        >
            {props.children}
        </AriaPopover>
    );
};

const DropdownSeparator = (props: AriaSeparatorProps) => {
    return <AriaSeparator {...props} className={cx("bg-border-secondary my-1 h-px w-full", props.className)} />;
};

const DropdownDotsButton = (props: AriaButtonProps & RefAttributes<HTMLButtonElement>) => {
    return (
        <AriaButton
            {...props}
            aria-label="Open menu"
            className={(state) =>
                cx(
                    "text-fg-quaternary outline-focus-ring cursor-pointer rounded-md transition duration-100 ease-linear",
                    (state.isPressed || state.isHovered) && "text-fg-quaternary_hover",
                    (state.isPressed || state.isFocusVisible) && "outline-2 outline-offset-2",
                    typeof props.className === "function" ? props.className(state) : props.className,
                )
            }
        >
            <DotsVertical className="transition-inherit-all size-5" />
        </AriaButton>
    );
};

export const Dropdown = {
    Root: AriaMenuTrigger,
    Popover: DropdownPopover,
    Menu: DropdownMenu,
    Section: AriaMenuSection,
    SectionHeader: AriaHeader,
    Item: DropdownItem,
    Separator: DropdownSeparator,
    DotsButton: DropdownDotsButton,
};
