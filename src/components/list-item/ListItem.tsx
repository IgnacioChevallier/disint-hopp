import {cva, VariantProps} from "class-variance-authority";
import React, {ReactNode} from "react";
import {CheckBox} from "../checkbox/CheckBox";
import {Radio} from "../radio/Radio";
import {Toggle} from "../toggle/Toggle";

const listItemVariant = cva("flex items-center gap-2 p-2 bg-gray-100 rounded-lg", {
    variants: {
        controlType: {
            checkbox: "",
            radio: "",
            toggle: "",
        },
    },
});

export interface ListItemProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, "text">, VariantProps<typeof listItemVariant> {
    text?: ReactNode;
    leadingIcon?: ReactNode;
    trailingIcon?: ReactNode;
    controlType?: "checkbox" | "radio" | "toggle";
    additionalText?: ReactNode;
}

export const ListItem = ({
                             text,
                             leadingIcon,
                             trailingIcon,
                             controlType,
                             additionalText,
                             ...props
                         }: ListItemProps) => {

    const [toggle, setToggle] = React.useState(false);
    const [checkBox, setCheckBox] = React.useState(false);
    const [radio, setRadio] = React.useState(false);

    return (
        <li className={listItemVariant({controlType})} {...props}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: '100%',
                minHeight: 35,
            }}>
            {leadingIcon && <span className="mr-2">{leadingIcon}</span>}
            <span className="flex-1">
                {text}
            </span>
            {additionalText && <span className="text-gray-500">{additionalText}</span>}
            {controlType === "checkbox" && <CheckBox size={"sm"} onClick={() => setCheckBox(!checkBox)} selected={checkBox} />}
            {controlType === "radio" && <Radio onClick={() => setRadio(!radio)} checked={radio} />}
            {controlType === "toggle" && <Toggle onClick={() => setToggle(!toggle)} selected={toggle} />}
            {trailingIcon && <span className="ml-2">{trailingIcon}</span>}
        </li>
    );
};
