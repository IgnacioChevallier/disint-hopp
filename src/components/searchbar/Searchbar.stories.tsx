import { Meta, StoryObj } from "@storybook/react";
import { Searchbar } from "./Searchbar";
import {iconMap} from "../icon/IconMap";

const meta: Meta<typeof Searchbar> = {
    title: 'Common/Searchbar',
    component: Searchbar,
    tags: ['autodocs'],
    parameters: {
        layout: 'top',
    },
    argTypes: {
        leadingIcon: {
            control: "select",
            options: [undefined, ...Array.from(iconMap.keys())]
        },
        trailingIcon: {
            control: "select",
            options: [undefined, ...Array.from(iconMap.keys())]
        }
    }
};

export default meta;

type Story = StoryObj<typeof Searchbar>;

export const Default: Story = {
    args: {
        placeholder: 'Search...',
        leadingIcon: 'bus alert',
        trailingIcon: 'search',
        options: [
            'Chicago University of Chicago',
            'Chicago Lincoln Park Zoo',
            'Chicago Hawk II Airport',
            'Chicago, Illinois, USA'
        ]
    }
};

export const WithDifferentIcon: Story = {
    args: {
        placeholder: 'Search...',
        leadingIcon: 'add stop',
        trailingIcon: 'search',
        options: [
            'New York Times Square',
            'New York Central Park',
            'New York Empire State Building',
            'New York, USA'
        ]
    }
};

export const WithManyOptions: Story = {
    args: {
        placeholder: 'Search...',
        leadingIcon: 'account circle',
        trailingIcon: 'search',
        options: [
            'Option 1',
            'Option 2',
            'Option 3',
            'Option 4',
            'Option 5',
            'Option 6',
            'Option 7',
            'Option 8',
            'Option 9',
            'Option 10',
            'Option 11',
            'Option 12',
            'Option 13'
        ]
    }
};