import {cva, VariantProps} from "class-variance-authority";
import React, {ReactNode} from "react";
import {CheckBox} from "../checkbox/CheckBox";
import {Radio} from "../radio/Radio";
import {Toggle} from "../toggle/Toggle";
import Icon, {IconProps} from "../icon/Icon";

const listItemVariant = cva("flex items-center gap-2 p-2 bg-background-main rounded-lg", {
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
    leadingIcon?: IconProps["name"];
    trailingIcon?: IconProps["name"];
    controlType?: "checkbox" | "radio" | "toggle";
    additionalText?: ReactNode;
    leadingIconSize?: IconProps["size"];
}

export type ListItemComponent = React.ReactElement<ListItemProps>

export const ListItem = ({
                             text,
                             leadingIcon,
                             trailingIcon,
                             controlType,
                             additionalText,
                             leadingIconSize = "medium",
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
            {leadingIcon &&
                <div
                    className="flex justify-center items-center w-12 h-7 min-w-12 min-h-6 rounded-full flex-shrink-0">
                    <Icon name={leadingIcon} size={leadingIconSize}/>
                </div>
            }
            <span className="flex-1">
                {text}
            </span>
            {additionalText && <span className="text-gray-500">{additionalText}</span>}
            {controlType === "checkbox" &&
                <CheckBox size={"sm"} onClick={() => setCheckBox(!checkBox)} selected={checkBox}/>}
            {controlType === "radio" && <Radio onClick={() => setRadio(!radio)} checked={radio}/>}
            {controlType === "toggle" && <Toggle onClick={() => setToggle(!toggle)} selected={toggle}/>}
            {trailingIcon &&
                <div
                    className="flex justify-center items-center w-12 h-7 min-w-12 min-h-6 rounded-full flex-shrink-0">
                    <Icon name={trailingIcon} size="medium"/>
                </div>
            }
        </li>
    );
};
