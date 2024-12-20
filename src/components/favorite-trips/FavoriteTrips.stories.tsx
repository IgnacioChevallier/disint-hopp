import { Meta, StoryObj } from "@storybook/react";
import { FavoriteTrips } from "./FavoriteTrips";

const meta: Meta<typeof FavoriteTrips> = {
    title: 'Family/FavoriteTrips',
    component: FavoriteTrips,
    tags: ['autodocs'],
    parameters: {
        layout: 'top',
    },
    argTypes: {
        items: {
            table: {
                disable: true
            }
        },
    }
};

export default meta;

type Story = StoryObj<typeof FavoriteTrips>;

export const Default: Story = {
    args: {
        items: [
            {
                leadingIcon: 'home',
                text: 'Home',
                trailingIcon: 'dots'
            },
            {
                leadingIcon: 'work',
                text: 'Work',
                trailingIcon: 'dots'
            },
            {
                leadingIcon: 'school',
                text: 'School',
                trailingIcon: 'dots',
            },
        ]
    }
};
