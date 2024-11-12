import {ListItem} from "./ListItem";
import {Meta, StoryObj} from "@storybook/react";
import {iconMap} from "../icon/IconMap";


const meta: Meta<typeof ListItem> = {
    title: 'Components/ListItem',
    component: ListItem,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        text: {
            control: "text"
        },
        controlType: {
            control: "select",
            options: [undefined, "checkbox", "radio", "toggle"]
        },
        leadingIcon: {
            control: "select",
            options: [undefined, ...Array.from(iconMap.keys())]
        },
        trailingIcon: {
            control: "select",
            options: [undefined, ...Array.from(iconMap.keys())]
        },
        additionalText: {
            control: "text",
        }
    },
};

export default meta;

type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
    args: {
        text: 'List Item Example',
        leadingIcon: 'placeholder',
        trailingIcon: 'placeholder',
        controlType: 'toggle',
        additionalText: 'Additional Text'
    },
};

export const WithLeadingIcon: Story = {
    args: {
        text: 'Share routes',
        leadingIcon: 'share',
        trailingIcon: 'undefined',
    },
}

export const WithTrailingIcon: Story = {
    args: {
        text: 'Inspect options',
        trailingIcon: 'three dots',
    },
}

export const WithControlType: Story = {
    args: {
        text: 'Toggle me',
        controlType: 'toggle',
    },
}