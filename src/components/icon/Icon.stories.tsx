import { Meta, StoryObj } from '@storybook/react';
import Icon from "./Icon";
import {iconMap} from "./IconMap";

const meta: Meta<typeof Icon> = {
    title: 'Icons/Icon',
    component: Icon,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        name: {
            control: "select",
            options: Array.from(iconMap.keys())
        }
    },
};
export default meta;

type Story = StoryObj<typeof Icon>

export const IconStory: Story = {
    args: {
        name: 'store',
        size: 'large'
    }
};
