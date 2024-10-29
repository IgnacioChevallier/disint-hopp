import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {Notification, NotificationProps} from "./Notification";

const meta: Meta<typeof Notification> = {
    title: 'Components/Notification',
    component: Notification,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        type: {
            control: {
                type: 'select',
                options: ['default', 'notification'],
            },
        },
    },
}
export default meta;

type Story = StoryObj<typeof Notification>;

export const Default: Story = {
    args: {
        type: 'default',
        title: 'Hopp',
        subtitle: 'Kilometers',
        icon: <a/>,
    },
};

export const Detailed: Story = {
    args: {
        type: 'detailed',
        title: 'Hopp',
        description: 'Description of the notification will be written here.',
        icon: <a/>,
    },
};
