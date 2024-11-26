import { Meta } from '@storybook/react';
import { iconMap } from '../icon/IconMap';
import Header from "./Header";

const header: Meta<typeof Header> = {
    title: 'Common/Header',
    component: Header,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        leadingIconName: {
            control: 'select',
            options: [...Array.from(iconMap.keys()), undefined],
        },
        title: {
            control: 'text',
        },
        trailingIconName: {
            control: 'select',
            options: [...Array.from(iconMap.keys()), undefined],
        },
        showSearchbar: {
            table: {disable: true}
        },
        options: {
            table: {disable: true}
        },
        placeholder: {
            table: {disable: true}
        },
        trailingOnClick: {
            table: {disable: true,}
        },
        leadingOnClick: {
            table: {disable: true,}
        },
    },
    decorators: [
        (Story) => (
            <div className={'w-[400px] h-[100px]'}>
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
        options: ['Line 123', 'Line 1234', 'Line 435'],
    },
};
