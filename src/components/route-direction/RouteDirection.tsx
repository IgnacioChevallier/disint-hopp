import Icon, {IconProps} from "../icon/Icon";
import { HTMLAttributes } from "react";
import {VariantProps} from "class-variance-authority";

const routeDirectionStyles = cva(
    "flex items-center text-gray-800 h-[90px] p-[10px] gap-[10px] w-full bg-white rounded-[8px]",
    {
        variants: {
            state: {
                previous: "opacity-50", // Icons appear in gray
                default: "",
                disabled: "opacity-50 cursor-not-allowed",
            },
            actual: {
                true: "border-green-500 border-[2px]",
                false: "",
            },
        },
        defaultVariants: {
            state: "default",
            actual: "false",
        },
    }
);

export interface RouteDirectionProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof routeDirectionStyles> {
    icon: IconProps["name"];
    label: string;
    position?: "first" | "middle" | "last";
}

export const RouteDirection = ({ icon, label, position = "middle", state = "default", actual = false, ...props }: RouteDirectionProps) => {
    return (
        <div className={`${routeDirectionVariant} ${props.className || ''}`} {...props}>
                <Icon name={icon} size="medium" />
            <span className="text-p-regular flex-grow overflow-hidden line-clamp-3">
                {label}
            </span>
        </div>
    );
};
