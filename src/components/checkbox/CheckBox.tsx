import {cva, VariantProps} from "class-variance-authority";
import {InputHTMLAttributes} from "react";

const CheckBoxVariant = cva("w-6 h-6", {
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
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "checked">,
        VariantProps<typeof CheckBoxVariant> {
    selected?: boolean,
}

export const CheckBox = ({selected}: CheckBoxProps) => {
    return (
        <label>
            <input
                type="checkbox"
                checked={selected}
            />
        </label>
    );
}