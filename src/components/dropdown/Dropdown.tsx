import React, { useEffect, useRef, useState } from "react";
import { Button, ButtonProps } from "../button/Button";
import { Overlay, OverlayProps } from "../overlay/Overlay";

export interface DropdownProps {
    open?: boolean;
    buttonProps?: ButtonProps;
    overlayProps: OverlayProps;
    overlayAlignment?: "left" | "right";
    openIcon?: string;
    closeIcon?: string;
}

export const Dropdown = ({
                             buttonProps,
                             overlayProps,
                             overlayAlignment = "left",
                             openIcon = "arrow down",
                             closeIcon = "arrow up",
                         }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [overlayPosition, setOverlayPosition] = useState<{top: number, left?: number, right?: number}>({ top: 0, left: 0 });
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsOpen((prev) => !prev);

        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const calculatedPosition = {
                top: rect.bottom,
            };

            const alignment = overlayAlignment === "right"
                ? { right: window.innerWidth - rect.right }
                : { left: rect.left + window.scrollX };

            setOverlayPosition({ ...calculatedPosition, ...alignment });
        }

        buttonProps?.onClick && buttonProps.onClick(e);
    };

    return (
        <>
            <Button
                ref={buttonRef}
                {...buttonProps}
                onClick={handleToggle}
                trailingIcon={isOpen ? closeIcon : openIcon}
                trailingIconSize="small"
                trailingIconColor="blue" // FIXME: COMO LE PASO EL COLOR PRIMARY DE TAILWIND???
            />
            {isOpen && (
                <Overlay
                    {...overlayProps}
                    style={{
                        position: "absolute",
                        ...overlayPosition
                    }}
                />
            )}
        </>
    );
};
