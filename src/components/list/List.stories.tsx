import { Meta, StoryObj } from "@storybook/react";
import {List} from "./List";

const meta: Meta<typeof List> = {
    title: 'Components/List',
    component: List,
    parameters: {
        layout: 'top',
    },
};

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
    args: {
        items: [
            {
                text: 'List Item 1',
            },
            {
                text: 'List Item 2',
            },
            {
                text: 'List Item 3',
            }
        ]
    }
};

export const PastTrips: Story = {
    args: {
        items: [
            {
                text: 'Home',
                additionalText: '23\' $1500',
            },
            {
                text: 'Work',
                additionalText: '28\' $1700',
            },
            {
                text: 'Home',
                additionalText: '15\' $1300',
            },
        ]
    }
};
