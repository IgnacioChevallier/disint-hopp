import {cva, VariantProps} from "class-variance-authority";
import {InputHTMLAttributes} from "react";

const CheckBoxVariant = cva("cursor-pointer", {
    variants: {
        selected: {
            true: "bg-primary",
            false: "bg-gray-100",
        },
        size: {
            small: "w-6 h-6",
            medium: "w-8 h-8",
            large: "w-12 h-12",
        },
    },
    defaultVariants: {
        selected: false,
        size: "medium",
    },
});

export interface CheckBoxProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "checked" | "size" | "onClick">, VariantProps<typeof CheckBoxVariant> {
    selected?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: () => void;
}

export const CheckBox = ({selected, onClick, size = "small", ...props}: CheckBoxProps) => {
    return (
        <label className="inline-flex items-center">
            <input
                type="checkbox"
                checked={selected}
                onChange={onClick}
                className={CheckBoxVariant({selected, size})}
                {...props}
            />
        </label>
    );
}
