import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Notification } from "./Notification";
import {iconMap} from "../icon/IconMap";

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
                options: ['default', 'detailed'],
            },
        },
        iconName: {
            control: "select",
            options: Array.from(iconMap.keys())
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
        iconName: 'placeholder',
    },
};

export const Detailed: Story = {
    args: {
        type: 'detailed',
        title: 'Hopp',
        description: 'Description of the notification will be written here.',
        iconName: 'placeholder',
    },
};
