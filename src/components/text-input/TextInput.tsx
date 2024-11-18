import {InputHTMLAttributes} from "react";
import {cva, VariantProps} from "class-variance-authority";

const textInputVariant = cva("flex flex-row gap-2 p-2 bg-white", {
    variants: {
        color: {
            primary: "focus:outline-primary",
            danger: "focus:outline-danger",
            gray: "focus:outline-gray-200",
        },
        disabled: {
            true: "cursor-not-allowed text-gray-500",
            false: "",
        },
        rounded: {
            true: "rounded",
            false: ""
        },
    },
    defaultVariants: {
        color: "primary",
        disabled: false,
        rounded: true
    },
});


export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "color" | "size">, Omit<VariantProps<typeof textInputVariant>, "disabled"> {
    label?: string;
}

export const TextInput = ({
                              label,
                              color,
                              ...props
                          }: TextInputProps) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <input className={textInputVariant({disabled: props.disabled, color})} {...props} />
        </div>
    );
}
