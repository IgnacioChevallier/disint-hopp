import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import FamilyMemberHeader from "./FamilyMemberHeader";

const meta: Meta<typeof FamilyMemberHeader> = {
    title: 'Components/FamilyMemberHeader',
    component: FamilyMemberHeader,
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
        link: 'https://cdn-icons-png.flaticon.com/128/149/149071.png',
        userName: 'User Name',
    },
};

export const Detailed: Story = {
    args: {
        link: 'https://i.imgur.com/izOWPQW_d.webp?maxwidth=520&shape=thumb&fidelity=high',
        userName: 'Clone',
    },
};
