import {cva} from "class-variance-authority";
import {ReactNode} from "react";

const sidebarElementVariant = cva("flex flex-row items-center gap-2 px-3 py-1 rounded", {
    variants: {
        selected: {
            true: "bg-primary",
            false: "bg-white"
        }
    }
})

export interface SidebarElementProps {
    selected: boolean,
    icon: ReactNode,
    text: string
}

export const SidebarElement = ({ selected, icon, text }:SidebarElementProps) => {
    return(
        <div className={sidebarElementVariant({selected})} style={{width: 179, height: 29}}>
            {icon}
            <p className={"font-bold"}>{text}</p>
        </div>
    )
}