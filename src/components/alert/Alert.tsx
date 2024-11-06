import {cva} from "class-variance-authority";
import Icon from "../icon/Icon";

const alertVariant = cva("flex flex-row rounded px-3 py-4 gap-3 h-[90px] w-full", {
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
    icon: string
}

export const Alert = ({ active, link, href, text, time, icon }: AlertProps) => {
    return (
        <div className={alertVariant({ active })}>
            <div className="flex items-center">
                <Icon name={icon} size="medium" />
            </div>
            <div className="flex flex-col text-ellipsis overflow-hidden w-auto">
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
            <div className="flex min-w-[68px]">
                <span className="text-p-bold">{time}</span>
            </div>
        </div>
    );
};
