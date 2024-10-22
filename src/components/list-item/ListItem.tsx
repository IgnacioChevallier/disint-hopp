import {cva, VariantProps} from "class-variance-authority";
import React, {ReactNode} from "react";

const listItemVariant = cva("flex flex-row gap-2 p-2 bg-gray-100", {
    variants: {
        color: {
            primary: "focus:outline-primary",
            danger: "focus:outline-danger",
            gray: "focus:outline-gray-200",
        },
    },
    defaultVariants: {
    },
});

export interface ListItemProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, "color">, VariantProps<typeof listItemVariant> {
    text?: ReactNode;
    color?: "primary" | "danger" | "gray";
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
}

export const ListItem = ({text, color, ...props}: ListItemProps) => {
    return (
        <li className={listItemVariant({color})} {...props}>
            {text}
        </li>
    );
}
