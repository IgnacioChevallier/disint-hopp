import React, {useEffect, useRef, useState} from "react";
import {Button, ButtonProps} from "../button/Button";
import {Overlay, OverlayProps} from "../overlay/Overlay";


export interface DropdownProps {
    open?: boolean;
    buttonProps?: ButtonProps;
    overlayProps: OverlayProps;
}

export const Dropdown = ({
                             buttonProps,
                             overlayProps
                         }: DropdownProps) => {
    const [open, setOpen] = useState(false);
    const overlayRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={overlayRef}>
            <Button {...buttonProps} onClick={(e) => {
                setOpen(!open);
                buttonProps?.onClick && buttonProps.onClick(e)
            }} />
            {open &&
                <div className="p-1 absolute">
                    <Overlay {...overlayProps} />
                </div>
            }
        </div>
    );
}