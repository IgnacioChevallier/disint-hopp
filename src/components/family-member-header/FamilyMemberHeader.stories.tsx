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

export const DefaultFamilyMemberHeader: Story = {
    args: {
        link: 'https://via.placeholder.com/150',
        userName: 'John Doe',
    },
};
