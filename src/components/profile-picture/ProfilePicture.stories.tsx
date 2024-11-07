import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ProfilePicture from './ProfilePicture';
import { iconMap } from '../icon/IconMap';

const meta: Meta<typeof ProfilePicture> = {
    title: 'Components/ProfilePicture',
    component: ProfilePicture,
    parameters: {
        layout: 'top',
    },
    argTypes: {
        size: {
            control: {
                type: 'select',
                options: ['large', 'medium', 'small', 'extra-small', 'extra-large'],
            },
        },
        iconName: {
            control: 'select',
            options: Array.from(iconMap.keys()),
        },
    },
    decorators: [
        (Story) => (
            <div className={'w-screen flex justify-center'}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof ProfilePicture>;

export const Large: Story = {
    args: {
        size: 'large',
        iconName: 'account circle' as keyof typeof iconMap,
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
        iconName: 'account circle' as keyof typeof iconMap,
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        iconName: 'account circle' as keyof typeof iconMap,
    },
};


