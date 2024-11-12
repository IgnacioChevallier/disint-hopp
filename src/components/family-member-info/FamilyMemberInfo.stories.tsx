import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import FamilyMemberInfo from './FamilyMemberInfo';

const meta: Meta<typeof FamilyMemberInfo> = {
    title: 'Components/FamilyMemberInfo',
    component: FamilyMemberInfo,
    parameters: {
        layout: 'top',
    },
    argTypes: {
        link: {
            control: 'text',
        },
        userName: {
            control: 'text',
        },
        role: {
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

type Story = StoryObj<typeof FamilyMemberInfo>;

export const Default: Story = {
    args: {
        link: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
        userName: 'User Name',
        role: 'Role',
    },
};

export const Detailed: Story = {
    args: {
        link: 'https://cdn-icons-png.flaticon.com/128/2335/2335114.png',
        userName: 'John Doe',
        role: 'Child',
    },
};
