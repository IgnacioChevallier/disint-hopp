import {cva, VariantProps} from "class-variance-authority";
import {InputHTMLAttributes} from "react";

const CheckBoxVariant = cva("flex flex-row gap-2 p-2 bg-gray-100", {
    variants: {
        selected: {
            true: "bg-primary",
            false: "bg-gray-100"
        },
        defaultVariants: {
            selected: false,
        }
    }
});

export interface CheckBoxProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "selected">,
        VariantProps<typeof CheckBoxVariant> {}

export const CheckBox = ({selected}: CheckBoxProps) => {
    return (
        <label>
            <input type="checkbox"/>
        </label>
    );
}