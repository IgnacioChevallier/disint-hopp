import {cva} from "class-variance-authority";
import React from "react";
import Icon from "../icon/Icon";

const sidebarElementVariant = cva(
    "flex flex-row items-center gap-2 px-3 py-1 rounded min-w-[179px] min-h-[29px] max-h-[29px] hover:cursor-pointer", {
    variants: {
        selected: {
            true: "bg-primary-light text-primary bg-opacity-10",
            false: "text-gray-400"
        }
    }
})

export interface SidebarElementProps {
    selected: boolean,
    icon: string,
    text: string,
    onClick: () => void
}

export type SidebarElementComponent = React.ReactElement<SidebarElementProps>

export const SidebarElement = ({ selected, icon, text, onClick }:SidebarElementProps): SidebarElementComponent => {
    return(
        <div className={sidebarElementVariant({selected})} onClick={onClick}>
            <Icon name={icon} size={"small"} color={selected ? "#0095FF" : "#1A1A1A"}/>
            <p className={"text-p-regular"}>{text}</p>
        </div>
    )
}