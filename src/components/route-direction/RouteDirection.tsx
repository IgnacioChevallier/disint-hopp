import Icon, {IconProps} from "../icon/Icon";
import { HTMLAttributes } from "react";

const routeDirectionVariant =
    "flex items-center text-gray-800 h-[90px] p-[10px] gap-[10px] w-full bg-white rounded-[8px]";

export interface RouteDirectionProps extends HTMLAttributes<HTMLDivElement> {
    icon: IconProps["name"];
    label: string;
}

export const RouteDirection = ({icon, label, ...props}: RouteDirectionProps) => {
    return (
        <div className={`${routeDirectionVariant} ${props.className || ''}`} {...props}>
                <Icon name={icon} size="medium" />
            <span className="text-p-regular flex-grow overflow-hidden line-clamp-3">
                {label}
            </span>
        </div>
    );
};
