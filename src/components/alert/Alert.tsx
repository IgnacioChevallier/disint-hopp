import {cva} from "class-variance-authority";
import Icon, {IconProps} from "../icon/Icon";

const alertVariant = cva("rounded px-3 py-4 gap-3 flex", {
    variants: {
        active: {
            true: "bg-white",
            false: "bg-gray-200",
        }
    }
});

export interface AlertProps {
    active: boolean,
    link: boolean,
    href: string,
    text: string,
    time: string,
    icon?: IconProps["name"]
}

export const Alert = ({active, link, href, text, time, icon}: AlertProps) => {
    return (
        <div className={alertVariant({active})} style={{width: 370, height: 99}}>
            <div className={"flex flex-row gap-3"} style={{width: 259}}>
                <div className={"flex items-center"}>
                    {icon && <Icon name={icon} size={"medium"}/>}
                </div>
                <div className={"flex flex-col align-center text-ellipsis"}>
                    <p>{text}</p>
                    {link && <a className={"flex text-ellipsis text-primary-light"} href={href}>Link</a>}
                </div>
            </div>
            <div className={"flex align-top"}>
                <p className={"font-bold"}>{time}</p>
            </div>
        </div>
    )
}
