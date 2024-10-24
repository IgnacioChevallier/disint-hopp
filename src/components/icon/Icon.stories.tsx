import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Icon from "./Icon";
import {iconMap} from "./IconMap";

const meta: Meta<typeof Icon> = {
    title: 'Components/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: "number",
            min: 0
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
        name: 'placeholder',
        size: 24
    }
};
