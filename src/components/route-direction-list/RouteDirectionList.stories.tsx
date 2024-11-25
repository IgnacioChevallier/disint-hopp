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
                icon: "train",
                label: "Route Direction 1",
                state: "previous",
                actual: false

            },
            {
                icon: "bus",
                label: "Route Direction 2",
                state: "default",
                actual: true
            },
            {
                icon: "location",
                label: "Route Direction 3",
                state: "default",
                actual: false
            }
        ]
    }
};
