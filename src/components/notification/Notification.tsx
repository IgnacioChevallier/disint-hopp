import React, {ReactNode} from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import {iconMap} from "../icon/IconMap";
import Icon from "../icon/Icon";

const notificationStyles = cva(
    ' rounded-lg flex flex-col gap-2.5 px-2.5 py-2.5 rounded-[24px]',
    {
        variants: {
            type: {
                default: 'bg-gray-100',
                detailed: 'bg-gray-100',
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
        <div className={notificationStyles({ type })}>
            <div className="flex items-center gap-2">
                <Icon name={iconName} size={'large'} />
                <div>
                    {subtitle && <p className="text-xs text-gray-600">{subtitle}</p>}
                    <p className="text-lg font-bold">{title}</p>
                </div>
            </div>
            {type === 'detailed' && description && (
                <p className="text-sm text-gray-800 mt-2">{description}</p>
            )}
        </div>
    );
};
