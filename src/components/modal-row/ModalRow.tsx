import Icon from "../icon/Icon";
import React, {HTMLAttributes, ReactNode} from "react";

const modalVariant =
    "flex items-center min-w-[125px] h-[40px] p-2 gap-2";

export interface ModalRowProps extends HTMLAttributes<HTMLDivElement> {
    left: ReactNode;
    label: string;
    right: ReactNode;
}

export const ModalRow = ({left, label, right, ...props}: ModalRowProps) => {
    return (
        <div className={modalVariant} {...props}>
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