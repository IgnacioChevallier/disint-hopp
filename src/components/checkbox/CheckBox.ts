import {cva, VariantProps} from "class-variance-authority";
import {InputHTMLAttributes} from "react";

const CheckBoxVariant = cva("flex flex-row gap-2 p-2 bg-gray-100", {
    variants: {
        selected: {
            on: "bg-primary",
            off: "bg-gray-100"
        },
        defaultVariants: {
            selected: "off",
        }
    }
});

export interface CheckBoxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "selected">, Omit<VariantProps<typeof CheckBoxVariant>, "selected"> {}

export const CheckBox = ({...props}: CheckBoxProps) => {
    return (
        <label></label>
    );
}