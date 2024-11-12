import {ButtonHTMLAttributes, forwardRef} from "react";
import { cva, VariantProps } from "class-variance-authority";
import Icon, { IconProps } from "../icon/Icon";

const buttonVariant = cva("flex flex-row gap-2 outline-none justify-center", {
    variants: {
        color: {
            primary: "",
            danger: "",
            gray: "",
        },
        disabled: {
            true: "opacity-50 cursor-not-allowed",
            false: "",
        },
        size: {
            medium: [
                "px-4",
                "py-2",
                "text-base"
            ],
            small: [
                "px-2",
                "py-1",
                "text-sm"
            ],
        },
        variant: {
            contained: [
                "border-none",
                "text-white",
            ],
            outlined: [
                "border",
                "border-2",
                "bg-transparent",
            ],
            text: [
                "bg-transparent",
            ],
        },
        rounded: {
            true: "rounded",
            false: "rounded-false",
            full: "rounded-full"
        },
        disableHover: {
            true: "",
            false: ""
        },
    },
    compoundVariants: [
        {
            variant: "contained",
            color: "primary",
            className: "bg-primary items-center",
        },
        {
            variant: "outlined",
            color: "primary",
            disableHover: false,
            className: "border-primary text-primary hover:bg-primary-light items-center",
        },
        {
            variant: "outlined",
            color: "primary",
            disableHover: true,
            className: "border-primary text-primary items-center",
        },
        {
            variant: "text",
            color: "primary",
            disableHover: false,
            className: "text-primary hover:bg-primary-light items-center",
        },
        {
            variant: "text",
            color: "primary",
            disableHover: true,
            className: "text-primary items-center",
        },
        {
            variant: "contained",
            color: "danger",
            className: "bg-danger items-center",
        },
        {
            variant: "outlined",
            color: "danger",
            disableHover: false,
            className: "border-danger text-danger hover:bg-danger-light items-center",
        },
        {
            variant: "outlined",
            color: "danger",
            disableHover: true,
            className: "border-danger text-danger items-center",
        },
        {
            variant: "text",
            color: "danger",
            disableHover: false,
            className: "text-danger hover:bg-danger-light items-center",
        },
        {
            variant: "text",
            color: "danger",
            disableHover: true,
            className: "text-danger items-center",
        },
        {
            variant: "contained",
            color: "gray",
            className: "bg-gray-500 items-center",
        },
        {
            variant: "outlined",
            color: "gray",
            disableHover: false,
            className: "border-gray-500 text-gray-500 hover:bg-gray-400 items-center",
        },
        {
            variant: "outlined",
            color: "gray",
            disableHover: true,
            className: "border-gray-500 text-gray-500 items-center",
        },
        {
            variant: "text",
            color: "gray",
            disableHover: false,
            className: "text-gray-500 hover:bg-gray-400 items-center",
        },
        {
            variant: "text",
            color: "gray",
            disableHover: true,
            className: "text-gray-500 items-center",
        },
    ],
    defaultVariants: {
        disabled: false,
        color: "primary",
        size: "medium",
        variant: "contained",
        rounded: true,
        disableHover: false,
    },
});

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">, Omit<VariantProps<typeof buttonVariant>, "disabled"> {
    leadingIcon?: IconProps["name"];
    leadingIconColor?: IconProps["color"];
    leadingIconSize?: IconProps["size"];
    trailingIcon?: IconProps["name"];
    trailingIconColor?: IconProps["color"];
    trailingIconSize?: IconProps["size"];
    text?: string;
    disableHover?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
                           leadingIcon,
                           leadingIconColor,
                           leadingIconSize = "medium",
                           trailingIcon,
                           trailingIconColor,
                           trailingIconSize = "medium",
                           text,
                           size,
                           rounded,
                           variant,
                           color,
                           disableHover = false,
                           ...props
                       }: ButtonProps, ref) => {
    return (
        <button className={buttonVariant({ size, rounded, variant, color, disabled: props.disabled, disableHover })} ref={ref} {...props}>
            {leadingIcon && <Icon name={leadingIcon} size={leadingIconSize} color={leadingIconColor} />}
            {text}
            {trailingIcon && <Icon name={trailingIcon} size={trailingIconSize} color={trailingIconColor}/>}
        </button>
    );
});