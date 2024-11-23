import { Meta } from '@storybook/react';
import FamilyGroupHeader from './FamilyGroupHeader';
import { iconMap } from '../icon/IconMap';

const metaFamilyGroupHeader: Meta<typeof FamilyGroupHeader> = {
    title: 'Family/FamilyGroupHeader',
    component: FamilyGroupHeader,
    tags: ['autodocs'],
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
    },
};

export default metaFamilyGroupHeader;

export const Default = {
    args: {
        title: 'Family Group',
        iconName: 'location',
    },
};
