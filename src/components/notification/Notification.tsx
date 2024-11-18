import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import {iconMap} from "../icon/IconMap";
import Icon from "../icon/Icon";

const notificationStyles = cva(
    ' rounded-lg flex flex-col gap-[10px] px-[10px] py-[10px] rounded-[24px] min-h-[87px] justify-center',
    {
        variants: {
            type: {
                default: 'bg-white',
                detailed: 'bg-white',
            },
        },
        defaultVariants: {
            type: 'default',
        },
    }
);

export interface BaseProps extends VariantProps<typeof notificationStyles> {
    title: string;
    iconName: keyof typeof iconMap;
}

export type NotificationProps =
    | (BaseProps & { type: 'default'; subtitle: string; description?: never })
    | (BaseProps & { type: 'detailed'; description: string; subtitle?: never });

export const Notification = ({ type, title, subtitle, description, iconName }: NotificationProps) => {
    return (
        <div className="px-[10px] py-[10px]">
            <div className={notificationStyles({ type })}>
                <div className="flex items-center gap-2 max-w-full truncate overflow-hidden">
                    <Icon name={iconName} size={'large'} color={"black"}/>
                    <div>
                        {subtitle && <p className="text-p-regular line-clamp-1">{subtitle}</p>}
                        <p className="text-h3-bold line-clamp-1">{title}</p>
                    </div>
                </div>
                {type === 'detailed' && description && (
                    <p className="text-p-regular line-clamp-1">{description}</p>
                )}
            </div>
        </div>
    );
};
