"use client";

import type { FC, HTMLAttributes } from "react";
import { useCallback, useEffect, useRef } from "react";
import type { Placement } from "@react-types/overlays";
import { BookOpen01, ChevronSelectorVertical, LogOut01, Plus, Settings01, User01 } from "@untitledui/icons";
import { useFocusManager } from "react-aria";
import type { DialogProps as AriaDialogProps } from "react-aria-components";
import { Button as AriaButton, Dialog as AriaDialog, DialogTrigger as AriaDialogTrigger, Popover as AriaPopover } from "react-aria-components";
import { AvatarLabelGroup } from "@/components/base/avatar/avatar-label-group";
import { Button } from "@/components/base/buttons/button";
import { RadioButtonBase } from "@/components/base/radio-buttons/radio-buttons";
import { useBreakpoint } from "@/hooks/use-breakpoint";
import { cx } from "@/utils/cx";

type NavAccountType = {
    /** Unique identifier for the nav item. */
    id: string;
    /** Name of the account holder. */
    name: string;
    /** Email address of the account holder. */
    email: string;
    /** Avatar image URL. */
    avatar: string;
    /** Online status of the account holder. This is used to display the online status indicator. */
    status: "online" | "offline";
};

const placeholderAccounts: NavAccountType[] = [
    {
        id: "olivia",
        name: "Olivia Rhye",
        email: "olivia@untitledui.com",
        avatar: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
        status: "online",
    },
    {
        id: "sienna",
        name: "Sienna Hewitt",
        email: "sienna@untitledui.com",
        avatar: "https://www.untitledui.com/images/avatars/transparent/sienna-hewitt?bg=%23E0E0E0",
        status: "online",
    },
];

