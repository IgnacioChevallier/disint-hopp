import {SidebarElementComponent} from "../sidebar-element/SidebarElement";
import Icon from "../icon/Icon";

export interface SidebarProps {
    children: SidebarElementComponent | SidebarElementComponent[]
}

export const Sidebar = ({children}: SidebarProps) => {
    return (
        <div className={"min-w-[243px] min-h-[851px] bg-background-main py-[24px] px-[32px]"}>
            <div className={"flex flex-row items-center p-[10px] gap-[10px]"}>
                <Icon name={"hopp"} size={"large"} color={"black"}/>
                <h2 className={"text-gray-800 text-h2-bold"}>Hopp</h2>
            </div>
            <div className={"flex flex-col gap-[16px] pt-[16px]"}>
                {children}
            </div>
        </div>
    )
}