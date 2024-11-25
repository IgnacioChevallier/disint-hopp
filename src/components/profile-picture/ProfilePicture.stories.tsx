import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ProfilePicture from './ProfilePicture';

const meta: Meta<typeof ProfilePicture> = {
    title: 'ProfilePicture/ProfilePicture',
    component: ProfilePicture,
    tags: ['autodocs'],
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
        link: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
        link: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        link: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
    },
};


