import { Meta, StoryObj } from "@storybook/react";
import { TransportationMethod } from "./TransportationMethod";
import {iconMap} from "../icon/IconMap";

const meta: Meta<typeof TransportationMethod> = {
    title: "Components/TransportationMethod",
    component: TransportationMethod,
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
        text: '1234'
    }
};
