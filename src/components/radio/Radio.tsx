import {cva} from "class-variance-authority";
import {InputHTMLAttributes} from "react";

const radioBackground = cva("relative inline-block w-6 h-6 cursor-pointer rounded-full p-0.5", {
    variants: {
        checked: {
            true: "border-[3px] border-primary",
            false: "border-[3px] border-gray-800",
        },
    },
    defaultVariants: {
        checked: false,
    },
});

const radioCircle = cva("absolute inset-[3px] w-3 h-3 bg-primary rounded-full transition-transform duration-100", {
    variants: {
        checked: {
            true: "transform scale-100",
            false: "transform scale-0",
        },
    },
});

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "checked" | "size" | "onClick"> {
    checked?: boolean;
    onClick?: () => void;
}

export const Radio = ({checked, onClick, ...props}: RadioProps) => {
    return (
        <label style={{display: 'flex', alignItems: 'center', margin: 0, padding: 0}}>
            <input
                type="radio"
                checked={checked}
                readOnly // Para evitar conflictos con el valor interno del input
                {...props}
                className="hidden"
            />
            <span className={radioBackground({checked})} onClick={onClick}>
                <span className={radioCircle({checked})}></span>
            </span>
        </label>
    );
};