export const NavAccountMenu = ({
    className,
    selectedAccountId = "olivia",
    ...dialogProps
}: AriaDialogProps & { className?: string; accounts?: NavAccountType[]; selectedAccountId?: string }) => {
    const focusManager = useFocusManager();
    const dialogRef = useRef<HTMLDivElement>(null);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowDown":
                    focusManager?.focusNext({ tabbable: true, wrap: true });
                    break;
                case "ArrowUp":
                    focusManager?.focusPrevious({ tabbable: true, wrap: true });
                    break;
            }
        },
        [focusManager],
    );

    useEffect(() => {
        const element = dialogRef.current;
        if (element) {
            element.addEventListener("keydown", onKeyDown);
        }

        return () => {
            if (element) {
                element.removeEventListener("keydown", onKeyDown);
            }
        };
    }, [onKeyDown]);

    return (
        <AriaDialog
            {...dialogProps}
            ref={dialogRef}
            className={cx("w-66 bg-secondary_alt ring-secondary_alt outline-hidden rounded-xl shadow-lg ring", className)}
        >
            <div className="bg-primary ring-secondary rounded-xl ring-1">
                <div className="flex flex-col gap-0.5 py-1.5">
                    <NavAccountCardMenuItem label="View profile" icon={User01} shortcut="⌘K->P" />
                    <NavAccountCardMenuItem label="Account settings" icon={Settings01} shortcut="⌘S" />
                    <NavAccountCardMenuItem label="Documentation" icon={BookOpen01} />
                </div>
                <div className="border-secondary flex flex-col gap-0.5 border-t py-1.5">
                    <div className="text-tertiary px-3 pb-1 pt-1.5 text-xs font-semibold">Switch account</div>

                    <div className="flex flex-col gap-0.5 px-1.5">
                        {placeholderAccounts.map((account) => (
                            <button
                                key={account.id}
                                className={cx(
                                    "outline-focus-ring hover:bg-primary_hover relative w-full cursor-pointer rounded-md px-2 py-1.5 text-left focus:z-10 focus-visible:outline-2 focus-visible:outline-offset-2",
                                    account.id === selectedAccountId && "bg-primary_hover",
                                )}
                            >
                                <AvatarLabelGroup status="online" size="md" src={account.avatar} title={account.name} subtitle={account.email} />

                                <RadioButtonBase isSelected={account.id === selectedAccountId} className="absolute right-2 top-2" />
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-2 px-2 pb-2 pt-0.5">
                    <Button iconLeading={Plus} color="secondary" size="sm">
                        Add account
                    </Button>
                </div>
            </div>

            <div className="pb-1.5 pt-1">
                <NavAccountCardMenuItem label="Sign out" icon={LogOut01} shortcut="⌥⇧Q" />
            </div>
        </AriaDialog>
    );
};

const NavAccountCardMenuItem = ({
    icon: Icon,
    label,
    shortcut,
    ...buttonProps
}: {
    icon?: FC<{ className?: string }>;
    label: string;
    shortcut?: string;
} & HTMLAttributes<HTMLButtonElement>) => {
    return (
        <button {...buttonProps} className={cx("group/item focus:outline-hidden w-full cursor-pointer px-1.5", buttonProps.className)}>
            <div
                className={cx(
                    "group-hover/item:bg-primary_hover flex w-full items-center justify-between gap-3 rounded-md p-2",
                    // Focus styles.
                    "outline-focus-ring group-focus-visible/item:outline-2 group-focus-visible/item:outline-offset-2",
                )}
            >
                <div className="text-secondary group-hover/item:text-secondary_hover flex gap-2 text-sm font-semibold">
                    {Icon && <Icon className="text-fg-quaternary size-5" />} {label}
                </div>

                {shortcut && (
                    <kbd className="font-body text-tertiary ring-secondary flex rounded px-1 py-px text-xs font-medium ring-1 ring-inset">{shortcut}</kbd>
                )}
            </div>
        </button>
    );
};

export const NavAccountCard = ({
    popoverPlacement,
    selectedAccountId = "olivia",
    items = placeholderAccounts,
}: {
    popoverPlacement?: Placement;
    selectedAccountId?: string;
    items?: NavAccountType[];
}) => {
    const triggerRef = useRef<HTMLDivElement>(null);
    const isDesktop = useBreakpoint("lg");

    const selectedAccount = placeholderAccounts.find((account) => account.id === selectedAccountId);

    if (!selectedAccount) {
        console.warn(`Account with ID ${selectedAccountId} not found in <NavAccountCard />`);
        return null;
    }

    return (
        <div ref={triggerRef} className="ring-secondary relative flex items-center gap-3 rounded-xl p-3 ring-1 ring-inset">
            <AvatarLabelGroup
                size="md"
                src={selectedAccount.avatar}
                title={selectedAccount.name}
                subtitle={selectedAccount.email}
                status={selectedAccount.status}
            />

            <div className="absolute right-1.5 top-1.5">
                <AriaDialogTrigger>
                    <AriaButton className="text-fg-quaternary outline-focus-ring hover:bg-primary_hover hover:text-fg-quaternary_hover pressed:bg-primary_hover pressed:text-fg-quaternary_hover flex cursor-pointer items-center justify-center rounded-md p-1.5 transition duration-100 ease-linear focus-visible:outline-2 focus-visible:outline-offset-2">
                        <ChevronSelectorVertical className="size-4 shrink-0" />
                    </AriaButton>
                    <AriaPopover
                        placement={popoverPlacement ?? (isDesktop ? "right bottom" : "top right")}
                        triggerRef={triggerRef}
                        offset={8}
                        className={({ isEntering, isExiting }) =>
                            cx(
                                "will-change-transform",
                                isEntering &&
                                    "animate-in fade-in placement-right:origin-left placement-right:slide-in-from-left-0.5 placement-top:origin-bottom placement-top:slide-in-from-bottom-0.5 placement-bottom:origin-top placement-bottom:slide-in-from-top-0.5 duration-150 ease-out",
                                isExiting &&
                                    "animate-out fade-out placement-right:origin-left placement-right:slide-out-to-left-0.5 placement-top:origin-bottom placement-top:slide-out-to-bottom-0.5 placement-bottom:origin-top placement-bottom:slide-out-to-top-0.5 duration-100 ease-in",
                            )
                        }
                    >
                        <NavAccountMenu selectedAccountId={selectedAccountId} accounts={items} />
                    </AriaPopover>
                </AriaDialogTrigger>
            </div>
        </div>
    );
};
