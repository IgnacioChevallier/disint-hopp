import Icon from "../icon/Icon";
import React, {HTMLAttributes, ReactNode} from "react";

const overlayVariant =
    "flex items-center min-w-[125px] h-[40px] p-2 gap-2";

export interface OverlayRowProps extends HTMLAttributes<HTMLDivElement> {
    left: ReactNode;
    label: string;
    right: ReactNode;
}

export const OverlayRow = ({left, label, right, ...props}: OverlayRowProps) => {
    return (
        <div className={overlayVariant} {...props}>
            <div className="flex justify-center items-center w-10 h-10 min-w-10 min-h-10">
                {left}
            </div>
            <span className="text-p-regular flex-grow overflow-hidden line-clamp-3">
                {label}
            </span>
            <div className="flex justify-center items-center w-10 h-10 min-w-10 min-h-10">
                {right}
            </div>
        </div>
    );
};