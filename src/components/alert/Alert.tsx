import {cva} from "class-variance-authority";
import React, {HTMLAttributes} from "react";
import Icon, {IconProps} from "../icon/Icon";

const alertVariant = cva("flex flex-row rounded px-3 py-4 gap-3 h-[90px] w-full", {
    variants: {
        active: {
            true: "bg-white",
            false: "bg-gray-100",
        }
    }
});

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    active: boolean,
    link: boolean,
    href: string,
    text: string,
    time: string,
    icon?: IconProps["name"]
}

export type AlertComponent = React.ReactElement<AlertProps>

export const Alert = ({ active, link, href, text, time, icon, ...props }: AlertProps) => {
    return (
        <div className={alertVariant({ active })} {...props} >
            <div className="flex items-center">
                {icon && <Icon name={icon} size="medium" /> }
            </div>
            <div className="flex flex-col flex-grow text-ellipsis overflow-hidden justify-center">
                <span className={`text-p-regular text-ellipsis ${link ? "line-clamp-2" : "line-clamp-3"}`}>
                    {text}
                </span>
                {link && (
                    <a
                        className="flex text-ellipsis text-primary-light line-clamp-1"
                        href={href}
                    >
                        Link
                    </a>
                )}
            </div>
            <div className="flex min-w-[68px] flex-row-reverse flex-end">
                <span className="text-p-bold">{time}</span>
            </div>
        </div>
    );
};
