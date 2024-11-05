import React, { HTMLAttributes } from "react";
import {OverlayRow, OverlayRowProps} from "../overlay-row/OverlayRow";

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
    rows: OverlayRowProps[]
}

export const Overlay = ({ rows, ...props }: OverlayProps) => {
    return (
        <div className="flex flex-col bg-gray-200 rounded" {...props}>
            {rows.map((overlayRowProps, index) => (
                <div key={index} className="flex flex-col items-start">
                    <OverlayRow {...overlayRowProps} />
                </div>
            ))}
        </div>
    );
};
