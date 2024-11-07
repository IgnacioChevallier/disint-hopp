import Icon from "../icon/Icon";
import {iconMap} from "../icon/IconMap";
import React from "react";

export interface TransportationMethodProps {
    icon: keyof typeof iconMap | string;
    text: string
}

export type TransportationMethodComponent = React.ReactElement<TransportationMethodProps>;

export const TransportationMethod = ({icon, text}: TransportationMethodProps): TransportationMethodComponent => {
    return (
        <div className={"min-w-[40px] min-h-[40px] max-h-[40px] bg-primary rounded-full py-[12px] px-[12px] flex flex-row justify-between items-center align-center"}>
            <Icon name={icon} color={"white"} size={"small"}/>
            {text && <span className={"text-p-regular text-white ml-[4px]"}>{text}</span>}
        </div>
    )
}