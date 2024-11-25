import Icon from "../icon/Icon";
import {iconMap} from "../icon/IconMap";
import React from "react";
import theme from "tailwindcss/defaultTheme";

export interface TransportationMethodProps {
    icon: keyof typeof iconMap | string;
    text: string;
    duration: string;
    color: "blue" | "green" | "red" | "darkBlue" | "yellow" | "gray" | "black" | "pink";
}

export type TransportationMethodComponent = React.ReactElement<TransportationMethodProps>;

const colorMap: { [key in TransportationMethodProps["color"]]: string } = {
    blue: "bg-primary",
    green: "bg-status-success",
    red: "bg-danger",
    darkBlue: "bg-primary-dark",
    yellow: "bg-status-warning",
    gray: "bg-gray-500",
    black: "bg-black",
    pink: "bg-danger-light",
};

export const TransportationMethod = ({icon, text, duration, color}: TransportationMethodProps): TransportationMethodComponent => {
    const bgColorClass: string = colorMap[color];

    return (
        <div className={"flex flex-col items-center gap-[2px]"}>
            <div
                className={`min-w-[24px] min-h-[40px] max-h-[40px] ${bgColorClass} rounded-full py-[12px] px-[12px] flex flex-row justify-between items-center align-center`}>
                <Icon name={icon} color={"#FFF"} size={"small"}/>
                {text && <span className={"text-p-regular text-white ml-[4px]"}>{text}</span>}
            </div>
            <p className={"text-p-regular text-gray-400"}>{duration}</p>
        </div>
    )
}