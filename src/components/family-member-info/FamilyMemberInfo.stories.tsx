import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import FamilyMemberInfo from './FamilyMemberInfo';

const meta: Meta<typeof FamilyMemberInfo> = {
    title: 'Family/FamilyMemberInfo',
    component: FamilyMemberInfo,
    tags: ['autodocs'],
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
            <div className={'w-screen flex justify-center p-4'}>
                <Story />
            </div>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof FamilyMemberInfo>;

export const Default: Story = {
    args: {
        link: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
        userName: 'John Doe',
        role: 'Member',
    },
};

