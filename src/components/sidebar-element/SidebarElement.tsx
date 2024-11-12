import {cva} from "class-variance-authority";
import React from "react";
import Icon from "../icon/Icon";

const sidebarElementVariant = cva(
    "flex flex-row items-center gap-2 px-3 py-1 rounded min-w-[179px] max-w-[179px] min-h-[29px] max-h-[29px] hover:cursor-pointer", {
    variants: {
        selected: {
            true: "bg-primary text-white",
            false: "bg-white text-black"
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
            <Icon name={icon} size={"small"} color={selected ? "#FFF" : "#000"}/>
            <p className={"font-bold"}>{text}</p>
        </div>
    )
}