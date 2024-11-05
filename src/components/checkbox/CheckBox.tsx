import {cva, VariantProps} from "class-variance-authority";
import {InputHTMLAttributes} from "react";

const CheckBoxVariant = cva("w-6 h-6", {
    variants: {
        selected: {
            true: "bg-primary",
            false: "bg-gray-100",
        },
        size: {
            sm: "w-3 h-3",
            md: "w-6 h-6",
            lg: "w-8 h-8",
        },
    },
    defaultVariants: {
        selected: false,
        size: "md",
    },
});

export interface CheckBoxProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "checked" | "size" | "onClick">, VariantProps<typeof CheckBoxVariant> {
    selected?: boolean;
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
}

export const CheckBox = ({selected, onClick, size = "sm", ...props}: CheckBoxProps) => {
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
