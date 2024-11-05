import Icon, {IconProps} from "../icon/Icon";
import { HTMLAttributes } from "react";

const routeDirectionVariant =
    "flex items-center text-gray-800 h-[90px] p-2 gap-2 w-full";

export interface RouteDirectionProps extends HTMLAttributes<HTMLDivElement> {
    icon: IconProps["name"];
    label: string;
}

export const RouteDirection = ({icon, label, ...props}: RouteDirectionProps) => {
    return (
        <div className={`${routeDirectionVariant} ${props.className || ''}`} {...props}>
            <div className="flex justify-center items-center w-12 h-12 min-w-12 min-h-12 bg-gray-200 rounded-full flex-shrink-0">
                <Icon name={icon} size="medium" />
            </div>
            <span className="text-p-regular flex-grow overflow-hidden line-clamp-3">
                {label}
            </span>
        </div>
    );
};
