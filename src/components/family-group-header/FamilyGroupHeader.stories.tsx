import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import FamilyGroupHeader from './FamilyGroupHeader';
import { iconMap } from '../icon/IconMap';

const metaFamilyGroupHeader: Meta<typeof FamilyGroupHeader> = {
    title: 'Components/FamilyGroupHeader',
    component: FamilyGroupHeader,
    parameters: {
        layout: 'top',
    },
    argTypes: {
        iconName: {
            control: 'select',
            options: Array.from(iconMap.keys()),
        },
        title: {
            control: 'text',
        },
        iconName2: {
            control: 'select',
            options: Array.from(iconMap.keys()),
        },
    },
};

export default metaFamilyGroupHeader;

export const Default = {
    args: {
        title: 'Family Group',
        iconName: 'arrow back',
        iconName2: 'account circle',
    },
};
