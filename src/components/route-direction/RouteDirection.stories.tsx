import { Meta, StoryObj } from "@storybook/react";
import { RouteDirection } from "./RouteDirection";
import { iconMap } from "../icon/IconMap";

const meta: Meta<typeof RouteDirection> = {
    title: 'Travel/Sub-Components/RouteDirection',
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
        },
        position: {
            control: "select",
            options: ["first", "middle", "last"],
        },
        state: {
            control: "select",
            options: ["default", "previous", "disabled"],
        },
        actual: {
            control: "boolean",
        },
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
        label: "Get on the next Bus 66",
        position: "middle",
        state: "default",
        actual: false
    }
};