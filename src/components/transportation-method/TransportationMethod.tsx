import Icon from "../icon/Icon";
import {iconMap} from "../icon/IconMap";

export interface TransportationMethodProps {
    icon: keyof typeof iconMap | string;
    text: string
}

export const TransportationMethod = ({icon, text}: TransportationMethodProps) => {
    return (
        <div className={"min-w-[40px] min-h-[40px] max-h-[40px] bg-primary rounded-full py-[12px] px-[12px] flex flex-row items-center align-center gap-[5px]"}>
            <Icon name={icon} size={"medium"}/>
            <span className={"text-p-regular text-white"}>{text}</span>
        </div>
    )
}