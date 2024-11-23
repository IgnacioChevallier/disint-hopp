import {SidebarElementComponent} from "../sidebar-element/SidebarElement";
import Icon from "../icon/Icon";

export interface SidebarProps {
    children: SidebarElementComponent | SidebarElementComponent[]
}

export const Sidebar = ({children}: SidebarProps) => {
    return (
        <div className={"min-w-[243px] max-w-[243px] h-screen bg-background-main py-[24px] px-[8px]"}>
            <div className={"flex flex-row items-center justify-center p-[10px] gap-[10px]"}>
                <Icon name={"hopp"} size={"large"} color={"black"}/>
                <h2 className={"text-gray-800 text-h2-bold"}>Hopp</h2>
            </div>
            <div className={"flex flex-col gap-[16px]"}>
                {children}
            </div>
        </div>
    )
}