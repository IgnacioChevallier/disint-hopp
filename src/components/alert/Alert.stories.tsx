import {Meta, StoryObj} from "@storybook/react";
import {Alert} from "./Alert";
import {iconMap} from "../icon/IconMap";

const meta: Meta<typeof Alert> = {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        layout: 'top'
    },
    argTypes: {
        icon: {
            control: "select",
            options: [...Array.from(iconMap.keys()), undefined],
        },
        active: {
            control: "boolean",
        },
        link: {
            control: "boolean",
        }
    }
}

export default meta;

type Story = StoryObj<typeof Alert>

export const Active: Story = {
    args: {
        active: true,
        link: true,
        href: 'https://www.google.com',
        text: 'Lines 123, 434, 843, 945 currently affected by strike',
        time: '6:24 am',
        icon: 'placeholder'
    }
}
export const Inactive: Story = {
    args: {
        active: false,
        link: true,
        href: 'https://www.google.com',
        text: 'Lines 123, 434, 843, 945 currently affected by strike',
        time: '6:24 am',
        icon: 'placeholder'
    }
}
