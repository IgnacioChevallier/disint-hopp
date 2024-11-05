import {ButtonHTMLAttributes} from "react";
import {cva, VariantProps} from "class-variance-authority";
import Icon, {IconProps} from "../icon/Icon";

const buttonVariant = cva("flex flex-row gap-2 outline-none", {
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
            false: "rounded-false"
        },
    },
    compoundVariants: [
        {
            variant: "contained",
            color: "primary",
            className: "bg-primary",
        },
        {
            variant: "outlined",
            color: "primary",
            className: "border-primary text-primary hover:bg-primary-light",
        },
        {
            variant: "text",
            color: "primary",
            className: "text-primary hover:bg-primary-light",
        },
        {
            variant: "contained",
            color: "danger",
            className: "bg-danger",
        },
        {
            variant: "outlined",
            color: "danger",
            className: "border-danger text-danger hover:bg-danger-light",
        },
        {
            variant: "text",
            color: "danger",
            className: "text-danger hover:bg-danger-light",
        },
        {
            variant: "contained",
            color: "gray",
            className: "bg-gray-500",
        },
        {
            variant: "outlined",
            color: "gray",
            className: "border-gray-500 text-gray-500 hover:bg-gray-400",
        },
        {
            variant: "text",
            color: "gray",
            className: "text-gray-500 hover:bg-gray-400",
        }
    ],
    defaultVariants: {
        disabled: false,
        color: "primary",
        size: "medium",
        variant: "contained",
        rounded: true,
    },
});


export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">, Omit<VariantProps<typeof buttonVariant>, "disabled"> {
    leadingIcon?: IconProps["name"];
    trailingIcon?: IconProps["name"];
    text?: string
}

export const Button = ({
                           leadingIcon,
                           trailingIcon,
                           text,
                           size,
                           rounded,
                           variant,
                           color,
                           ...props
                       }: ButtonProps) => {
    return (
        <button className={buttonVariant({size, rounded, variant, color, disabled: props.disabled})} {...props}>
            {leadingIcon && <Icon name={leadingIcon} size={"medium"} />}
            {text}
            {trailingIcon && <Icon name={trailingIcon} size={"medium"} />}
        </button>
    );
}
