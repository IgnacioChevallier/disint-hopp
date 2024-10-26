// IconButton.tsx
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import Icon, { IconProps } from "../icon/Icon";

const iconButtonVariant = cva(
    "flex items-center justify-center rounded-full cursor-pointer transition-colors duration-300", {
        variants: {
            color: {
                primary: "bg-primary hover:bg-primary-light",
                danger: "bg-danger hover:bg-danger-light",
                gray: "hover:bg-gray-300",
            },
            size: {
                small: "w-6 h-6",
                medium: "w-8 h-8",
                large: "w-12 h-12",
            },
            disabled: {
                true: "opacity-50 cursor-not-allowed pointer-events-none",
                false: "",
            },
        },
        compoundVariants: [
            {
                color: "primary",
                disabled: true,
                className: "text-gray-500",
            },
            {
                color: "danger",
                disabled: true,
                className: "text-gray-500",
            },
        ],
        defaultVariants: {
            color: "gray",
            size: "medium",
            disabled: false,
        }
    });

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">, Omit<VariantProps<typeof iconButtonVariant>, "disabled"> {
    color?: "primary" | "danger" | "gray";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    iconName: IconProps["name"];
}

export const IconButton = ({ color, size, iconName, ...props }: IconButtonProps) => {
    return (
        <button className={iconButtonVariant({ size, color, disabled: props.disabled })} {...props}>
            <Icon name={iconName} size={size} />
        </button>
    );
};
