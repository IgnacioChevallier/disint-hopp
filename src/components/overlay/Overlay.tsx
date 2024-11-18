import React, { HTMLAttributes } from "react";
import { OverlayRow, OverlayRowProps } from "../overlay-row/OverlayRow";
import { createPortal } from "react-dom";

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
    rows: OverlayRowProps[]
}

export const Overlay = ({ rows, ...props }: OverlayProps) => {
    const overlayRoot = document.getElementById('modal-root');

    if (!overlayRoot) return null;
    return createPortal(
        <div className="flex flex-col bg-white rounded-[10px] w-full shadow-xl" {...props}>
            {rows.map((overlayRowProps, index) => (
                <OverlayRow key={index} {...overlayRowProps} />
            ))}
        </div>,
        overlayRoot
    );
};