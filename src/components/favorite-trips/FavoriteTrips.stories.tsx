import { Meta, StoryObj } from "@storybook/react";
import { FavoriteTrips } from "./FavoriteTrips";

const meta: Meta<typeof FavoriteTrips> = {
    title: 'Components/FavoriteTrips',
    component: FavoriteTrips,
    parameters: {
        layout: 'top',
    },
};

export default meta;

type Story = StoryObj<typeof FavoriteTrips>;

export const Default: Story = {
    args: {
        items: [
            {
                text: 'Home',
                trailingIcon: 'dots'
            },
            {
                text: 'Work',
                trailingIcon: 'dots'
            },
            {
                text: 'School',
                trailingIcon: 'dots',
            },
        ]
    }
};
