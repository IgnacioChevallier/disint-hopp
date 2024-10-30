import { Meta, StoryObj } from "@storybook/react";
import { RouteDirectionList } from "./RouteDirectionList";

const meta: Meta<typeof RouteDirectionList> = {
    title: 'Components/RouteDirectionList',
    component: RouteDirectionList,
    parameters: {
        layout: 'centered',
    },
};

export default meta;

type Story = StoryObj<typeof RouteDirectionList>;

export const Default: Story = {
    args: {
        routeDirections: [
            {
                iconName: "alt routes",
                label: "Route Direction 1"
            },
            {
                iconName: "alt routes",
                label: "Route Direction 2"
            },
            {
                iconName: "alt routes",
                label: "Route Direction 3"
            }
        ]
    }
};
