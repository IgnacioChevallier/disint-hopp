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
                options: ['large', 'medium', 'small'],
            },
        },
        link: {
            control: {
                type: 'text',
            }
        },
        altLink: {
            control: 'text',
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
        link: 'https://i.imgur.com/izOWPQW_d.webp?maxwidth=520&shape=thumb&fidelity=high',
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
        link: 'https://i.imgur.com/izOWPQW_d.webp?maxwidth=520&shape=thumb&fidelity=high',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        link: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
    },
};


