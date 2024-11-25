import Icon, {IconProps} from "../icon/Icon";
import { HTMLAttributes } from "react";
import {cva, VariantProps} from "class-variance-authority";

const routeDirectionStyles = cva(
    "flex items-center text-gray-800 h-[90px] p-[10px] gap-[10px] w-full bg-white rounded-[8px]",
    {
        variants: {
            state: {
                previous: "opacity-50",
                default: "",
                disabled: "opacity-50 cursor-not-allowed",
            },
            actual: {
                true: "",
                false: "",
            },
        },
        defaultVariants: {
            state: "default",
            actual: false,
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
    let combinedClasses = `${routeDirectionStyles({ state, actual })} ${props.className || ""}`.trim();

    if (actual) {
        if (position === "last") {
            combinedClasses += " border-green-500 border-[2px]";
        } else if (position === "first" || position === "middle") {
            combinedClasses += " border-blue-500 border-[2px]";
        }
    }

    const topIcon =
        position === "first" ? "empty" : position === "middle" ? "three dots" : position === "last" ? "three dots" : null;
    const bottomIcon =
        position === "last" ? "empty" : position === "middle" ? "three dots" : position === "first" ? "three dots" : null;

    return (
        <div className={combinedClasses} {...props}>
            <div className="flex flex-col items-center justify-center">
                {topIcon && (
                    <Icon name={topIcon} size={"small"} color={state === "previous" ? "#A0A0A0" : "#000"} />
                )}
                <Icon name={icon} size="medium" />
                {bottomIcon && (
                    <Icon name={bottomIcon} size={"small"} color={state === "previous" ? "#A0A0A0" : "#000"} />
                )}
            </div>
            <span className="text-p-regular flex-grow overflow-hidden line-clamp-3">
        {label}
      </span>
        </div>
    );
};
