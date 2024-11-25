import Icon from "../icon/Icon";
import {iconMap} from "../icon/IconMap";
import React from "react";

export interface TransportationMethodProps {
    icon: keyof typeof iconMap | string;
    text: string;
    duration: string;
}

export type TransportationMethodComponent = React.ReactElement<TransportationMethodProps>;

export const TransportationMethod = ({icon, text, duration}: TransportationMethodProps): TransportationMethodComponent => {
    return (
        <div className={"flex flex-col items-center gap-[2px]"}>
            <div
                className={"min-w-[24px] min-h-[40px] max-h-[40px] bg-primary rounded-full py-[12px] px-[12px] flex flex-row justify-between items-center align-center"}>
                <Icon name={icon} color={"white"} size={"small"}/>
                {text && <span className={"text-p-regular text-white ml-[4px]"}>{text}</span>}
            </div>
            <p className={"text-p-regular text-gray-400"}>{duration}</p>
        </div>
    )
}