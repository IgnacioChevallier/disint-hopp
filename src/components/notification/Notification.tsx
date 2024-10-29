import React, {ReactNode} from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const notificationStyles = cva(
    ' rounded-lg flex flex-col gap-2.5 px-2.5 py-2.5 rounded-[24px]',
    {
        variants: {
            type: {
                default: 'bg-gray-100',
                notification: 'bg-gray-100',
            },
        },
        defaultVariants: {
            type: 'default',
        },
    }
);

export interface BaseProps extends VariantProps<typeof notificationStyles> {
    title: string;
    icon: ReactNode;
}

export type NotificationProps =
    | (BaseProps & { type: 'default'; subtitle: string; description?: never })
    | (BaseProps & { type: 'notification'; description: string; subtitle?: never });

export const Notification = ({ type, title, subtitle, description, icon }: NotificationProps) => {
    return (
        <div className={notificationStyles({ type })}>
            <div className="flex items-center gap-2">
                <div className="text-xl">{icon}</div>
                <div>
                    {subtitle && <p className="text-xs text-gray-600">{subtitle}</p>}
                    <p className="text-lg font-bold">{title}</p>
                </div>
            </div>
            {type === 'notification' && description && (
                <p className="text-sm text-gray-800 mt-2">{description}</p>
            )}
        </div>
    );
};
