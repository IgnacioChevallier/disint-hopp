import { Meta, StoryObj } from "@storybook/react";
import { RouteDirectionList } from "./RouteDirectionList";

const meta: Meta<typeof RouteDirectionList> = {
    title: 'Travel/RouteDirectionList',
    component: RouteDirectionList,
    tags: ['autodocs'],
    parameters: {
        layout: 'top',
    },
};

export default meta;

type Story = StoryObj<typeof RouteDirectionList>;

export const Default: Story = {
    args: {
        routeDirections: [
            {
                icon: "alt routes",
                label: "Route Direction 1"
            },
            {
                icon: "alt routes",
                label: "Route Direction 2"
            },
            {
                icon: "alt routes",
                label: "Route Direction 3"
            }
        ]
    }
};
