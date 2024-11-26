import { Meta } from '@storybook/react';
import FamilyGroupHeader from './FamilyGroupHeader';
import { iconMap } from '../icon/IconMap';
import React from "react";

const metaFamilyGroupHeader: Meta<typeof FamilyGroupHeader> = {
    title: 'Family/FamilyGroupHeader',
    component: FamilyGroupHeader,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        iconName: {
            control: 'select',
            options: Array.from(iconMap.keys()),
        },
        title: {
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

export default metaFamilyGroupHeader;

export const Default = {
    args: {
        title: 'Family Group',
        iconName: 'location',
    },
};
