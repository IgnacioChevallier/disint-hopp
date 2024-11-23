import { Meta, StoryObj } from "@storybook/react";
import { RouteDirection } from "./RouteDirection";
import { iconMap } from "../icon/IconMap";

const meta: Meta<typeof RouteDirection> = {
    title: 'Travel/RouteDirection',
    component: RouteDirection,
    tags: ['autodocs'],
    parameters: {
        layout: 'top',
    },
    argTypes: {
        icon: {
            control: "select",
            options: Array.from(iconMap.keys())
        },
        label: {
            control: "text"
        }
    },
    decorators: [
        (Story) => (
            <div className={"w-screen"}>
                <Story />
            </div>
        )
    ]
}

export default meta;

type Story = StoryObj<typeof RouteDirection>;

export const Default: Story = {
    args: {
        icon: "alt routes",
        label: "Route Direction"
    }
}