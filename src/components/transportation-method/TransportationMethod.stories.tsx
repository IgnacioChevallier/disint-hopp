import { Meta, StoryObj } from "@storybook/react";
import { TransportationMethod } from "./TransportationMethod";
import {iconMap} from "../icon/IconMap";

const meta: Meta<typeof TransportationMethod> = {
    title: "Travel/Sub-Components/TransportationMethod",
    component: TransportationMethod,
    tags: ['autodocs'],
    parameters: {
        layout: "centered",
    },
    argTypes: {
        icon: {
            control: "select",
            options: Array.from(iconMap.keys())
        }
    }
};
export default meta;

type Story = StoryObj<typeof TransportationMethod>;

export const Default: Story = {
    args: {
        icon: 'placeholder',
        text: '1234',
        time: '14min'
    }
};
