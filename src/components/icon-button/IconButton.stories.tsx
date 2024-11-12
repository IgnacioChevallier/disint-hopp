import { IconButton } from "./IconButton";
import { Meta, StoryObj } from "@storybook/react";
import {iconMap} from "../icon/IconMap";

const meta: Meta<typeof IconButton> = {
    title: 'Components/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        color: {
            control: "select",
            options: ["primary", "danger", "gray"]
        },
        size: {
            control: "select",
            options: ["small", "medium", "large"]
        },
        disabled: {
            control: "boolean"
        },
        iconName: {
            control: "select",
            options: Array.from(iconMap.keys())
        },
        iconColor: {
            table: { disable: true }  // Hide from controls
        },
        iconSize: {
            table: { disable: true }  // Hide from controls
        }
    },
}

export default meta;


type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
    args: {
        color: "gray",
        size: "medium",
        disabled: false,
        iconName: '360',
        onClick: () => {}
    }
}