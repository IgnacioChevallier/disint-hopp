import { Meta, StoryObj } from "@storybook/react";
import { PastTrips } from "./PastTrips";

const meta: Meta<typeof PastTrips> = {
    title: 'Components/PastTrips',
    component: PastTrips,
    parameters: {
        layout: 'top',
    },
};

export default meta;

type Story = StoryObj<typeof PastTrips>;

export const Default: Story = {
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
