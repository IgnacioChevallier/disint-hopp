import { Meta } from '@storybook/react';
import { iconMap } from '../icon/IconMap';
import Header from "./Header";
import React from "react";

const header: Meta<typeof Header> = {
    title: 'Common/Header',
    component: Header,
    tags: ['autodocs'],
    parameters: {
        layout: 'top',
    },
    argTypes: {
        leadingIconName: {
            control: 'select',
            options: Array.from(iconMap.keys()),
        },
        title: {
            control: 'text',
        },
        trailingIconName: {
            control: 'select',
            options: Array.from(iconMap.keys()),
        },
        showSearchbar: {
            control: 'boolean',
            options: [true, false],
        },
        placeholder: {
            control: 'text',
        },
        options: {
            disable: true,
        },
    },
    decorators: [
        (Story) => (
            <div className={'flex h-[100px]'}>
                <Story />
            </div>
        ),
    ],
};

export default header;

export const Account = {
    args: {
        title: 'Account',
        leadingIconName: 'sidebar',
        showSearchbar: false,
    },
};

export const TripHistory = {
    args: {
        title: 'Trip History',
        leadingIconName: 'sidebar',
        showSearchbar: false,
    },
};

export const FamilyGroup = {
    args: {
        title: 'Family Group',
        leadingIconName: 'sidebar',
        showSearchbar: false,
    },
};

export const Alerts = {
    args: {
        title: 'Alerts',
        leadingIconName: 'sidebar',
        showSearchbar: true,
        placeholder: 'Search',
        options: ['Option 1', 'Option 2', 'Option 3'],
    },
};
