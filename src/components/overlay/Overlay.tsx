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
        <div className="flex flex-col bg-gray-200 rounded max-w-[300px]" {...props}> {/* ancho máximo para consistencia */}
            {rows.map((overlayRowProps, index) => (
                <OverlayRow key={index} {...overlayRowProps} />
            ))}
        </div>,
        overlayRoot
    );
};