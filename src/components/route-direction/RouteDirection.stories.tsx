import { Meta, StoryObj } from "@storybook/react";
import { RouteDirection } from "./RouteDirection";
import { iconMap } from "../icon/IconMap";

const meta: Meta<typeof RouteDirection> = {
    title: 'Components/RouteDirection',
    component: RouteDirection,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        iconName: {
            control: "select",
            options: Array.from(iconMap.keys())
        },
        label: {
            control: "text"
        }
    },
}

export default meta;

type Story = StoryObj<typeof RouteDirection>;

export const Default: Story = {
    args: {
        iconName: "alt routes",
        label: "Route Direction"
    }
}