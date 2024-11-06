import React, {useEffect, useRef, useState} from "react";
import {Button, ButtonProps} from "../button/Button";
import {Overlay, OverlayProps} from "../overlay/Overlay";


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
    const overlayRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsOpen(!isOpen);
        buttonProps?.onClick && buttonProps.onClick(e);
    }

    return (
        <div className="relative" ref={overlayRef}>
            <Button
                {...buttonProps}
                onClick={handleToggle}
                trailingIcon={isOpen ? closeIcon : openIcon}
                trailingIconColor={"blue"} //FIXME: COMO LE PASO EL COLOR PRIMARY DE TAILWIND???
            />
            {isOpen &&
                <div className={`p-1 absolute ${overlayAlignment === "right" ? "right-0" : "left-0"}`}>
                    <Overlay {...overlayProps} />
                </div>
            }
        </div>
    );
}