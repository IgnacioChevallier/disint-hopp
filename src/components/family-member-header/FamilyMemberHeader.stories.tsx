import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import FamilyMemberHeader from "./FamilyMemberHeader";

const meta: Meta<typeof FamilyMemberHeader> = {
    title: 'Family/FamilyMemberHeader',
    component: FamilyMemberHeader,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        link: {
            control: 'text',
        },
        userName: {
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

type Story = StoryObj<typeof FamilyMemberHeader>;

export const Default: Story = {
    args: {
        link: 'https://cdn-icons-png.flaticon.com/128/3135/3135715.png',
        userName: 'John Doe',
    },
};

