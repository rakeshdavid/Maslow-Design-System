"use client";

import { type ComponentPropsWithRef, type ReactNode, type RefAttributes } from "react";
import type {
    DialogProps as AriaDialogProps,
    ModalOverlayProps as AriaModalOverlayProps,
    ModalRenderProps as AriaModalRenderProps,
} from "react-aria-components";
import { Dialog as AriaDialog, DialogTrigger as AriaDialogTrigger, Modal as AriaModal, ModalOverlay as AriaModalOverlay } from "react-aria-components";
import { CloseButton } from "@/components/base/buttons/close-button";
import { cx } from "@/utils/cx";

interface ModalOverlayProps extends AriaModalOverlayProps, RefAttributes<HTMLDivElement> {}

export const ModalOverlay = (props: ModalOverlayProps) => {
    return (
        <AriaModalOverlay
            {...props}
            className={(state) =>
                cx(
                    "bg-overlay/70 outline-hidden fixed inset-0 flex min-h-dvh w-full items-center justify-end pl-6 ease-linear md:pl-10",
                    state.isEntering && "animate-in fade-in duration-300",
                    state.isExiting && "animate-out fade-out duration-500",
                    typeof props.className === "function" ? props.className(state) : props.className,
                )
            }
        />
    );
};
ModalOverlay.displayName = "ModalOverlay";

interface ModalProps extends AriaModalOverlayProps, RefAttributes<HTMLDivElement> {}

export const Modal = (props: ModalProps) => (
    <AriaModal
        {...props}
        className={(state) =>
            cx(
                "max-w-100 inset-y-0 right-0 h-full w-full shadow-xl transition",
                state.isEntering && "animate-in slide-in-from-right duration-300",
                state.isExiting && "animate-out slide-out-to-right duration-500",
                typeof props.className === "function" ? props.className(state) : props.className,
            )
        }
    />
);
Modal.displayName = "Modal";

interface DialogProps extends AriaDialogProps, RefAttributes<HTMLElement> {}

export const Dialog = (props: DialogProps) => (
    <AriaDialog
        role="dialog"
        {...props}
        className={cx(
            "bg-primary ring-secondary_alt outline-hidden relative flex size-full flex-col items-start gap-6 overflow-y-auto ring-1",
            props.className,
        )}
    />
);
Dialog.displayName = "Dialog";

interface SlideoutMenuProps extends Omit<AriaModalOverlayProps, "children">, RefAttributes<HTMLDivElement> {
    children: ReactNode | ((children: AriaModalRenderProps & { close: () => void }) => ReactNode);
    dialogClassName?: string;
}

const Menu = ({ children, dialogClassName, ...props }: SlideoutMenuProps) => {
    return (
        <ModalOverlay {...props}>
            <Modal className={(state) => cx(typeof props.className === "function" ? props.className(state) : props.className)}>
                {(state) => (
                    <Dialog className={dialogClassName}>
                        {({ close }) => {
                            return typeof children === "function" ? children({ ...state, close }) : children;
                        }}
                    </Dialog>
                )}
            </Modal>
        </ModalOverlay>
    );
};
Menu.displayName = "SlideoutMenu";

const Content = ({ role = "main", ...props }: ComponentPropsWithRef<"div">) => {
    return <div role={role} {...props} className={cx("flex size-full flex-col gap-6 overflow-y-auto overscroll-auto px-4 md:px-6", props.className)} />;
};
Content.displayName = "SlideoutContent";

interface SlideoutHeaderProps extends ComponentPropsWithRef<"header"> {
    onClose?: () => void;
}

const Header = ({ className, children, onClose, ...props }: SlideoutHeaderProps) => {
    return (
        <header {...props} className={cx("z-1 relative w-full px-4 pt-6 md:px-6", className)}>
            {children}
            <CloseButton size="md" className="absolute right-3 top-3 shrink-0" onClick={onClose} />
        </header>
    );
};
Header.displayName = "SlideoutHeader";

const Footer = (props: ComponentPropsWithRef<"footer">) => {
    return <footer {...props} className={cx("shadow-border-secondary w-full p-4 shadow-[inset_0px_1px_0px_0px] md:px-6", props.className)} />;
};
Footer.displayName = "SlideoutFooter";

const SlideoutMenu = Menu as typeof Menu & {
    Trigger: typeof AriaDialogTrigger;
    Content: typeof Content;
    Header: typeof Header;
    Footer: typeof Footer;
};
SlideoutMenu.displayName = "SlideoutMenu";

SlideoutMenu.Trigger = AriaDialogTrigger;
SlideoutMenu.Content = Content;
SlideoutMenu.Header = Header;
SlideoutMenu.Footer = Footer;

export { SlideoutMenu };
