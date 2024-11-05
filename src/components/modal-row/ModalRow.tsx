import Icon from "../icon/Icon";
import { HTMLAttributes } from "react";

const modalVariant =
    "flex items-center min-w-[125px] h-[40px] p-2 gap-2";

export interface ModalRowProps extends HTMLAttributes<HTMLDivElement> {
    leftIconName: string;
    label: string;
    rightIconName: string
}

export const ModalRow = ({leftIconName, label, rightIconName, ...props}: ModalRowProps) => {
    return (
        <div className={modalVariant} {...props}>
            <div className="flex justify-center items-center w-12 h-12 min-w-12 min-h-12">
                <Icon name={leftIconName} size="medium" />
            </div>
            <span className="text-p-regular flex-grow overflow-hidden line-clamp-3">
                {label}
            </span>
            <div className="flex justify-center items-center w-12 h-12 min-w-12 min-h-12">
                <Icon name={rightIconName} size="medium" />
            </div>
        </div>
    );
};